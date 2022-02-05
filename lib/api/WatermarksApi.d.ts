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
import Watermark from '../model/Watermark';
import WatermarksListResponse from '../model/WatermarksListResponse';
/**
 * no description
 */
export default class WatermarksApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Delete a watermark. A watermark is a static image overlapping a video used as a \"stamp\" to limit leetching.
     * Delete a watermark
     * @param watermarkId The watermark ID for the watermark you want to delete.
     */
    delete(watermarkId: string): Promise<void>;
    /**
     * List all watermarks. A watermark is a static image overlapping a video used as a \"stamp\" to limit leetching.
     * List all watermarks
     * @param {Object} searchParams
     * @param { string } searchParams.sortBy Allowed: createdAt. You can search by the time watermark were created at.
     * @param { string } searchParams.sortOrder Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    list({ sortBy, sortOrder, currentPage, pageSize, }: {
        sortBy?: string;
        sortOrder?: string;
        currentPage?: number;
        pageSize?: number;
    }): Promise<WatermarksListResponse>;
    /**
     * Create a new watermark by uploading a .jpg or a .png image. A watermark is a static image overlapping a video used as a \"stamp\" to limit leetching.
     * Upload a watermark
     * @param file The .jpg or .png image to be added as a watermark.
     */
    upload(file: string): Promise<Watermark>;
}
