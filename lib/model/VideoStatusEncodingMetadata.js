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
class VideoStatusEncodingMetadata {
    static getAttributeTypeMap() {
        return VideoStatusEncodingMetadata.attributeTypeMap;
    }
}
exports.default = VideoStatusEncodingMetadata;
VideoStatusEncodingMetadata.discriminator = undefined;
VideoStatusEncodingMetadata.attributeTypeMap = [
    {
        name: 'width',
        baseName: 'width',
        type: 'number',
        format: '',
    },
    {
        name: 'height',
        baseName: 'height',
        type: 'number',
        format: '',
    },
    {
        name: 'bitrate',
        baseName: 'bitrate',
        type: 'number',
        format: '',
    },
    {
        name: 'duration',
        baseName: 'duration',
        type: 'number',
        format: '',
    },
    {
        name: 'framerate',
        baseName: 'framerate',
        type: 'number',
        format: '',
    },
    {
        name: 'samplerate',
        baseName: 'samplerate',
        type: 'number',
        format: '',
    },
    {
        name: 'videoCodec',
        baseName: 'videoCodec',
        type: 'string',
        format: '',
    },
    {
        name: 'audioCodec',
        baseName: 'audioCodec',
        type: 'string',
        format: '',
    },
    {
        name: 'aspectRatio',
        baseName: 'aspectRatio',
        type: 'string',
        format: '',
    },
];
