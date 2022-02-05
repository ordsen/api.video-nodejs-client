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
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const url_1 = require("url");
const form_data_1 = __importDefault(require("form-data"));
const ObjectSerializer_1 = __importDefault(require("../ObjectSerializer"));
/**
 * no description
 */
class CaptionsApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
     * Delete a caption
     * @param videoId The unique identifier for the video you want to delete a caption from.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     */
    async delete(videoId, language) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling delete.');
        }
        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/captions/{language}'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));
        queryParams.method = 'DELETE';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'void', ''));
    }
    /**
     * Retrieve a list of available captions for the videoId you provide.
     * List video captions
     * @param {Object} searchParams
     * @param { string } searchParams.videoId The unique identifier for the video you want to retrieve a list of captions for.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    async list({ videoId, currentPage, pageSize, }) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling list.');
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/captions'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (currentPage !== undefined) {
            urlSearchParams.append('currentPage', ObjectSerializer_1.default.serialize(currentPage, 'number', ''));
        }
        if (pageSize !== undefined) {
            urlSearchParams.append('pageSize', ObjectSerializer_1.default.serialize(pageSize, 'number', ''));
        }
        queryParams.searchParams = urlSearchParams;
        queryParams.method = 'GET';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'CaptionsListResponse', ''));
    }
    /**
     * Display a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a response indicating the caption was not found. Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).
     * Show a caption
     * @param videoId The unique identifier for the video you want captions for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation
     */
    async get(videoId, language) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling get.');
        }
        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling get.');
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/captions/{language}'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));
        queryParams.method = 'GET';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Caption', ''));
    }
    /**
     * To have the captions on automatically, use this PATCH to set default: true.
     * Update caption
     * @param videoId The unique identifier for the video you want to have automatic captions for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     * @param captionsUpdatePayload
     */
    async update(videoId, language, captionsUpdatePayload = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling update.');
        }
        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling update.');
        }
        if (captionsUpdatePayload === null || captionsUpdatePayload === undefined) {
            throw new Error('Required parameter captionsUpdatePayload was null or undefined when calling update.');
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/captions/{language}'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(captionsUpdatePayload, 'CaptionsUpdatePayload', ''), contentType);
        queryParams.method = 'PATCH';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Caption', ''));
    }
    /**
     * Upload a VTT file to add captions to your video.  Read our [captioning tutorial](https://api.video/blog/tutorials/adding-captions) for more details.
     * Upload a caption
     * @param videoId The unique identifier for the video you want to add a caption to.
     * @param language A valid BCP 47 language representation.
     * @param file The video text track (VTT) you want to upload.
     */
    async upload(videoId, language, file) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling upload.');
        }
        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling upload.');
        }
        if (!fs_1.existsSync(file)) {
            throw new Error(`${file} must be a readable source file`);
        }
        const length = fs_1.statSync(file).size;
        if (length <= 0) {
            throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/captions/{language}'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        const filename = path_1.default.basename(file);
        formData.append(filename, Buffer.isBuffer(file) ? file : fs_1.createReadStream(file), filename);
        queryParams.body = formData;
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Caption', ''));
    }
}
exports.default = CaptionsApi;
