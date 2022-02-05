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
class LiveStream {
    static getAttributeTypeMap() {
        return LiveStream.attributeTypeMap;
    }
}
exports.default = LiveStream;
LiveStream.discriminator = undefined;
LiveStream.attributeTypeMap = [
    {
        name: 'liveStreamId',
        baseName: 'liveStreamId',
        type: 'string',
        format: '',
    },
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'streamKey',
        baseName: 'streamKey',
        type: 'string',
        format: '',
    },
    {
        name: 'record',
        baseName: 'record',
        type: 'boolean',
        format: '',
    },
    {
        name: '_public',
        baseName: 'public',
        type: 'boolean',
        format: '',
    },
    {
        name: 'assets',
        baseName: 'assets',
        type: 'LiveStreamAssets',
        format: '',
    },
    {
        name: 'playerId',
        baseName: 'playerId',
        type: 'string',
        format: '',
    },
    {
        name: 'broadcasting',
        baseName: 'broadcasting',
        type: 'boolean',
        format: '',
    },
    {
        name: 'createdAt',
        baseName: 'createdAt',
        type: 'Date',
        format: 'date-time',
    },
    {
        name: 'updatedAt',
        baseName: 'updatedAt',
        type: 'Date',
        format: 'date-time',
    },
];
