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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectSerializer_1 = __importDefault(require("../ObjectSerializer"));
/**
 * no description
 */
class AuthenticationApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication. All tutorials using the [authentication endpoint](https://api.video/blog/endpoints/authenticate)
     * Authenticate
     * @param authenticatePayload
     */
    async authenticate(authenticatePayload) {
        const queryParams = {};
        queryParams.headers = {};
        if (authenticatePayload === null || authenticatePayload === undefined) {
            throw new Error('Required parameter authenticatePayload was null or undefined when calling authenticate.');
        }
        // Path Params
        const localVarPath = '/auth/api-key'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(authenticatePayload, 'AuthenticatePayload', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'AccessToken', ''));
    }
    /**
     * Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token.
     * Refresh token
     * @param refreshTokenPayload
     */
    async refresh(refreshTokenPayload) {
        const queryParams = {};
        queryParams.headers = {};
        if (refreshTokenPayload === null || refreshTokenPayload === undefined) {
            throw new Error('Required parameter refreshTokenPayload was null or undefined when calling refresh.');
        }
        // Path Params
        const localVarPath = '/auth/refresh'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(refreshTokenPayload, 'RefreshTokenPayload', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'AccessToken', ''));
    }
}
exports.default = AuthenticationApi;
