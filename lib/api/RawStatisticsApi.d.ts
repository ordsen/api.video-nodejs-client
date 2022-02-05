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
import RawStatisticsListLiveStreamAnalyticsResponse from '../model/RawStatisticsListLiveStreamAnalyticsResponse';
import RawStatisticsListPlayerSessionEventsResponse from '../model/RawStatisticsListPlayerSessionEventsResponse';
import RawStatisticsListSessionsResponse from '../model/RawStatisticsListSessionsResponse';
/**
 * no description
 */
export default class RawStatisticsApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * List live stream player sessions
     * @param {Object} searchParams
     * @param { string } searchParams.liveStreamId The unique identifier for the live stream you want to retrieve analytics for.
     * @param { string } searchParams.period Period must have one of the following formats:  - For a day : \&quot;2018-01-01\&quot;, - For a week: \&quot;2018-W01\&quot;,  - For a month: \&quot;2018-01\&quot; - For a year: \&quot;2018\&quot; For a range period:  -  Date range: \&quot;2018-01-01/2018-01-15\&quot;
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    listLiveStreamSessions({ liveStreamId, period, currentPage, pageSize, }: {
        liveStreamId: string;
        period?: string;
        currentPage?: number;
        pageSize?: number;
    }): Promise<RawStatisticsListLiveStreamAnalyticsResponse>;
    /**
     * Useful to track and measure video's engagement.
     * List player session events
     * @param {Object} searchParams
     * @param { string } searchParams.sessionId A unique identifier you can use to reference and track a session with.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    listSessionEvents({ sessionId, currentPage, pageSize, }: {
        sessionId: string;
        currentPage?: number;
        pageSize?: number;
    }): Promise<RawStatisticsListPlayerSessionEventsResponse>;
    /**
     * Retrieve all available user sessions for a specific video. Tutorials that use the [analytics endpoint](https://api.video/blog/endpoints/analytics).
     * List video player sessions
     * @param {Object} searchParams
     * @param { string } searchParams.videoId The unique identifier for the video you want to retrieve session information for.
     * @param { string } searchParams.period Period must have one of the following formats:  - For a day : 2018-01-01, - For a week: 2018-W01,  - For a month: 2018-01 - For a year: 2018 For a range period:  -  Date range: 2018-01-01/2018-01-15
     * @param { { [key: string]: string; } } searchParams.metadata Metadata and [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) filter. Send an array of key value pairs you want to filter sessios with.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    listVideoSessions({ videoId, period, metadata, currentPage, pageSize, }: {
        videoId: string;
        period?: string;
        metadata?: {
            [key: string]: string;
        };
        currentPage?: number;
        pageSize?: number;
    }): Promise<RawStatisticsListSessionsResponse>;
}
