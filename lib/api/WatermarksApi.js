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
class WatermarksApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Delete a watermark. A watermark is a static image overlapping a video used as a \"stamp\" to limit leetching.
     * Delete a watermark
     * @param watermarkId The watermark ID for the watermark you want to delete.
     */
    async delete(watermarkId) {
        const queryParams = {};
        queryParams.headers = {};
        if (watermarkId === null || watermarkId === undefined) {
            throw new Error('Required parameter watermarkId was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/watermarks/{watermarkId}'
            .substring(1)
            .replace('{' + 'watermarkId' + '}', encodeURIComponent(String(watermarkId)));
        queryParams.method = 'DELETE';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'void', ''));
    }
    /**
     * List all watermarks. A watermark is a static image overlapping a video used as a \"stamp\" to limit leetching.
     * List all watermarks
     * @param {Object} searchParams
     * @param { string } searchParams.sortBy Allowed: createdAt. You can search by the time watermark were created at.
     * @param { string } searchParams.sortOrder Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    async list({ sortBy, sortOrder, currentPage, pageSize, }) {
        const queryParams = {};
        queryParams.headers = {};
        // Path Params
        const localVarPath = '/watermarks'.substring(1);
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (sortBy !== undefined) {
            urlSearchParams.append('sortBy', ObjectSerializer_1.default.serialize(sortBy, 'string', ''));
        }
        if (sortOrder !== undefined) {
            urlSearchParams.append('sortOrder', ObjectSerializer_1.default.serialize(sortOrder, 'string', ''));
        }
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
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'WatermarksListResponse', ''));
    }
    /**
     * Create a new watermark by uploading a .jpg or a .png image. A watermark is a static image overlapping a video used as a \"stamp\" to limit leetching.
     * Upload a watermark
     * @param file The .jpg or .png image to be added as a watermark.
     */
    async upload(file) {
        const queryParams = {};
        queryParams.headers = {};
        if (!fs_1.existsSync(file)) {
            throw new Error(`${file} must be a readable source file`);
        }
        const length = fs_1.statSync(file).size;
        if (length <= 0) {
            throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/watermarks'.substring(1);
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        const filename = path_1.default.basename(file);
        formData.append(filename, Buffer.isBuffer(file) ? file : fs_1.createReadStream(file), filename);
        queryParams.body = formData;
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Watermark', ''));
    }
}
exports.default = WatermarksApi;
