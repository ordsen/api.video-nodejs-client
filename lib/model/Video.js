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
class Video {
    static getAttributeTypeMap() {
        return Video.attributeTypeMap;
    }
}
exports.default = Video;
Video.discriminator = undefined;
Video.attributeTypeMap = [
    {
        name: 'videoId',
        baseName: 'videoId',
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
        name: 'publishedAt',
        baseName: 'publishedAt',
        type: 'string',
        format: '',
    },
    {
        name: 'updatedAt',
        baseName: 'updatedAt',
        type: 'Date',
        format: 'date-time',
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
        name: 'source',
        baseName: 'source',
        type: 'VideoSource',
        format: '',
    },
    {
        name: 'assets',
        baseName: 'assets',
        type: 'VideoAssets',
        format: '',
    },
    {
        name: 'playerId',
        baseName: 'playerId',
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
];
