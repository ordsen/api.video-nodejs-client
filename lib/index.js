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
const HttpClient_1 = __importDefault(require("./HttpClient"));
const CaptionsApi_1 = __importDefault(require("./api/CaptionsApi"));
const ChaptersApi_1 = __importDefault(require("./api/ChaptersApi"));
const LiveStreamsApi_1 = __importDefault(require("./api/LiveStreamsApi"));
const PlayerThemesApi_1 = __importDefault(require("./api/PlayerThemesApi"));
const RawStatisticsApi_1 = __importDefault(require("./api/RawStatisticsApi"));
const UploadTokensApi_1 = __importDefault(require("./api/UploadTokensApi"));
const VideosApi_1 = __importDefault(require("./api/VideosApi"));
const WatermarksApi_1 = __importDefault(require("./api/WatermarksApi"));
const WebhooksApi_1 = __importDefault(require("./api/WebhooksApi"));
const PRODUCTION_BASE_URI = 'https://ws.api.video';
const DEFAULT_CHUNK_SIZE = 50 * 1024 * 1024;
const MIN_CHUNK_SIZE = 5 * 1024 * 1024;
const MAX_CHUNK_SIZE = 128 * 1024 * 1024;
class ApiVideoClient {
    constructor(params) {
        if (params.chunkSize &&
            (params.chunkSize < MIN_CHUNK_SIZE || params.chunkSize > MAX_CHUNK_SIZE)) {
            throw new Error('Invalid chunk size value. Must be greater than ' +
                MIN_CHUNK_SIZE +
                ' bytes and lower than ' +
                MAX_CHUNK_SIZE +
                ' bytes.');
        }
        if (params.applicationName &&
            !/^[\w-\/\.]{1,50}$/.test(params.applicationName)) {
            throw new Error("Invalid application name. Allowed characters: A-Z, a-z, 0-9, '-', '_', '/'. Max length: 50.");
        }
        this.httpClient = new HttpClient_1.default(Object.assign(Object.assign({}, params), { baseUri: params.baseUri || PRODUCTION_BASE_URI, chunkSize: params.chunkSize || DEFAULT_CHUNK_SIZE }));
        this._captions = new CaptionsApi_1.default(this.httpClient);
        this._chapters = new ChaptersApi_1.default(this.httpClient);
        this._liveStreams = new LiveStreamsApi_1.default(this.httpClient);
        this._playerThemes = new PlayerThemesApi_1.default(this.httpClient);
        this._rawStatistics = new RawStatisticsApi_1.default(this.httpClient);
        this._uploadTokens = new UploadTokensApi_1.default(this.httpClient);
        this._videos = new VideosApi_1.default(this.httpClient);
        this._watermarks = new WatermarksApi_1.default(this.httpClient);
        this._webhooks = new WebhooksApi_1.default(this.httpClient);
    }
    async getAccessToken() {
        return this.httpClient.getAccessToken();
    }
    /**
     * Get an CaptionsApi instance
     * @return CaptionsApi
     */
    get captions() {
        return this._captions;
    }
    /**
     * Get an ChaptersApi instance
     * @return ChaptersApi
     */
    get chapters() {
        return this._chapters;
    }
    /**
     * Get an LiveStreamsApi instance
     * @return LiveStreamsApi
     */
    get liveStreams() {
        return this._liveStreams;
    }
    /**
     * Get an PlayerThemesApi instance
     * @return PlayerThemesApi
     */
    get playerThemes() {
        return this._playerThemes;
    }
    /**
     * Get an RawStatisticsApi instance
     * @return RawStatisticsApi
     */
    get rawStatistics() {
        return this._rawStatistics;
    }
    /**
     * Get an UploadTokensApi instance
     * @return UploadTokensApi
     */
    get uploadTokens() {
        return this._uploadTokens;
    }
    /**
     * Get an VideosApi instance
     * @return VideosApi
     */
    get videos() {
        return this._videos;
    }
    /**
     * Get an WatermarksApi instance
     * @return WatermarksApi
     */
    get watermarks() {
        return this._watermarks;
    }
    /**
     * Get an WebhooksApi instance
     * @return WebhooksApi
     */
    get webhooks() {
        return this._webhooks;
    }
}
module.exports = ApiVideoClient;
