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
import CaptionsApi from './api/CaptionsApi';
import ChaptersApi from './api/ChaptersApi';
import LiveStreamsApi from './api/LiveStreamsApi';
import PlayerThemesApi from './api/PlayerThemesApi';
import RawStatisticsApi from './api/RawStatisticsApi';
import UploadTokensApi from './api/UploadTokensApi';
import VideosApi from './api/VideosApi';
import WatermarksApi from './api/WatermarksApi';
import WebhooksApi from './api/WebhooksApi';
declare class ApiVideoClient {
    private httpClient;
    private _captions;
    private _chapters;
    private _liveStreams;
    private _playerThemes;
    private _rawStatistics;
    private _uploadTokens;
    private _videos;
    private _watermarks;
    private _webhooks;
    constructor(params: {
        apiKey?: string;
        baseUri?: string;
        chunkSize?: number;
        applicationName?: string;
    });
    getAccessToken(): Promise<import("./model/AccessToken").default>;
    /**
     * Get an CaptionsApi instance
     * @return CaptionsApi
     */
    get captions(): CaptionsApi;
    /**
     * Get an ChaptersApi instance
     * @return ChaptersApi
     */
    get chapters(): ChaptersApi;
    /**
     * Get an LiveStreamsApi instance
     * @return LiveStreamsApi
     */
    get liveStreams(): LiveStreamsApi;
    /**
     * Get an PlayerThemesApi instance
     * @return PlayerThemesApi
     */
    get playerThemes(): PlayerThemesApi;
    /**
     * Get an RawStatisticsApi instance
     * @return RawStatisticsApi
     */
    get rawStatistics(): RawStatisticsApi;
    /**
     * Get an UploadTokensApi instance
     * @return UploadTokensApi
     */
    get uploadTokens(): UploadTokensApi;
    /**
     * Get an VideosApi instance
     * @return VideosApi
     */
    get videos(): VideosApi;
    /**
     * Get an WatermarksApi instance
     * @return WatermarksApi
     */
    get watermarks(): WatermarksApi;
    /**
     * Get an WebhooksApi instance
     * @return WebhooksApi
     */
    get webhooks(): WebhooksApi;
}
export = ApiVideoClient;
