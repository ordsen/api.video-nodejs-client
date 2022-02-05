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
import TokenCreationPayload from '../model/TokenCreationPayload';
import TokenListResponse from '../model/TokenListResponse';
import UploadToken from '../model/UploadToken';
/**
 * no description
 */
export default class UploadTokensApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.
     * Delete an upload token
     * @param uploadToken The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.
     */
    deleteToken(uploadToken: string): Promise<void>;
    /**
     * A delegated token is used to allow secure uploads without exposing your API key. Use this endpoint to retrieve a list of all currently active delegated tokens. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
     * List all active upload tokens.
     * @param {Object} searchParams
     * @param { &#39;createdAt&#39; | &#39;ttl&#39; } searchParams.sortBy Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format.
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    list({ sortBy, sortOrder, currentPage, pageSize, }?: {
        sortBy?: 'createdAt' | 'ttl';
        sortOrder?: 'asc' | 'desc';
        currentPage?: number;
        pageSize?: number;
    }): Promise<TokenListResponse>;
    /**
     * You can retrieve details about a specific upload token if you have the unique identifier for the upload token. Add it in the path of the endpoint. Details include time-to-live (ttl), when the token was created, and when it will expire.
     * Show upload token
     * @param uploadToken The unique identifier for the token you want information about.
     */
    getToken(uploadToken: string): Promise<UploadToken>;
    /**
     * Use this endpoint to generate an upload token. You can use this token to authenticate video uploads while keeping your API key safe. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
     * Generate an upload token
     * @param tokenCreationPayload
     */
    createToken(tokenCreationPayload?: TokenCreationPayload): Promise<UploadToken>;
}
