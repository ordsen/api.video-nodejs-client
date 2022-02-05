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
class VideoCreationPayload {
    static getAttributeTypeMap() {
        return VideoCreationPayload.attributeTypeMap;
    }
}
exports.default = VideoCreationPayload;
VideoCreationPayload.discriminator = undefined;
VideoCreationPayload.attributeTypeMap = [
    {
        name: 'title',
        baseName: 'title',
        type: 'string',
        format: '',
    },
    {
        name: 'description',
        baseName: 'description',
        type: 'string',
        format: '',
    },
    {
        name: 'source',
        baseName: 'source',
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
        name: 'panoramic',
        baseName: 'panoramic',
        type: 'boolean',
        format: '',
    },
    {
        name: 'mp4Support',
        baseName: 'mp4Support',
        type: 'boolean',
        format: '',
    },
    {
        name: 'playerId',
        baseName: 'playerId',
        type: 'string',
        format: '',
    },
    {
        name: 'tags',
        baseName: 'tags',
        type: 'Array<string>',
        format: '',
    },
    {
        name: 'metadata',
        baseName: 'metadata',
        type: 'Array<Metadata>',
        format: '',
    },
    {
        name: 'clip',
        baseName: 'clip',
        type: 'VideoClip',
        format: '',
    },
    {
        name: 'watermark',
        baseName: 'watermark',
        type: 'VideoWatermark',
        format: '',
    },
];
