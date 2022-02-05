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
class LiveStreamsApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Delete a live stream
     * @param liveStreamId The unique ID for the live stream that you want to remove.
     */
    async delete(liveStreamId) {
        const queryParams = {};
        queryParams.headers = {};
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/live-streams/{liveStreamId}'
            .substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));
        queryParams.method = 'DELETE';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'void', ''));
    }
    /**
     * Send the unique identifier for a live stream to delete it from the system.
     * Delete a thumbnail
     * @param liveStreamId The unique identifier for the live stream you want to delete.
     */
    async deleteThumbnail(liveStreamId) {
        const queryParams = {};
        queryParams.headers = {};
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling deleteThumbnail.');
        }
        // Path Params
        const localVarPath = '/live-streams/{liveStreamId}/thumbnail'
            .substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));
        queryParams.method = 'DELETE';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'LiveStream', ''));
    }
    /**
     * With no parameters added to the url, this will return all livestreams. Query by name or key to limit the list.
     * List all live streams
     * @param {Object} searchParams
     * @param { string } searchParams.streamKey The unique stream key that allows you to stream videos.
     * @param { string } searchParams.name You can filter live streams by their name or a part of their name.
     * @param { string } searchParams.sortBy Allowed: createdAt, publishedAt, name. createdAt - the time a livestream was created using the specified streamKey. publishedAt - the time a livestream was published using the specified streamKey. name - the name of the livestream. If you choose one of the time based options, the time is presented in ISO-8601 format.
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    async list({ streamKey, name, sortBy, sortOrder, currentPage, pageSize, } = {}) {
        const queryParams = {};
        queryParams.headers = {};
        // Path Params
        const localVarPath = '/live-streams'.substring(1);
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (streamKey !== undefined) {
            urlSearchParams.append('streamKey', ObjectSerializer_1.default.serialize(streamKey, 'string', ''));
        }
        if (name !== undefined) {
            urlSearchParams.append('name', ObjectSerializer_1.default.serialize(name, 'string', ''));
        }
        if (sortBy !== undefined) {
            urlSearchParams.append('sortBy', ObjectSerializer_1.default.serialize(sortBy, 'string', ''));
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
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'LiveStreamListResponse', ''));
    }
    /**
     * Supply a LivestreamId, and you'll get all the details for streaming into, and watching the livestream. Tutorials that use the [show livestream endpoint](https://api.video/blog/endpoints/live-stream-status).
     * Show live stream
     * @param liveStreamId The unique ID for the live stream you want to watch.
     */
    async get(liveStreamId) {
        const queryParams = {};
        queryParams.headers = {};
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling get.');
        }
        // Path Params
        const localVarPath = '/live-streams/{liveStreamId}'
            .substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));
        queryParams.method = 'GET';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'LiveStream', ''));
    }
    /**
     * Use this endpoint to update the player, or to turn recording on/off (saving a copy of the livestream). NOTE: If the livestream is actively streaming, changing the recording status will only affect the NEXT stream.    The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer.
     * Update a live stream
     * @param liveStreamId The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off.
     * @param liveStreamUpdatePayload
     */
    async update(liveStreamId, liveStreamUpdatePayload = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling update.');
        }
        if (liveStreamUpdatePayload === null ||
            liveStreamUpdatePayload === undefined) {
            throw new Error('Required parameter liveStreamUpdatePayload was null or undefined when calling update.');
        }
        // Path Params
        const localVarPath = '/live-streams/{liveStreamId}'
            .substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(liveStreamUpdatePayload, 'LiveStreamUpdatePayload', ''), contentType);
        queryParams.method = 'PATCH';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'LiveStream', ''));
    }
    /**
     * A live stream will give you the 'connection point' to RTMP your video stream to api.video. It will also give you the details for viewers to watch the same livestream.  The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer. See our [Live Stream Tutorial](https://api.video/blog/tutorials/live-stream-tutorial) for a walkthrough of this API with OBS. Your RTMP endpoint for the livestream is rtmp://broadcast.api.video/s/{streamKey} Tutorials that [create live streams](https://api.video/blog/endpoints/live-create).
     * Create live stream
     * @param liveStreamCreationPayload
     */
    async create(liveStreamCreationPayload) {
        const queryParams = {};
        queryParams.headers = {};
        if (liveStreamCreationPayload === null ||
            liveStreamCreationPayload === undefined) {
            throw new Error('Required parameter liveStreamCreationPayload was null or undefined when calling create.');
        }
        // Path Params
        const localVarPath = '/live-streams'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(liveStreamCreationPayload, 'LiveStreamCreationPayload', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'LiveStream', ''));
    }
    /**
     * Upload an image to use as a backdrop for your livestream. Tutorials that [update live stream thumbnails](https://api.video/blog/endpoints/live-upload-a-thumbnail).
     * Upload a thumbnail
     * @param liveStreamId The unique ID for the live stream you want to upload.
     * @param file The .jpg image to be added as a thumbnail.
     */
    async uploadThumbnail(liveStreamId, file) {
        const queryParams = {};
        queryParams.headers = {};
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling uploadThumbnail.');
        }
        if (!fs_1.existsSync(file)) {
            throw new Error(`${file} must be a readable source file`);
        }
        const length = fs_1.statSync(file).size;
        if (length <= 0) {
            throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/live-streams/{liveStreamId}/thumbnail'
            .substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        const filename = path_1.default.basename(file);
        formData.append(filename, Buffer.isBuffer(file) ? file : fs_1.createReadStream(file), filename);
        queryParams.body = formData;
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'LiveStream', ''));
    }
}
exports.default = LiveStreamsApi;
