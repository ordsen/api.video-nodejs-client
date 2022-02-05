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
export default class UploadToken {
    /**
     * The unique identifier for the token you will use to authenticate an upload.
     */
    'token'?: string;
    /**
     * Time-to-live - how long the upload token is valid for.
     */
    'ttl'?: number;
    /**
     * When the token was created, displayed in ISO-8601 format.
     */
    'createdAt'?: Date;
    /**
     * When the token expires, displayed in ISO-8601 format.
     */
    'expiresAt'?: Date;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
