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
class PlayerSessionEvent {
    static getAttributeTypeMap() {
        return PlayerSessionEvent.attributeTypeMap;
    }
}
exports.default = PlayerSessionEvent;
PlayerSessionEvent.discriminator = undefined;
PlayerSessionEvent.attributeTypeMap = [
    {
        name: 'type',
        baseName: 'type',
        type: 'string',
        format: '',
    },
    {
        name: 'emittedAt',
        baseName: 'emittedAt',
        type: 'Date',
        format: 'date-time',
    },
    {
        name: 'at',
        baseName: 'at',
        type: 'number',
        format: '',
    },
    {
        name: 'from',
        baseName: 'from',
        type: 'number',
        format: '',
    },
    {
        name: 'to',
        baseName: 'to',
        type: 'number',
        format: '',
    },
];
