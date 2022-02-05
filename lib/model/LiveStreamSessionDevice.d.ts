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
/**
 * What type of device the user is on when in the live stream session.
 */
export default class LiveStreamSessionDevice {
    /**
     * What the type is like desktop, laptop, mobile.
     */
    'type'?: string;
    /**
     * If known, what the brand of the device is, like Apple, Dell, etc.
     */
    'vendor'?: string;
    /**
     * The specific model of the device, if known.
     */
    'model'?: string;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
