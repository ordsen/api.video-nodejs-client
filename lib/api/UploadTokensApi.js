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
const url_1 = require("url");
const ObjectSerializer_1 = __importDefault(require("../ObjectSerializer"));
/**
 * no description
 */
class UploadTokensApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.
     * Delete an upload token
     * @param uploadToken The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.
     */
    async deleteToken(uploadToken) {
        const queryParams = {};
        queryParams.headers = {};
        if (uploadToken === null || uploadToken === undefined) {
            throw new Error('Required parameter uploadToken was null or undefined when calling deleteToken.');
        }
        // Path Params
        const localVarPath = '/upload-tokens/{uploadToken}'
            .substring(1)
            .replace('{' + 'uploadToken' + '}', encodeURIComponent(String(uploadToken)));
        queryParams.method = 'DELETE';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'void', ''));
    }
    /**
     * A delegated token is used to allow secure uploads without exposing your API key. Use this endpoint to retrieve a list of all currently active delegated tokens. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
     * List all active upload tokens.
     * @param {Object} searchParams
     * @param { &#39;createdAt&#39; | &#39;ttl&#39; } searchParams.sortBy Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format.
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    async list({ sortBy, sortOrder, currentPage, pageSize, } = {}) {
        const queryParams = {};
        queryParams.headers = {};
        // Path Params
        const localVarPath = '/upload-tokens'.substring(1);
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (sortBy !== undefined) {
            urlSearchParams.append('sortBy', ObjectSerializer_1.default.serialize(sortBy, "'createdAt' | 'ttl'", ''));
        }
        if (sortOrder !== undefined) {
            urlSearchParams.append('sortOrder', ObjectSerializer_1.default.serialize(sortOrder, "'asc' | 'desc'", ''));
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
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'TokenListResponse', ''));
    }
    /**
     * You can retrieve details about a specific upload token if you have the unique identifier for the upload token. Add it in the path of the endpoint. Details include time-to-live (ttl), when the token was created, and when it will expire.
     * Show upload token
     * @param uploadToken The unique identifier for the token you want information about.
     */
    async getToken(uploadToken) {
        const queryParams = {};
        queryParams.headers = {};
        if (uploadToken === null || uploadToken === undefined) {
            throw new Error('Required parameter uploadToken was null or undefined when calling getToken.');
        }
        // Path Params
        const localVarPath = '/upload-tokens/{uploadToken}'
            .substring(1)
            .replace('{' + 'uploadToken' + '}', encodeURIComponent(String(uploadToken)));
        queryParams.method = 'GET';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'UploadToken', ''));
    }
    /**
     * Use this endpoint to generate an upload token. You can use this token to authenticate video uploads while keeping your API key safe. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
     * Generate an upload token
     * @param tokenCreationPayload
     */
    async createToken(tokenCreationPayload = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (tokenCreationPayload === null || tokenCreationPayload === undefined) {
            throw new Error('Required parameter tokenCreationPayload was null or undefined when calling createToken.');
        }
        // Path Params
        const localVarPath = '/upload-tokens'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(tokenCreationPayload, 'TokenCreationPayload', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'UploadToken', ''));
    }
}
exports.default = UploadTokensApi;
