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
class VideoWatermark {
    static getAttributeTypeMap() {
        return VideoWatermark.attributeTypeMap;
    }
}
exports.default = VideoWatermark;
VideoWatermark.discriminator = undefined;
VideoWatermark.attributeTypeMap = [
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
        format: '',
    },
    {
        name: 'top',
        baseName: 'top',
        type: 'string',
        format: '',
    },
    {
        name: 'left',
        baseName: 'left',
        type: 'string',
        format: '',
    },
    {
        name: 'bottom',
        baseName: 'bottom',
        type: 'string',
        format: '',
    },
    {
        name: 'right',
        baseName: 'right',
        type: 'string',
        format: '',
    },
    {
        name: 'width',
        baseName: 'width',
        type: 'string',
        format: '',
    },
    {
        name: 'height',
        baseName: 'height',
        type: 'string',
        format: '',
    },
    {
        name: 'opacity',
        baseName: 'opacity',
        type: 'string',
        format: '',
    },
];
