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
export default class Webhook {
    /**
     * Unique identifier of the webhook
     */
    'webhookId'?: string;
    /**
     * When an webhook was created, presented in ISO-8601 format.
     */
    'createdAt'?: Date;
    /**
     * A list of events that will trigger the webhook.
     */
    'events'?: Array<string>;
    /**
     * URL of the webhook
     */
    'url'?: string;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
