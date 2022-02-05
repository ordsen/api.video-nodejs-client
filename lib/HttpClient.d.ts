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
import { AfterResponseHook, ExtendOptions, Got } from 'got';
import AccessToken from './model/AccessToken';
export declare type QueryOptions = Got | ExtendOptions;
export default class HttpClient {
    private apiKey?;
    private baseUri;
    private tokenType;
    private accessToken?;
    private headers;
    private baseRequest;
    private chunkSize;
    constructor(params: {
        apiKey?: string;
        baseUri: string;
        chunkSize: number;
        applicationName?: string;
    });
    getChunkSize(): number;
    getAccessToken(): Promise<AccessToken>;
    retrieveAccessToken(): Promise<AccessToken>;
    isStillAuthenticated: AfterResponseHook;
    call(path: string, queryOptions?: QueryOptions): import("got/dist/source").CancelableRequest<import("got/dist/source").Response<string>>;
}
