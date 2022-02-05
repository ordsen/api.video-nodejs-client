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
import LiveStream from '../model/LiveStream';
import LiveStreamCreationPayload from '../model/LiveStreamCreationPayload';
import LiveStreamListResponse from '../model/LiveStreamListResponse';
import LiveStreamUpdatePayload from '../model/LiveStreamUpdatePayload';
/**
 * no description
 */
export default class LiveStreamsApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Delete a live stream
     * @param liveStreamId The unique ID for the live stream that you want to remove.
     */
    delete(liveStreamId: string): Promise<void>;
    /**
     * Send the unique identifier for a live stream to delete it from the system.
     * Delete a thumbnail
     * @param liveStreamId The unique identifier for the live stream you want to delete.
     */
    deleteThumbnail(liveStreamId: string): Promise<LiveStream>;
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
    list({ streamKey, name, sortBy, sortOrder, currentPage, pageSize, }?: {
        streamKey?: string;
        name?: string;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
        currentPage?: number;
        pageSize?: number;
    }): Promise<LiveStreamListResponse>;
    /**
     * Supply a LivestreamId, and you'll get all the details for streaming into, and watching the livestream. Tutorials that use the [show livestream endpoint](https://api.video/blog/endpoints/live-stream-status).
     * Show live stream
     * @param liveStreamId The unique ID for the live stream you want to watch.
     */
    get(liveStreamId: string): Promise<LiveStream>;
    /**
     * Use this endpoint to update the player, or to turn recording on/off (saving a copy of the livestream). NOTE: If the livestream is actively streaming, changing the recording status will only affect the NEXT stream.    The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer.
     * Update a live stream
     * @param liveStreamId The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off.
     * @param liveStreamUpdatePayload
     */
    update(liveStreamId: string, liveStreamUpdatePayload?: LiveStreamUpdatePayload): Promise<LiveStream>;
    /**
     * A live stream will give you the 'connection point' to RTMP your video stream to api.video. It will also give you the details for viewers to watch the same livestream.  The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer. See our [Live Stream Tutorial](https://api.video/blog/tutorials/live-stream-tutorial) for a walkthrough of this API with OBS. Your RTMP endpoint for the livestream is rtmp://broadcast.api.video/s/{streamKey} Tutorials that [create live streams](https://api.video/blog/endpoints/live-create).
     * Create live stream
     * @param liveStreamCreationPayload
     */
    create(liveStreamCreationPayload: LiveStreamCreationPayload): Promise<LiveStream>;
    /**
     * Upload an image to use as a backdrop for your livestream. Tutorials that [update live stream thumbnails](https://api.video/blog/endpoints/live-upload-a-thumbnail).
     * Upload a thumbnail
     * @param liveStreamId The unique ID for the live stream you want to upload.
     * @param file The .jpg image to be added as a thumbnail.
     */
    uploadThumbnail(liveStreamId: string, file: string): Promise<LiveStream>;
}
