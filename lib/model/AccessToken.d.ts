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
export default class AccessToken {
    /**
     * The access token containing security credentials allowing you to acccess the API. The token lasts for one hour.
     */
    'accessToken'?: string;
    /**
     * The type of token you have.
     */
    'tokenType'?: string;
    /**
     * A token you can use to get the next access token when your current access token expires.
     */
    'refreshToken'?: string;
    /**
     * Lists the time in seconds when your access token expires. It lasts for one hour.
     */
    'expiresIn'?: number;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
