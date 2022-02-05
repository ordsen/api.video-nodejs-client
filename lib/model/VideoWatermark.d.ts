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
export default class VideoWatermark {
    /**
     * id of the watermark
     */
    'id'?: string;
    /**
     * Distance expressed in px or % between the top-border of the video and the watermark-image.
     */
    'top'?: string;
    /**
     * Distance expressed in px or % between the left-border of the video and the watermark-image.
     */
    'left'?: string;
    /**
     * Distance expressed in px or % between the bottom-border of the video and the watermark-image.
     */
    'bottom'?: string;
    /**
     * Distance expressed in px or % between the right-border of the video and the watermark-image.
     */
    'right'?: string;
    /**
     * Width of the watermark-image relative to the video if expressed in %. Otherwise a fixed width. NOTE: To keep intrinsic watermark-image width use initial
     */
    'width'?: string;
    /**
     * Width of the watermark-image relative to the video if expressed in %. Otherwise a fixed height. NOTE: To keep intrinsic watermark-image height use initial
     */
    'height'?: string;
    /**
     * Opacity expressed in % only to specify the degree of the watermark-image transparency with the video.
     */
    'opacity'?: string;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
