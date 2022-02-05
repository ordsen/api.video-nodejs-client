"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const url_1 = require("url");
const form_data_1 = __importDefault(require("form-data"));
const ObjectSerializer_1 = __importDefault(require("../ObjectSerializer"));
/**
 * no description
 */
class VideosApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * If you do not need a video any longer, you can send a request to delete it. All you need is the videoId. Tutorials using [video deletion](https://api.video/blog/endpoints/video-delete).
     * Delete a video
     * @param videoId The video ID for the video you want to delete.
     */
    async delete(videoId) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling delete.');
        }
        // Path Params
        const localVarPath = '/videos/{videoId}'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        queryParams.method = 'DELETE';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'void', ''));
    }
    /**
     * This call provides the same JSON information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL. Tutorials using [video GET](https://api.video/blog/endpoints/video-get).
     * Show a video
     * @param videoId The unique identifier for the video you want details about.
     */
    async get(videoId) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling get.');
        }
        // Path Params
        const localVarPath = '/videos/{videoId}'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        queryParams.method = 'GET';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
    }
    /**
     * This API provides upload status & encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities. Tutorials using [video status](https://api.video/blog/endpoints/video-status).
     * Show video status
     * @param videoId The unique identifier for the video you want the status for.
     */
    async getStatus(videoId) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling getStatus.');
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/status'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        queryParams.method = 'GET';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'VideoStatus', ''));
    }
    /**
     * Requests to this endpoint return a list of your videos (with all their details). With no parameters added to this query, the API returns all videos. You can filter what videos the API returns using the parameters described below.  We have [several tutorials](https://api.video/blog/endpoints/video-list) that demonstrate this endpoint.
     * List all videos
     * @param {Object} searchParams
     * @param { string } searchParams.title The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.
     * @param { Array&lt;string&gt; } searchParams.tags A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.
     * @param { { [key: string]: string; } } searchParams.metadata Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.
     * @param { string } searchParams.description If you described a video with a term or sentence, you can add it here to return videos containing this string.
     * @param { string } searchParams.liveStreamId If you know the ID for a live stream, you can retrieve the stream by adding the ID for it here.
     * @param { string } searchParams.sortBy Allowed: publishedAt, title. You can search by the time videos were published at, or by title.
     * @param { string } searchParams.sortOrder Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    async list({ title, tags, metadata, description, liveStreamId, sortBy, sortOrder, currentPage, pageSize, } = {}) {
        const queryParams = {};
        queryParams.headers = {};
        // Path Params
        const localVarPath = '/videos'.substring(1);
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (title !== undefined) {
            urlSearchParams.append('title', ObjectSerializer_1.default.serialize(title, 'string', ''));
        }
        if (tags !== undefined) {
            const tagsSerialized = ObjectSerializer_1.default.serialize(tags, 'Array<string>', '');
            tagsSerialized.forEach((v) => urlSearchParams.append('tags[]', v));
        }
        if (metadata !== undefined) {
            if (typeof metadata !== 'object') {
                throw new Error(`${metadata} is not an object`);
            }
            Object.keys(metadata).forEach((k) => urlSearchParams.append('metadata[' + k + ']', ObjectSerializer_1.default.serialize(metadata[k], 'string', '')));
        }
        if (description !== undefined) {
            urlSearchParams.append('description', ObjectSerializer_1.default.serialize(description, 'string', ''));
        }
        if (liveStreamId !== undefined) {
            urlSearchParams.append('liveStreamId', ObjectSerializer_1.default.serialize(liveStreamId, 'string', ''));
        }
        if (sortBy !== undefined) {
            urlSearchParams.append('sortBy', ObjectSerializer_1.default.serialize(sortBy, 'string', ''));
        }
        if (sortOrder !== undefined) {
            urlSearchParams.append('sortOrder', ObjectSerializer_1.default.serialize(sortOrder, 'string', ''));
        }
        if (currentPage !== undefined) {
            urlSearchParams.append('currentPage', ObjectSerializer_1.default.serialize(currentPage, 'number', ''));
        }
        if (pageSize !== undefined) {
            urlSearchParams.append('pageSize', ObjectSerializer_1.default.serialize(pageSize, 'number', ''));
        }
        queryParams.searchParams = urlSearchParams;
        queryParams.method = 'GET';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'VideosListResponse', ''));
    }
    /**
     * Use this endpoint to update the parameters associated with your video. The video you are updating is determined by the video ID you provide in the path. For each parameter you want to update, include the update in the request body. NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it. Tutorials using [video update](https://api.video/blog/endpoints/video-update).
     * Update a video
     * @param videoId The video ID for the video you want to delete.
     * @param videoUpdatePayload
     */
    async update(videoId, videoUpdatePayload = {}) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling update.');
        }
        if (videoUpdatePayload === null || videoUpdatePayload === undefined) {
            throw new Error('Required parameter videoUpdatePayload was null or undefined when calling update.');
        }
        // Path Params
        const localVarPath = '/videos/{videoId}'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(videoUpdatePayload, 'VideoUpdatePayload', ''), contentType);
        queryParams.method = 'PATCH';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
    }
    /**
     * Pick a thumbnail from the given time code. If you'd like to upload an image for your thumbnail, use the [Upload a Thumbnail](https://docs.api.video/reference#post_videos-videoid-thumbnail) endpoint. There may be a short delay for the thumbnail to update. Tutorials using [Thumbnail picking](https://api.video/blog/endpoints/video-pick-a-thumbnail).
     * Pick a thumbnail
     * @param videoId Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
     * @param videoThumbnailPickPayload
     */
    async pickThumbnail(videoId, videoThumbnailPickPayload) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling pickThumbnail.');
        }
        if (videoThumbnailPickPayload === null ||
            videoThumbnailPickPayload === undefined) {
            throw new Error('Required parameter videoThumbnailPickPayload was null or undefined when calling pickThumbnail.');
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/thumbnail'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(videoThumbnailPickPayload, 'VideoThumbnailPickPayload', ''), contentType);
        queryParams.method = 'PATCH';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
    }
    /**
     * Upload with an upload token
     * This will create a progressive upload session.
     * @param token The unique identifier for the token you want to use to upload a video.
     */
    createUploadWithUploadTokenProgressiveSession(token) {
        class UploadWithUploadTokenProgressiveSession {
            constructor(httpClient) {
                this.currentPart = 1;
                this.httpClient = httpClient;
            }
            uploadPart(file, progressListener) {
                return this.upload(file, false, progressListener);
            }
            uploadLastPart(file, progressListener) {
                return this.upload(file, true, progressListener);
            }
            upload(file, isLast, progressListener) {
                const queryParams = {};
                queryParams.headers = {};
                if (token === null || token === undefined) {
                    throw new Error('Required parameter token was null or undefined when calling uploadWithUploadToken.');
                }
                if (!fs_1.existsSync(file)) {
                    throw new Error(`${file} must be a readable source file`);
                }
                const length = fs_1.statSync(file).size;
                if (length <= 0) {
                    throw new Error(`${file} is empty`);
                }
                // Path Params
                const localVarPath = '/upload'.substring(1);
                // Query Params
                const urlSearchParams = new url_1.URLSearchParams();
                if (token !== undefined) {
                    urlSearchParams.append('token', ObjectSerializer_1.default.serialize(token, 'string', ''));
                }
                queryParams.searchParams = urlSearchParams;
                queryParams.method = 'POST';
                const formData = new form_data_1.default();
                const filename = path_1.default.basename(file);
                formData.append(filename, fs_1.createReadStream(file), filename);
                if (this.videoId) {
                    formData.append('videoId', this.videoId);
                }
                queryParams.body = formData;
                queryParams.headers['Content-Range'] = `part ${this.currentPart}/${isLast ? this.currentPart : '*'}`;
                const call = this.httpClient.call(localVarPath, queryParams);
                if (progressListener) {
                    call.on('uploadProgress', (progress) => {
                        progressListener({
                            chunksCount: 1,
                            currentChunk: 0,
                            currentChunkUploadedBytes: progress.transferred,
                            currentChunkTotalBytes: progress.total || 0,
                            uploadedBytes: progress.transferred,
                            totalBytes: progress.total || 0,
                        });
                    });
                }
                this.currentPart++;
                return call
                    .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''))
                    .then((res) => {
                    this.videoId = res.videoId;
                    return res;
                });
            }
        }
        return new UploadWithUploadTokenProgressiveSession(this.httpClient);
    }
    /**
     * When given a token, anyone can upload a file to the URI `https://ws.api.video/upload?token=<tokenId>`.  Example with cURL:  ```curl $ curl  --request POST --url 'https://ws.api.video/upload?token=toXXX'  --header 'content-type: multipart/form-data'  -F file=@video.mp4 ```  Or in an HTML form, with a little JavaScript to convert the form into JSON: ```html <!--form for user interaction--> <form name=\"videoUploadForm\" >   <label for=video>Video:</label>   <input type=file name=source/><br/>   <input value=\"Submit\" type=\"submit\"> </form> <div></div> <!--JS takes the form data      uses FormData to turn the response into JSON.     then uses POST to upload the video file.     Update the token parameter in the url to your upload token.     --> <script>    var form = document.forms.namedItem(\"videoUploadForm\");     form.addEventListener('submit', function(ev) {   ev.preventDefault();      var oOutput = document.querySelector(\"div\"),          oData = new FormData(form);      var oReq = new XMLHttpRequest();         oReq.open(\"POST\", \"https://ws.api.video/upload?token=toXXX\", true);      oReq.send(oData);   oReq.onload = function(oEvent) {        if (oReq.status ==201) {          oOutput.innerHTML = \"Your video is uploaded!<br/>\"  + oReq.response;        } else {          oOutput.innerHTML = \"Error \" + oReq.status + \" occurred when trying to upload your file.<br />\";        }      };    }, false);  </script> ```   ### Dealing with large files  You can upload large files on api.video with <a href='https://docs.api.video/reference/post_videos-videoid-source'>Progressive Upload</a>. Alternatively, if you want to use regular upload, we have created a <a href='https://api.video/blog/tutorials/uploading-large-files-with-javascript'>tutorial</a> to walk through the steps required.
     * Upload with an upload token
     * @param token The unique identifier for the token you want to use to upload a video.
     * @param file The path to the video you want to upload.
     */
    async uploadWithUploadToken(token, file, progressListener) {
        const queryParams = {};
        queryParams.headers = {};
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling uploadWithUploadToken.');
        }
        if (!fs_1.existsSync(file)) {
            throw new Error(`${file} must be a readable source file`);
        }
        const length = fs_1.statSync(file).size;
        if (length <= 0) {
            throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/upload'.substring(1);
        // Query Params
        const urlSearchParams = new url_1.URLSearchParams();
        if (token !== undefined) {
            urlSearchParams.append('token', ObjectSerializer_1.default.serialize(token, 'string', ''));
        }
        queryParams.searchParams = urlSearchParams;
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        const chunkSize = this.httpClient.getChunkSize();
        // Upload in a single request when file is small enough
        if (chunkSize > length) {
            const filename = path_1.default.basename(file);
            formData.append(filename, fs_1.createReadStream(file), filename);
            queryParams.body = formData;
            const call = this.httpClient.call(localVarPath, queryParams);
            if (progressListener) {
                call.on('uploadProgress', (progress) => {
                    progressListener({
                        chunksCount: 1,
                        currentChunk: 0,
                        currentChunkUploadedBytes: progress.transferred,
                        currentChunkTotalBytes: progress.total || 0,
                        uploadedBytes: progress.transferred,
                        totalBytes: progress.total || 0,
                    });
                });
            }
            return call.then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
        }
        let uploadChunkSize = chunkSize;
        let lastBody;
        let stream;
        let chunkNumber = 0;
        const partsCount = Math.ceil(length / chunkSize);
        let part = 1;
        for (let offset = 0; offset < length; offset += chunkSize, chunkNumber++) {
            // default the upload size to be as large as possible.
            uploadChunkSize = chunkSize;
            // BUT,if we are on the last chunk to be uploaded, the uploaded chunk must be
            // reduced to match the remaining bytes in the file
            if (offset + uploadChunkSize > length) {
                uploadChunkSize = length - offset;
            }
            console.log(`Uploading ${offset}-${offset + uploadChunkSize}...`);
            const filename = path_1.default.basename(file);
            const chunkFormData = new form_data_1.default();
            stream = fs_1.createReadStream(file, {
                start: offset,
                end: uploadChunkSize + offset - 1,
            });
            chunkFormData.append(filename, stream, filename);
            queryParams.body = chunkFormData;
            queryParams.headers['Content-Range'] = `part ${part}/${partsCount}`;
            part++;
            const call = this.httpClient.call(localVarPath, queryParams);
            if (progressListener) {
                call.on('uploadProgress', (progress) => {
                    progressListener({
                        chunksCount: Math.ceil(length / chunkSize),
                        currentChunk: chunkNumber,
                        currentChunkUploadedBytes: progress.transferred,
                        currentChunkTotalBytes: progress.total || 0,
                        uploadedBytes: Math.min(length, chunkNumber * chunkSize + progress.transferred),
                        totalBytes: length,
                    });
                });
            }
            lastBody = await call.then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
            stream.close();
        }
        return Promise.resolve(lastBody);
    }
    /**
     *  ## We have tutorials on: * [Creating and uploading videos](https://api.video/blog/tutorials/video-upload-tutorial) * [Uploading large videos](https://api.video/blog/tutorials/video-upload-tutorial-large-videos)   * [Using tags with videos](https://api.video/blog/tutorials/video-tagging-best-practices) * [Private videos](https://api.video/blog/tutorials/tutorial-private-videos) * [Using Dynamic Metadata](https://api.video/blog/tutorials/dynamic-metadata)  * Full list of [tutorials](https://api.video/blog/endpoints/video-create) that demonstrate this endpoint.
     * Create a video
     * @param videoCreationPayload video to create
     */
    async create(videoCreationPayload) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoCreationPayload === null || videoCreationPayload === undefined) {
            throw new Error('Required parameter videoCreationPayload was null or undefined when calling create.');
        }
        // Path Params
        const localVarPath = '/videos'.substring(1);
        // Body Params
        const contentType = ObjectSerializer_1.default.getPreferredMediaType([
            'application/json',
        ]);
        queryParams.headers['Content-Type'] = contentType;
        queryParams.body = ObjectSerializer_1.default.stringify(ObjectSerializer_1.default.serialize(videoCreationPayload, 'VideoCreationPayload', ''), contentType);
        queryParams.method = 'POST';
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
    }
    /**
     * Upload a video
     * This will create a progressive upload session.
     * @param videoId Enter the videoId you want to use to upload your video.
     */
    createUploadProgressiveSession(videoId) {
        class UploadProgressiveSession {
            constructor(httpClient) {
                this.currentPart = 1;
                this.httpClient = httpClient;
            }
            uploadPart(file, progressListener) {
                return this.upload(file, false, progressListener);
            }
            uploadLastPart(file, progressListener) {
                return this.upload(file, true, progressListener);
            }
            upload(file, isLast, progressListener) {
                const queryParams = {};
                queryParams.headers = {};
                if (videoId === null || videoId === undefined) {
                    throw new Error('Required parameter videoId was null or undefined when calling upload.');
                }
                if (!fs_1.existsSync(file)) {
                    throw new Error(`${file} must be a readable source file`);
                }
                const length = fs_1.statSync(file).size;
                if (length <= 0) {
                    throw new Error(`${file} is empty`);
                }
                // Path Params
                const localVarPath = '/videos/{videoId}/source'
                    .substring(1)
                    .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
                queryParams.method = 'POST';
                const formData = new form_data_1.default();
                const filename = path_1.default.basename(file);
                formData.append(filename, fs_1.createReadStream(file), filename);
                queryParams.body = formData;
                queryParams.headers['Content-Range'] = `part ${this.currentPart}/${isLast ? this.currentPart : '*'}`;
                const call = this.httpClient.call(localVarPath, queryParams);
                if (progressListener) {
                    call.on('uploadProgress', (progress) => {
                        progressListener({
                            chunksCount: 1,
                            currentChunk: 0,
                            currentChunkUploadedBytes: progress.transferred,
                            currentChunkTotalBytes: progress.total || 0,
                            uploadedBytes: progress.transferred,
                            totalBytes: progress.total || 0,
                        });
                    });
                }
                this.currentPart++;
                return call.then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
            }
        }
        return new UploadProgressiveSession(this.httpClient);
    }
    /**
     * To upload a video to the videoId you created. Replace {videoId} with the id you'd like to use, {access_token} with your token, and /path/to/video.mp4 with the path to the video you'd like to upload. You can only upload your video to the videoId once. We offer 2 types of upload:  * Regular upload  * Progressive upload The latter allows you to split a video source into X chunks and send those chunks independently (concurrently or sequentially). The 2 main goals for our users are to   * allow the upload of video sources > 200 MiB (200 MiB = the max. allowed file size for regular upload)   * allow to send a video source \"progressively\", i.e., before before knowing the total size of the video.   Once all chunks have been sent, they are reaggregated to one source file. The video source is considered as \"completely sent\" when the \"last\" chunk is sent (i.e., the chunk that \"completes\" the upload). ```bash curl https://ws.api.video/videos/{videoId}/source \\   -H 'Authorization: Bearer {access_token}' \\   -F file=@/path/to/video.mp4    ``` Tutorials using [video upload](https://api.video/blog/endpoints/video-upload).
     * Upload a video
     * @param videoId Enter the videoId you want to use to upload your video.
     * @param file The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\&quot;/videos\\\&quot; endpoint and add the \\\&quot;source\\\&quot; parameter when you create a new video.
     */
    async upload(videoId, file, progressListener) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling upload.');
        }
        if (!fs_1.existsSync(file)) {
            throw new Error(`${file} must be a readable source file`);
        }
        const length = fs_1.statSync(file).size;
        if (length <= 0) {
            throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/source'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        const chunkSize = this.httpClient.getChunkSize();
        // Upload in a single request when file is small enough
        if (chunkSize > length) {
            const filename = path_1.default.basename(file);
            formData.append(filename, fs_1.createReadStream(file), filename);
            queryParams.body = formData;
            const call = this.httpClient.call(localVarPath, queryParams);
            if (progressListener) {
                call.on('uploadProgress', (progress) => {
                    progressListener({
                        chunksCount: 1,
                        currentChunk: 0,
                        currentChunkUploadedBytes: progress.transferred,
                        currentChunkTotalBytes: progress.total || 0,
                        uploadedBytes: progress.transferred,
                        totalBytes: progress.total || 0,
                    });
                });
            }
            return call.then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
        }
        let uploadChunkSize = chunkSize;
        let lastBody;
        let stream;
        let chunkNumber = 0;
        const partsCount = Math.ceil(length / chunkSize);
        let part = 1;
        for (let offset = 0; offset < length; offset += chunkSize, chunkNumber++) {
            // default the upload size to be as large as possible.
            uploadChunkSize = chunkSize;
            // BUT,if we are on the last chunk to be uploaded, the uploaded chunk must be
            // reduced to match the remaining bytes in the file
            if (offset + uploadChunkSize > length) {
                uploadChunkSize = length - offset;
            }
            console.log(`Uploading ${offset}-${offset + uploadChunkSize}...`);
            const filename = path_1.default.basename(file);
            const chunkFormData = new form_data_1.default();
            stream = fs_1.createReadStream(file, {
                start: offset,
                end: uploadChunkSize + offset - 1,
            });
            chunkFormData.append(filename, stream, filename);
            queryParams.body = chunkFormData;
            queryParams.headers['Content-Range'] = `part ${part}/${partsCount}`;
            part++;
            const call = this.httpClient.call(localVarPath, queryParams);
            if (progressListener) {
                call.on('uploadProgress', (progress) => {
                    progressListener({
                        chunksCount: Math.ceil(length / chunkSize),
                        currentChunk: chunkNumber,
                        currentChunkUploadedBytes: progress.transferred,
                        currentChunkTotalBytes: progress.total || 0,
                        uploadedBytes: Math.min(length, chunkNumber * chunkSize + progress.transferred),
                        totalBytes: length,
                    });
                });
            }
            lastBody = await call.then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
            stream.close();
        }
        return Promise.resolve(lastBody);
    }
    /**
     * The thumbnail is the poster that appears in the player window before video playback begins. This endpoint allows you to upload an image for the thumbnail. To select a still frame from the video using a time stamp, use [Pick a Thumbnail](https://docs.api.video/reference#patch_videos-videoid-thumbnail) to pick a time in the video.  Note: There may be a short delay before the new thumbnail is delivered to our CDN. Tutorials using [Thumbnail upload](https://api.video/blog/endpoints/videos-upload-a-thumbnail).
     * Upload a thumbnail
     * @param videoId Unique identifier of the chosen video
     * @param file The .jpg image to be added as a thumbnail.
     */
    async uploadThumbnail(videoId, file) {
        const queryParams = {};
        queryParams.headers = {};
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling uploadThumbnail.');
        }
        if (!fs_1.existsSync(file)) {
            throw new Error(`${file} must be a readable source file`);
        }
        const length = fs_1.statSync(file).size;
        if (length <= 0) {
            throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/thumbnail'
            .substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        queryParams.method = 'POST';
        const formData = new form_data_1.default();
        const filename = path_1.default.basename(file);
        formData.append(filename, Buffer.isBuffer(file) ? file : fs_1.createReadStream(file), filename);
        queryParams.body = formData;
        return this.httpClient
            .call(localVarPath, queryParams)
            .then((response) => ObjectSerializer_1.default.deserialize(ObjectSerializer_1.default.parse(response.body, response.headers['content-type']), 'Video', ''));
    }
}
exports.default = VideosApi;
