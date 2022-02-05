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
class LiveStreamUpdatePayload {
    static getAttributeTypeMap() {
        return LiveStreamUpdatePayload.attributeTypeMap;
    }
}
exports.default = LiveStreamUpdatePayload;
LiveStreamUpdatePayload.discriminator = undefined;
LiveStreamUpdatePayload.attributeTypeMap = [
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: '_public',
        baseName: 'public',
        type: 'boolean',
        format: '',
    },
    {
        name: 'record',
        baseName: 'record',
        type: 'boolean',
        format: '',
    },
    {
        name: 'playerId',
        baseName: 'playerId',
        type: 'string',
        format: '',
    },
];
