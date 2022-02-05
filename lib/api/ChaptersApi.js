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
class ChaptersApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Delete a chapter
     * @param videoId The unique identifier for the video you want to delete a chapter from.
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
        const localVarPath = '/videos/{videoId}/chapters/{language}'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));
        queryParams.method = 'DELETE';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'void', ''));
    }
    /**
     * Retrieve a list of all chapters for a specified video.
     * List video chapters
     * @param {Object} searchParams
     * @param { string } searchParams.videoId The unique identifier for the video you want to retrieve a list of chapters for.
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
        const localVarPath = '/videos/{videoId}/chapters'
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
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'ChaptersListResponse', ''));
    }
    /**
     * Chapters help your viewers find the sections of the video they are most interested in viewing. Tutorials that use the [chapters endpoint](https://api.video/blog/endpoints/chapters).
     * Show a chapter
     * @param videoId The unique identifier for the video you want to show a chapter for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
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
        const localVarPath = '/videos/{videoId}/chapters/{language}'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));
        queryParams.method = 'GET';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Chapter', ''));
    }
    /**
     * Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos) for more details.
     * Upload a chapter
     * @param videoId The unique identifier for the video you want to upload a chapter for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     * @param file The VTT file describing the chapters you want to upload.
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
        const localVarPath = '/videos/{videoId}/chapters/{language}'
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
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Chapter', ''));
    }
}
exports.default = ChaptersApi;
