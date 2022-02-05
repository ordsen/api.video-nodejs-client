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
import Chapter from '../model/Chapter';
import ChaptersListResponse from '../model/ChaptersListResponse';
/**
 * no description
 */
export default class ChaptersApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Delete a chapter
     * @param videoId The unique identifier for the video you want to delete a chapter from.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     */
    delete(videoId: string, language: string): Promise<void>;
    /**
     * Retrieve a list of all chapters for a specified video.
     * List video chapters
     * @param {Object} searchParams
     * @param { string } searchParams.videoId The unique identifier for the video you want to retrieve a list of chapters for.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    list({ videoId, currentPage, pageSize, }: {
        videoId: string;
        currentPage?: number;
        pageSize?: number;
    }): Promise<ChaptersListResponse>;
    /**
     * Chapters help your viewers find the sections of the video they are most interested in viewing. Tutorials that use the [chapters endpoint](https://api.video/blog/endpoints/chapters).
     * Show a chapter
     * @param videoId The unique identifier for the video you want to show a chapter for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     */
    get(videoId: string, language: string): Promise<Chapter>;
    /**
     * Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos) for more details.
     * Upload a chapter
     * @param videoId The unique identifier for the video you want to upload a chapter for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     * @param file The VTT file describing the chapters you want to upload.
     */
    upload(videoId: string, language: string, file: string): Promise<Chapter>;
}
