
# LiveStream

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**liveStreamId** | **string** | The unique identifier for the live stream. Live stream IDs begin with \&quot;li.\&quot; |  [optional]
**name** | **string** | The name of your live stream. |  [optional]
**streamKey** | **string** | The unique, private stream key that you use to begin streaming. |  [optional]
**record** | **boolean** | Whether you are recording or not. |  [optional]
**_public** | **boolean** | BETA FEATURE Please limit all public &#x3D; false (\&quot;private\&quot;) livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. |  [optional]
**assets** | [**LiveStreamAssets**](LiveStreamAssets.md) |  |  [optional]
**playerId** | **string** | The unique identifier for the player. |  [optional]
**broadcasting** | **boolean** | Whether or not you are broadcasting the live video you recorded for others to see. True means you are broadcasting to viewers, false means you are not. |  [optional]
**createdAt** | **Date** | When the player was created, presented in ISO-8601 format. |  [optional]
**updatedAt** | **Date** | When the player was last updated, presented in ISO-8601 format. |  [optional]

