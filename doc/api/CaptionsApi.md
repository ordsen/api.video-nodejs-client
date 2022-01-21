# CaptionsApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](CaptionsApi.md#delete) | **DELETE** /videos/{videoId}/captions/{language} | Delete a caption
[**list**](CaptionsApi.md#list) | **GET** /videos/{videoId}/captions | List video captions
[**get**](CaptionsApi.md#get) | **GET** /videos/{videoId}/captions/{language} | Show a caption
[**update**](CaptionsApi.md#update) | **PATCH** /videos/{videoId}/captions/{language} | Update caption
[**upload**](CaptionsApi.md#upload) | **POST** /videos/{videoId}/captions/{language} | Upload a caption


<a name="delete"></a>
## **delete**
Delete a caption

Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklgc'; // The unique identifier for the video you want to delete a caption from.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

        // void
        const result = await client.captions.delete(videoId, language);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want to delete a caption from. | [default to undefined]
 **language** | **string**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. | [default to undefined]

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

<a name="list"></a>
## **list**
List video captions

Retrieve a list of available captions for the videoId you provide.

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want captions for.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation

        // Caption
        const result = await client.captions.get(videoId, language);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want to retrieve a list of captions for. | [default to undefined]
 **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 | [optional] [default to 1]
 **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. | [optional] [default to 25]

### Return type
[**CaptionsListResponse**](../model/CaptionsListResponse.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="get"></a>
## **get**
Show a caption

Display a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a response indicating the caption was not found. Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want captions for.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation

        // Caption
        const result = await client.captions.get(videoId, language);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want captions for. | [default to undefined]
 **language** | **string**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation | [default to undefined]

### Return type
[**Caption**](../model/Caption.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="update"></a>
## **update**
Update caption

To have the captions on automatically, use this PATCH to set default: true.

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: \"YOUR_API_TOKEN\" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want to have automatic captions for.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
        const captionsUpdatePayload = {
      _default: true,
    }; 

        // Caption
        const result = await client.captions.update(videoId, language, captionsUpdatePayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want to have automatic captions for. | [default to undefined]
 **language** | **string**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. | [default to undefined]
 **captionsUpdatePayload** | [**CaptionsUpdatePayload**](../model/CaptionsUpdatePayload.md)|  |

### Return type
[**Caption**](../model/Caption.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

<a name="upload"></a>
## **upload**
Upload a caption

Upload a VTT file to add captions to your video.  Read our [captioning tutorial](https://api.video/blog/tutorials/adding-captions) for more details.

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want to add a caption to.
        const language = 'en'; // A valid BCP 47 language representation.
        const file = 'BINARY_DATA_HERE'; // The video text track (VTT) you want to upload.

        // Caption
        const result = await client.captions.upload(videoId, language, file);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want to add a caption to. | [default to undefined]
 **language** | **string**| A valid BCP 47 language representation. | [default to undefined]
 **file** | **string**| The video text track (VTT) you want to upload. | [default to undefined]

### Return type
[**Caption**](../model/Caption.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

