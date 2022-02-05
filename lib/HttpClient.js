"use strict";
/**
 * @api.video/nodejs-client
 * api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importStar(require("got"));
const ObjectSerializer_1 = __importDefault(require("./ObjectSerializer"));
const ApiVideoError_1 = __importDefault(require("./ApiVideoError"));
class HttpClient {
    constructor(params) {
        this.isStillAuthenticated = async (response, retry) => {
            if (response.statusCode === 401) {
                const { tokenType, accessToken } = await this.retrieveAccessToken.call(this);
                const updatedOptions = {
                    headers: {
                        Authorization: `${tokenType} ${accessToken}`,
                    },
                };
                // Save for further requests
                this.baseRequest.defaults.options = got_1.default.mergeOptions(this.baseRequest.defaults.options, updatedOptions);
                // Make a new retry
                return retry(updatedOptions);
            }
            // No changes otherwise
            return response;
        };
        this.apiKey = params.apiKey;
        this.baseUri = params.baseUri;
        this.chunkSize = params.chunkSize;
        this.tokenType = 'Bearer';
        this.headers = {
            'User-Agent': `api.video client (nodejs; v:2.2.1; )${params.applicationName ? ' ' + params.applicationName : ''}`,
            Accept: 'application/json, */*;q=0.8',
        };
        this.baseRequest = got_1.default.extend({
            prefixUrl: this.baseUri,
            headers: this.headers,
            mutableDefaults: true,
            hooks: {
                afterResponse: [this.isStillAuthenticated.bind(this)],
                beforeRequest: [
                    async (options) => {
                        if (!options.headers.Authorization) {
                            if (!this.accessToken) {
                                await this.retrieveAccessToken.call(this);
                            }
                            // @ts-ignore
                            const { tokenType, accessToken } = this.accessToken;
                            // eslint-disable-next-line no-param-reassign
                            options.headers.Authorization = `${tokenType} ${accessToken}`;
                        }
                    },
                ],
            },
            handlers: [
                (options, next) => {
                    if (options.isStream) {
                        return next(options);
                    }
                    return (next(options)
                        // @ts-ignore
                        .catch((error) => {
                        if (error instanceof got_1.RequestError) {
                            // @ts-ignore
                            const { response } = error;
                            const contentType = response?.headers['content-type'];
                            if (contentType === 'application/problem+json') {
                                // @ts-ignore
                                throw new ApiVideoError_1.default(response);
                            }
                        }
                        throw error;
                    }));
                },
            ],
        });
    }
    getChunkSize() {
        return this.chunkSize;
    }
    async getAccessToken() {
        return this.accessToken || (await this.retrieveAccessToken());
    }
    async retrieveAccessToken() {
        const { statusCode, body } = await got_1.default.post(`${this.baseUri}/auth/api-key`, {
            json: { apiKey: this.apiKey },
            responseType: 'json',
        });
        this.accessToken = ObjectSerializer_1.default.deserialize(body, 'AccessToken', '');
        if (statusCode >= 400) {
            throw new Error('Authentication Failed');
        }
        return this.accessToken;
    }
    call(path, queryOptions) {
        return this.baseRequest.extend(queryOptions || {})(path);
    }
}
exports.default = HttpClient;
