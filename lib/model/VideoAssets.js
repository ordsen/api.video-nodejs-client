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
/**
 * Collection of details about the video object that you can use to work with the video object.
 */
class VideoAssets {
    static getAttributeTypeMap() {
        return VideoAssets.attributeTypeMap;
    }
}
exports.default = VideoAssets;
VideoAssets.discriminator = undefined;
VideoAssets.attributeTypeMap = [
    {
        name: 'hls',
        baseName: 'hls',
        type: 'string',
        format: 'uri',
    },
    {
        name: 'iframe',
        baseName: 'iframe',
        type: 'string',
        format: '',
    },
    {
        name: 'player',
        baseName: 'player',
        type: 'string',
        format: 'uri',
    },
    {
        name: 'thumbnail',
        baseName: 'thumbnail',
        type: 'string',
        format: 'uri',
    },
    {
        name: 'mp4',
        baseName: 'mp4',
        type: 'string',
        format: 'uri',
    },
];
