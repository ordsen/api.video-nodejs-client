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
import HttpClient from '../HttpClient';
import Webhook from '../model/Webhook';
import WebhooksCreationPayload from '../model/WebhooksCreationPayload';
import WebhooksListResponse from '../model/WebhooksListResponse';
/**
 * no description
 */
export default class WebhooksApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * This endpoint will delete the indicated webhook.
     * Delete a Webhook
     * @param webhookId The webhook you wish to delete.
     */
    delete(webhookId: string): Promise<void>;
    /**
     * This call provides the same JSON information provided on Webjhook creation.
     * Show Webhook details
     * @param webhookId The unique webhook you wish to retreive details on.
     */
    get(webhookId: string): Promise<Webhook>;
    /**
     * Requests to this endpoint return a list of your webhooks (with all their details). You can filter what the webhook list that the API returns using the parameters described below.
     * List all webhooks
     * @param {Object} searchParams
     * @param { string } searchParams.events The webhook event that you wish to filter on.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    list({ events, currentPage, pageSize, }?: {
        events?: string;
        currentPage?: number;
        pageSize?: number;
    }): Promise<WebhooksListResponse>;
    /**
     * Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events:  * ```video.encoding.quality.completed```  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \\\"type\\\": \\\"video.encoding.quality.completed\\\", \\\"emittedAt\\\": \\\"2021-01-29T16:46:25.217+01:00\\\", \\\"videoId\\\": \\\"viXXXXXXXX\\\", \\\"encoding\\\": \\\"hls\\\", \\\"quality\\\": \\\"720p\\\"} ```. This request says that the 720p HLS encoding was completed. * ```live-stream.broadcast.started```  When a livestream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires. * ```live-stream.broadcast.ended```  This event fores when the livestream has finished broadcasting, and the broadcasting parameter flips from false to true. * ```video.source.recorded```  This event is similar to ```video.encoding.quality.completed```, but tells you if a livestream has been recorded as a VOD.
     * Create Webhook
     * @param webhooksCreationPayload
     */
    create(webhooksCreationPayload: WebhooksCreationPayload): Promise<Webhook>;
}
