import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { BadRequest } from '../models/BadRequest';
import { LiveStream } from '../models/LiveStream';
import { LiveStreamCreationPayload } from '../models/LiveStreamCreationPayload';
import { LiveStreamListResponse } from '../models/LiveStreamListResponse';
import { LiveStreamUpdatePayload } from '../models/LiveStreamUpdatePayload';
import { NotFound } from '../models/NotFound';

/**
 * no description
 */
export class LiveStreamsApi {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Delete a live stream
     * @param liveStreamId The unique ID for the live stream that you want to remove.
     */
    public async delete(liveStreamId: string): Promise<void > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'liveStreamId' is not null or undefined
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling delete.');
        }

		// Path Params
    	const localVarPath = '/live-streams/{liveStreamId}'.substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));

        queryParams.method = 'DELETE';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "void", ""
            ) as void);
    }

    /**
     * Send the unique identifier for a live stream to delete it from the system.
     * Delete a thumbnail
     * @param liveStreamId The unique identifier for the live stream you want to delete. 
     */
    public async deleteThumbnail(liveStreamId: string): Promise<LiveStream > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'liveStreamId' is not null or undefined
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling deleteThumbnail.');
        }

		// Path Params
    	const localVarPath = '/live-streams/{liveStreamId}/thumbnail'.substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));

        queryParams.method = 'DELETE';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "LiveStream", ""
            ) as LiveStream);
    }

    /**
     * With no parameters added to the url, this will return all livestreams. Query by name or key to limit the list.
     * List all live streams
     * @param streamKey The unique stream key that allows you to stream videos.
     * @param name You can filter live streams by their name or a part of their name.
     * @param sortBy Allowed: createdAt, publishedAt, name. createdAt - the time a livestream was created using the specified streamKey. publishedAt - the time a livestream was published using the specified streamKey. name - the name of the livestream. If you choose one of the time based options, the time is presented in ISO-8601 format.
     * @param sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.
     * @param currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param pageSize Results per page. Allowed values 1-100, default is 25.
     */
    public async list(streamKey?: string, name?: string, sortBy?: string, sortOrder?: 'asc' | 'desc', currentPage?: number, pageSize?: number): Promise<LiveStreamListResponse > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/live-streams'.substring(1);

        // Query Params
        const urlSearchParams = new URLSearchParams();

        if (streamKey !== undefined) {
            urlSearchParams.append("streamKey", ObjectSerializer.serialize(streamKey, "string", ""));
        }
        if (name !== undefined) {
            urlSearchParams.append("name", ObjectSerializer.serialize(name, "string", ""));
        }
        if (sortBy !== undefined) {
            urlSearchParams.append("sortBy", ObjectSerializer.serialize(sortBy, "string", ""));
        }
        if (sortOrder !== undefined) {
            urlSearchParams.append("sortOrder", ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", ""));
        }
        if (currentPage !== undefined) {
            urlSearchParams.append("currentPage", ObjectSerializer.serialize(currentPage, "number", ""));
        }
        if (pageSize !== undefined) {
            urlSearchParams.append("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        queryParams.searchParams = urlSearchParams;

        queryParams.method = 'GET';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "LiveStreamListResponse", ""
            ) as LiveStreamListResponse);
    }

    /**
     * Supply a LivestreamId, and you'll get all the details for streaming into, and watching the livestream.
     * Show live stream
     * @param liveStreamId The unique ID for the live stream you want to watch.
     */
    public async get(liveStreamId: string): Promise<LiveStream > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'liveStreamId' is not null or undefined
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling get.');
        }

		// Path Params
    	const localVarPath = '/live-streams/{liveStreamId}'.substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));

        queryParams.method = 'GET';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "LiveStream", ""
            ) as LiveStream);
    }

    /**
     * Use this endpoint to update the player, or to turn recording on/off (saving a copy of the livestream). NOTE: If the livestream is actively streaming, changing the recording status will only affect the NEXT stream.    The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer.
     * Update a live stream
     * @param liveStreamId The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off.
     * @param liveStreamUpdatePayload 
     */
    public async update(liveStreamId: string, liveStreamUpdatePayload: LiveStreamUpdatePayload): Promise<LiveStream > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'liveStreamId' is not null or undefined
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling update.');
        }

		
        // verify required parameter 'liveStreamUpdatePayload' is not null or undefined
        if (liveStreamUpdatePayload === null || liveStreamUpdatePayload === undefined) {
            throw new Error('Required parameter liveStreamUpdatePayload was null or undefined when calling update.');
        }

		// Path Params
    	const localVarPath = '/live-streams/{liveStreamId}'.substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(liveStreamUpdatePayload, "LiveStreamUpdatePayload", ""),
            contentType
        );;

        queryParams.method = 'PATCH';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "LiveStream", ""
            ) as LiveStream);
    }

    /**
     * A live stream will give you the 'connection point' to RTMP your video stream to api.video. It will also give you the details for viewers to watch the same livestream.  The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer.  See our [Live Stream Tutorial](https://api.video/blog/tutorials/live-stream-tutorial) for a walkthrough of this API with OBS. Your RTMP endpoint for the livestream is rtmp://broadcast.api.video/s/{streamKey}
     * Create live stream
     * @param liveStreamCreationPayload 
     */
    public async create(liveStreamCreationPayload: LiveStreamCreationPayload): Promise<LiveStream > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'liveStreamCreationPayload' is not null or undefined
        if (liveStreamCreationPayload === null || liveStreamCreationPayload === undefined) {
            throw new Error('Required parameter liveStreamCreationPayload was null or undefined when calling create.');
        }

		// Path Params
    	const localVarPath = '/live-streams'.substring(1);

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(liveStreamCreationPayload, "LiveStreamCreationPayload", ""),
            contentType
        );;

        queryParams.method = 'POST';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "LiveStream", ""
            ) as LiveStream);
    }

    /**
     * Upload an image to use as a backdrop for your livestream.
     * Upload a thumbnail
     * @param liveStreamId The unique ID for the live stream you want to upload.
     * @param file The image to be added as a thumbnail.
     */
    public async uploadThumbnail(liveStreamId: string, file: File): Promise<LiveStream > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'liveStreamId' is not null or undefined
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling uploadThumbnail.');
        }

		
        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling uploadThumbnail.');
        }

		// Path Params
    	const localVarPath = '/live-streams/{liveStreamId}/thumbnail'.substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));

		// Form Params
		let localVarFormParams = new FormData();

        if (file !== undefined) {
             localVarFormParams.append('file', file, file.name);
        }
        queryParams.form = localVarFormParams;

        queryParams.method = 'POST';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "LiveStream", ""
            ) as LiveStream);
    }

}