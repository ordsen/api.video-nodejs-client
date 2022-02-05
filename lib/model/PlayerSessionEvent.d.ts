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
export default class PlayerSessionEvent {
    /**
     * Possible values are: ready, play, pause, resume, seek.backward, seek.forward, end
     */
    'type'?: string;
    /**
     * When an event occurred, presented in ISO-8601 format.
     */
    'emittedAt'?: Date;
    'at'?: number;
    'from'?: number;
    'to'?: number;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
