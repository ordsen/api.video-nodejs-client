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
 * What type of device the user is on when in the video session.
 */
class VideoSessionDevice {
    static getAttributeTypeMap() {
        return VideoSessionDevice.attributeTypeMap;
    }
}
exports.default = VideoSessionDevice;
VideoSessionDevice.discriminator = undefined;
VideoSessionDevice.attributeTypeMap = [
    {
        name: 'type',
        baseName: 'type',
        type: 'string',
        format: '',
    },
    {
        name: 'vendor',
        baseName: 'vendor',
        type: 'string',
        format: '',
    },
    {
        name: 'model',
        baseName: 'model',
        type: 'string',
        format: '',
    },
];