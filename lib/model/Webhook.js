"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class Webhook {
    static getAttributeTypeMap() {
        return Webhook.attributeTypeMap;
    }
}
exports.default = Webhook;
Webhook.discriminator = undefined;
Webhook.attributeTypeMap = [
    {
        name: 'webhookId',
        baseName: 'webhookId',
        type: 'string',
        format: '',
    },
    {
        name: 'createdAt',
        baseName: 'createdAt',
        type: 'Date',
        format: 'date-time',
    },
    {
        name: 'events',
        baseName: 'events',
        type: 'Array<string>',
        format: '',
    },
    {
        name: 'url',
        baseName: 'url',
        type: 'string',
        format: '',
    },
];
