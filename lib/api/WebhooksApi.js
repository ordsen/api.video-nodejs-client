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
class WebhooksApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * This endpoint will delete the indicated webhook.
     * Delete a Webhook
     * @param webhookId The webhook you wish to delete.
     */
    async delete(webhookId) {
        const queryParams = {};
        queryParams.headers = {};
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/webhooks/{webhookId}'
            .substring(1)
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        queryParams.method = 'DELETE';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'void', ''));
    }
    /**
     * This call provides the same JSON information provided on Webjhook creation.
     * Show Webhook details
     * @param webhookId The unique webhook you wish to retreive details on.
     */
    async get(webhookId) {
        const queryParams = {};
        queryParams.headers = {};
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling get.');
        }
        // Path Params
        const localVarPath = '/webhooks/{webhookId}'
            .substring(1)
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        queryParams.method = 'GET';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Webhook', ''));
    }
    /**
     * Requests to this endpoint return a list of your webhooks (with all their details). You can filter what the webhook list that the API returns using the parameters described below.
     * List all webhooks
     * @param {Object} searchParams
     * @param { string } searchParams.events The webhook event that you wish to filter on.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    async list({ events, currentPage, pageSize, } = {}) {
        const queryParams = {};
        queryParams.headers = {};
        // Path Params
        const localVarPath = '/webhooks'.substring(1);
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (events !== undefined) {
            urlSearchParams.append('events', ObjectSerializer_1.default.serialize(events, 'string', ''));
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
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'WebhooksListResponse', ''));
    }
    /**
     * Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events:  * ```video.encoding.quality.completed```  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \\\"type\\\": \\\"video.encoding.quality.completed\\\", \\\"emittedAt\\\": \\\"2021-01-29T16:46:25.217+01:00\\\", \\\"videoId\\\": \\\"viXXXXXXXX\\\", \\\"encoding\\\": \\\"hls\\\", \\\"quality\\\": \\\"720p\\\"} ```. This request says that the 720p HLS encoding was completed. * ```live-stream.broadcast.started```  When a livestream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires. * ```live-stream.broadcast.ended```  This event fores when the livestream has finished broadcasting, and the broadcasting parameter flips from false to true. * ```video.source.recorded```  This event is similar to ```video.encoding.quality.completed```, but tells you if a livestream has been recorded as a VOD.
     * Create Webhook
     * @param webhooksCreationPayload
     */
    async create(webhooksCreationPayload) {
        const queryParams = {};
        queryParams.headers = {};
        if (webhooksCreationPayload === null ||
            webhooksCreationPayload === undefined) {
            throw new Error('Required parameter webhooksCreationPayload was null or undefined when calling create.');
        }
        // Path Params
        const localVarPath = '/webhooks'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(webhooksCreationPayload, 'WebhooksCreationPayload', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Webhook', ''));
    }
}
exports.default = WebhooksApi;
