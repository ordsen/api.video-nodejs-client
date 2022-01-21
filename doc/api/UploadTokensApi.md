# UploadTokensApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteToken**](UploadTokensApi.md#deleteToken) | **DELETE** /upload-tokens/{uploadToken} | Delete an upload token
[**list**](UploadTokensApi.md#list) | **GET** /upload-tokens | List all active upload tokens.
[**getToken**](UploadTokensApi.md#getToken) | **GET** /upload-tokens/{uploadToken} | Show upload token
[**createToken**](UploadTokensApi.md#createToken) | **POST** /upload-tokens | Generate an upload token


<a name="deleteToken"></a>
## **deleteToken**
Delete an upload token

Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const uploadToken = 'to1tcmSFHeYY5KzyhOqVKMKb'; // The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.

        // void
        const result = await client.uploadTokens.deleteToken(uploadToken);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadToken** | **string**| The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication. | [default to undefined]

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
List all active upload tokens.

A delegated token is used to allow secure uploads without exposing your API key. Use this endpoint to retrieve a list of all currently active delegated tokens. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const uploadToken = 'to1tcmSFHeYY5KzyhOqVKMKb'; // The unique identifier for the token you want information about.

        // UploadToken
        const result = await client.uploadTokens.getToken(uploadToken);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **&#39;createdAt&#39; | &#39;ttl&#39;**| Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format. | [optional] [default to undefined] [enum: createdAt, ttl]
 **sortOrder** | **&#39;asc&#39; | &#39;desc&#39;**| Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A. | [optional] [default to undefined] [enum: asc, desc]
 **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 | [optional] [default to 1]
 **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. | [optional] [default to 25]

### Return type
[**TokenListResponse**](../model/TokenListResponse.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="getToken"></a>
## **getToken**
Show upload token

You can retrieve details about a specific upload token if you have the unique identifier for the upload token. Add it in the path of the endpoint. Details include time-to-live (ttl), when the token was created, and when it will expire.

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const uploadToken = 'to1tcmSFHeYY5KzyhOqVKMKb'; // The unique identifier for the token you want information about.

        // UploadToken
        const result = await client.uploadTokens.getToken(uploadToken);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadToken** | **string**| The unique identifier for the token you want information about. | [default to undefined]

### Return type
[**UploadToken**](../model/UploadToken.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="createToken"></a>
## **createToken**
Generate an upload token

Use this endpoint to generate an upload token. You can use this token to authenticate video uploads while keeping your API key safe. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).

### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: \"YOUR_API_TOKEN\" });

        const tokenCreationPayload = {
      ttl: 56, // Time in seconds that the token will be active. A value of 0 means that the token has no expiration date. The default is to have no expiration.
    }; 

        // UploadToken
        const result = await client.uploadTokens.createToken(tokenCreationPayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenCreationPayload** | [**TokenCreationPayload**](../model/TokenCreationPayload.md)|  |

### Return type
[**UploadToken**](../model/UploadToken.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

