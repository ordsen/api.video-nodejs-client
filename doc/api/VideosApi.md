# VideosApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](VideosApi.md#delete) | **DELETE** /videos/{videoId} | Delete a video
[**get**](VideosApi.md#get) | **GET** /videos/{videoId} | Show a video
[**getStatus**](VideosApi.md#getStatus) | **GET** /videos/{videoId}/status | Show video status
[**list**](VideosApi.md#list) | **GET** /videos | List all videos
[**update**](VideosApi.md#update) | **PATCH** /videos/{videoId} | Update a video
[**pickThumbnail**](VideosApi.md#pickThumbnail) | **PATCH** /videos/{videoId}/thumbnail | Pick a thumbnail
[**uploadWithUploadToken**](VideosApi.md#uploadWithUploadToken) | **POST** /upload | Upload with an upload token
[**create**](VideosApi.md#create) | **POST** /videos | Create a video
[**upload**](VideosApi.md#upload) | **POST** /videos/{videoId}/source | Upload a video
[**uploadThumbnail**](VideosApi.md#uploadThumbnail) | **POST** /videos/{videoId}/thumbnail | Upload a thumbnail


<a name="delete"></a>
## **delete**
Delete a video

If you do not need a video any longer, you can send a request to delete it. All you need is the videoId. Tutorials using [video deletion](https://api.video/blog/endpoints/video-delete).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The video ID for the video you want to delete.
        // void
        const result = await client.videos.delete(videoId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The video ID for the video you want to delete. | [default to undefined]

### Return type
[**void**](../model/.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**404** | Not Found |  -  |

<a name="get"></a>
## **get**
Show a video

This call provides the same JSON information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL. Tutorials using [video GET](https://api.video/blog/endpoints/video-get).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'videoId_example'; // The unique identifier for the video you want details about.

        // Video
        const result = await client.videos.get(videoId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want details about. | [default to undefined]

### Return type
[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="getStatus"></a>
## **getStatus**
Show video status

This API provides upload status &amp; encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities. Tutorials using [video status](https://api.video/blog/endpoints/video-status).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want the status for.

        // VideoStatus
        const result = await client.videos.getStatus(videoId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want the status for. | [default to undefined]

### Return type
[**VideoStatus**](../model/VideoStatus.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="list"></a>
## **list**
List all videos

Requests to this endpoint return a list of your videos (with all their details). With no parameters added to this query, the API returns all videos. You can filter what videos the API returns using the parameters described below.  We have [several tutorials](https://api.video/blog/endpoints/video-list) that demonstrate this endpoint.

### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const title = 'My Video.mp4'; // The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.
        const tags = '["captions", "dialogue"]'; // A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.
        const metadata = 'metadata[Author]=John Doe&metadata[Format]=Tutorial'; // Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.
        const description = 'New Zealand'; // If you described a video with a term or sentence, you can add it here to return videos containing this string.
        const liveStreamId = 'li400mYKSgQ6xs7taUeSaEKr'; // If you know the ID for a live stream, you can retrieve the stream by adding the ID for it here.
        const sortBy = 'publishedAt'; // Allowed: publishedAt, title. You can search by the time videos were published at, or by title.
        const sortOrder = 'asc'; // Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // VideosListResponse
        const result = await client.videos.list({ title, tags, metadata, description, liveStreamId, sortBy, sortOrder, currentPage, pageSize })
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **string**| The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles. | [optional] [default to undefined]
 **tags** | **Array&lt;string&gt;**| A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned. | [optional]
 **metadata** | **{ [key: string]: string; }**| Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair. | [optional]
 **description** | **string**| If you described a video with a term or sentence, you can add it here to return videos containing this string. | [optional] [default to undefined]
 **liveStreamId** | **string**| If you know the ID for a live stream, you can retrieve the stream by adding the ID for it here. | [optional] [default to undefined]
 **sortBy** | **string**| Allowed: publishedAt, title. You can search by the time videos were published at, or by title. | [optional] [default to undefined]
 **sortOrder** | **string**| Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A. | [optional] [default to undefined]
 **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 | [optional] [default to 1]
 **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. | [optional] [default to 25]

### Return type
[**VideosListResponse**](../model/VideosListResponse.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

<a name="update"></a>
## **update**
Update a video

Use this endpoint to update the parameters associated with your video. The video you are updating is determined by the video ID you provide in the path. For each parameter you want to update, include the update in the request body. NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it. Tutorials using [video update](https://api.video/blog/endpoints/video-update).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: \"YOUR_API_TOKEN\" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The video ID for the video you want to delete.
        const videoUpdatePayload = {
      playerId: \"pl4k0jvEUuaTdRAEjQ4Jfrgz\", // The unique ID for the player you want to associate with your video.
      title: \"title_example\", // The title you want to use for your video.
      description: \"A film about good books.\", // A brief description of the video.
      _public: true, // Whether the video is publicly available or not. False means it is set to private.
      panoramic: false, // Whether the video is a 360 degree or immersive video.
      mp4Support: true, // Whether the player supports the mp4 format.
      tags: [\"maths\", \"string theory\", \"video\"], // A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video.
      metadata: null, // A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video.
    }; 

        // Video
        const result = await client.videos.update(videoId, videoUpdatePayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The video ID for the video you want to delete. | [default to undefined]
 **videoUpdatePayload** | [**VideoUpdatePayload**](../model/VideoUpdatePayload.md)|  |

### Return type
[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

<a name="pickThumbnail"></a>
## **pickThumbnail**
Pick a thumbnail

Pick a thumbnail from the given time code. If you'd like to upload an image for your thumbnail, use the [Upload a Thumbnail](https://docs.api.video/reference#post_videos-videoid-thumbnail) endpoint. There may be a short delay for the thumbnail to update. Tutorials using [Thumbnail picking](https://api.video/blog/endpoints/video-pick-a-thumbnail).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
  try {
      const client = new ApiVideoClient({ apiKey: \"YOUR_API_TOKEN\" });

      const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
      const videoThumbnailPickPayload = {
      timecode: \"timecode_example\", 
      // Frame in video to be used as a placeholder before the video plays. 
      //Example: '\\\"00:01:00.000\\\" for 1 minute into the video.' Valid Patterns: \\\"hh:mm:ss.ms\\\" \\\"hh:mm:ss:frameNumber\\\" \\\"124\\\" (integer value is reported as seconds) If selection is out of range, \\\"00:00:00.00\\\" will be chosen.
  }; 

      // Video
      const result = await client.videos.pickThumbnail(videoId, videoThumbnailPickPayload);
      console.log(result);
  } catch (e) {
      console.error(e);
  }
 })();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail. | [default to undefined]
 **videoThumbnailPickPayload** | [**VideoThumbnailPickPayload**](../model/VideoThumbnailPickPayload.md)|  |

### Return type
[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="uploadWithUploadToken"></a>
## **uploadWithUploadToken**
Upload with an upload token



### Example
```js
//The upload will happen on the front end, and not on the backend code.  
//Our [JavaScript uploader(https://docs.api.video/docs/video-uploader) is a great place to look for uploading videos with the delegated token.
//We also have uploaders for a number of [mobile languages](https://docs.api.video/docs/flutter-uploader).

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **string**| The unique identifier for the token you want to use to upload a video. | [default to undefined]
 **file** | **string**| The path to the video you want to upload. | [default to undefined]
**progressListener?** | **(event: UploadProgressEvent) => void \| undefined** | Optional upload progress listener | [default to undefined]

### Upload chunks

Large files are broken into chunks for upload. You can control the size of the chunks using the `chunkSize` parameter when you instanciate the ApiVideoClient:

```js
    const client = new ApiVideoClient({
        apiKey: "YOUR_API_TOKEN",
        chunkSize: 50 * 1024 * 1024, // 50mb chunks
    });
```

### Progressive uploads

Progressive uploads make it possible to upload a video source "progressively," i.e., before knowing the total size of the video. This is done by sending chunks of the video source file sequentially.
The last chunk is sent by calling a different method, so api.video knows that it is time to reassemble the different chunks that were received.

```js
(async () => {
try {
        const client = new ApiVideoClient();    
        const token = 'to1tcmSFHeYY5KzyhOqVKMKb'; // The unique identifier for the token you want to use to upload a video.
    
        const uploadSession = client.createUploadWithUploadTokenProgressiveSession(token);

        await uploadSession.uploadPart('test/data/10m.mp4.part.a');
        await uploadSession.uploadPart('test/data/10m.mp4.part.b');
        const res = await uploadSession.uploadLastPart('test/data/10m.mp4.part.c');  // Video 

        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Return type
[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |

<a name="create"></a>
## **create**
Create a video

 ## We have tutorials on: * [Creating and uploading videos](https://api.video/blog/tutorials/video-upload-tutorial) * [Uploading large videos](https://api.video/blog/tutorials/video-upload-tutorial-large-videos)   * [Using tags with videos](https://api.video/blog/tutorials/video-tagging-best-practices) * [Private videos](https://api.video/blog/tutorials/tutorial-private-videos) * [Using Dynamic Metadata](https://api.video/blog/tutorials/dynamic-metadata)  * Full list of [tutorials](https://api.video/blog/endpoints/video-create) that demonstrate this endpoint. 

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
const client = new ApiVideoClient({ apiKey: \"YOUR_API_TOKEN\" });
const videoCreationPayload = {
  title: \"Maths video\", // The title of your new video.
  description: \"A video about string theory.\", // A brief description of your video.
  source: \"https://www.myvideo.url.com/video.mp4\", // If you add a video already on the web, this is where you enter the url for the video.
  _public: true, // Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.
  panoramic: false, // Indicates if your video is a 360/immersive video.
  mp4Support: true, // Enables mp4 version in addition to streamed version.
  playerId: \"pl45KFKdlddgk654dspkze\", // The unique identification number for your video player.
  tags: [\"maths\", \"string theory\", \"video\"], // A list of tags you want to use to describe your video.
  metadata: [{\"key\": \"Author\", \"value\": \"John Doe\"}], // A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. You can also just use the pairs as another way to tag and categorize your videos.
}; 

// Video
const result = await client.videos.create(videoCreationPayload);

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoCreationPayload** | [**VideoCreationPayload**](../model/VideoCreationPayload.md)| video to create |

### Return type
[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**202** | Accepted |  -  |
**400** | Bad Request |  -  |

<a name="upload"></a>
## **upload**
Upload a video

To upload a video to the videoId you created. Replace {videoId} with the id you'd like to use, {access_token} with your token, and /path/to/video.mp4 with the path to the video you'd like to upload. You can only upload your video to the videoId once. We offer 2 types of upload:  * Regular upload  * Progressive upload The latter allows you to split a video source into X chunks and send those chunks independently (concurrently or sequentially). The 2 main goals for our users are to   * allow the upload of video sources > 200 MiB (200 MiB = the max. allowed file size for regular upload)   * allow to send a video source \"progressively\", i.e., before before knowing the total size of the video.   Once all chunks have been sent, they are reaggregated to one source file. The video source is considered as \"completely sent\" when the \"last\" chunk is sent (i.e., the chunk that \"completes\" the upload). ```bash curl https://ws.api.video/videos/{videoId}/source \\   -H 'Authorization: Bearer {access_token}' \\   -F file=@/path/to/video.mp4    ``` Tutorials using [video upload](https://api.video/blog/endpoints/video-upload).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
      const client = new ApiVideoClient({ apiKey: \"YOUR_API_TOKEN\" });
      
      const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // Enter the videoId you want to use to upload your video.
      const file = 'BINARY_DATA_HERE'; // The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\\\\\"/videos\\\\\\\" endpoint and add the \\\\\\\"source\\\\\\\" parameter when you create a new video.
      
      // Video
      const result = await client.videos.upload(videoId, file);
      console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| Enter the videoId you want to use to upload your video. | [default to undefined]
 **file** | **string**| The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\&quot;/videos\\\&quot; endpoint and add the \\\&quot;source\\\&quot; parameter when you create a new video. | [default to undefined]
**progressListener?** | **(event: UploadProgressEvent) => void \| undefined** | Optional upload progress listener | [default to undefined]

### Upload chunks

Large files are broken into chunks for upload. You can control the size of the chunks using the `chunkSize` parameter when you instanciate the ApiVideoClient:

```js
    const client = new ApiVideoClient({
        apiKey: "YOUR_API_TOKEN",
        chunkSize: 50 * 1024 * 1024, // 50mb chunks
    });
```

### Progressive uploads

Progressive uploads make it possible to upload a video source "progressively," i.e., before knowing the total size of the video. This is done by sending chunks of the video source file sequentially.
The last chunk is sent by calling a different method, so api.video knows that it is time to reassemble the different chunks that were received.

```js
(async () => {
try {

        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
    
        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // Enter the videoId you want to use to upload your video.
    
        const uploadSession = client.createUploadProgressiveSession(videoId);

        await uploadSession.uploadPart('test/data/10m.mp4.part.a');
        await uploadSession.uploadPart('test/data/10m.mp4.part.b');
        const res = await uploadSession.uploadLastPart('test/data/10m.mp4.part.c');  // Video 

        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Return type
[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

<a name="uploadThumbnail"></a>
## **uploadThumbnail**
Upload a thumbnail

The thumbnail is the poster that appears in the player window before video playback begins. This endpoint allows you to upload an image for the thumbnail. To select a still frame from the video using a time stamp, use [Pick a Thumbnail](https://docs.api.video/reference#patch_videos-videoid-thumbnail) to pick a time in the video.  Note: There may be a short delay before the new thumbnail is delivered to our CDN. Tutorials using [Thumbnail upload](https://api.video/blog/endpoints/videos-upload-a-thumbnail).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: \"YOUR_API_TOKEN\" });

        const videoId = 'videoId_example'; // Unique identifier of the chosen video 
        const file = 'BINARY_DATA_HERE'; // The .jpg image to be added as a thumbnail.

        // Video
        const result = await client.videos.uploadThumbnail(videoId, file);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| Unique identifier of the chosen video  | [default to undefined]
 **file** | **string**| The &#x60;.jpg&#x60; image to be added as a thumbnail. | [default to undefined]

### Return type
[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

