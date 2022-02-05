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
import VideoSourceLiveStream from './VideoSourceLiveStream';
/**
 * Source information about the video.
 */
export default class VideoSource {
    /**
     * The URL where the video is stored.
     */
    'uri'?: string;
    'type'?: string;
    'liveStream'?: VideoSourceLiveStream;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
