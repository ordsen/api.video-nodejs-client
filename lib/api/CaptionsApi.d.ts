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
import Caption from '../model/Caption';
import CaptionsListResponse from '../model/CaptionsListResponse';
import CaptionsUpdatePayload from '../model/CaptionsUpdatePayload';
/**
 * no description
 */
export default class CaptionsApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
     * Delete a caption
     * @param videoId The unique identifier for the video you want to delete a caption from.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     */
    delete(videoId: string, language: string): Promise<void>;
    /**
     * Retrieve a list of available captions for the videoId you provide.
     * List video captions
     * @param {Object} searchParams
     * @param { string } searchParams.videoId The unique identifier for the video you want to retrieve a list of captions for.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    list({ videoId, currentPage, pageSize, }: {
        videoId: string;
        currentPage?: number;
        pageSize?: number;
    }): Promise<CaptionsListResponse>;
    /**
     * Display a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a response indicating the caption was not found. Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).
     * Show a caption
     * @param videoId The unique identifier for the video you want captions for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation
     */
    get(videoId: string, language: string): Promise<Caption>;
    /**
     * To have the captions on automatically, use this PATCH to set default: true.
     * Update caption
     * @param videoId The unique identifier for the video you want to have automatic captions for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     * @param captionsUpdatePayload
     */
    update(videoId: string, language: string, captionsUpdatePayload?: CaptionsUpdatePayload): Promise<Caption>;
    /**
     * Upload a VTT file to add captions to your video.  Read our [captioning tutorial](https://api.video/blog/tutorials/adding-captions) for more details.
     * Upload a caption
     * @param videoId The unique identifier for the video you want to add a caption to.
     * @param language A valid BCP 47 language representation.
     * @param file The video text track (VTT) you want to upload.
     */
    upload(videoId: string, language: string, file: string): Promise<Caption>;
}
