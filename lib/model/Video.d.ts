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
import AttributeType from './AttributeType';
import Metadata from './Metadata';
import VideoAssets from './VideoAssets';
import VideoSource from './VideoSource';
export default class Video {
    /**
     * The unique identifier of the video object.
     */
    'videoId': string;
    /**
     * When a video was created, presented in ISO-8601 format.
     */
    'createdAt'?: Date;
    /**
     * The title of the video content.
     */
    'title'?: string;
    /**
     * A description for the video content.
     */
    'description'?: string;
    /**
     * The date and time the API created the video. Date and time are provided using ISO-8601 UTC format.
     */
    'publishedAt'?: string;
    /**
     * The date and time the video was updated. Date and time are provided using ISO-8601 UTC format.
     */
    'updatedAt'?: Date;
    /**
     * One array of tags (each tag is a string) in order to categorize a video. Tags may include spaces.
     */
    'tags'?: Array<string>;
    /**
     * Metadata you can use to categorise and filter videos. Metadata is a list of dictionaries, where each dictionary represents a key value pair for categorising a video. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.
     */
    'metadata'?: Array<Metadata>;
    'source'?: VideoSource;
    'assets'?: VideoAssets;
    /**
     * The id of the player that will be applied on the video.
     */
    'playerId'?: string;
    /**
     * Defines if the content is publicly reachable or if a unique token is needed for each play session. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).
     */
    '_public'?: boolean;
    /**
     * Defines if video is panoramic.
     */
    'panoramic'?: boolean;
    /**
     * This lets you know whether mp4 is supported. If enabled, an mp4 URL will be provided in the response for the video.
     */
    'mp4Support'?: boolean;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
