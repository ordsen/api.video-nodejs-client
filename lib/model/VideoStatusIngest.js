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
 * Details about the capturing, transferring, and storing of your video for use immediately or in the future.
 */
class VideoStatusIngest {
    static getAttributeTypeMap() {
        return VideoStatusIngest.attributeTypeMap;
    }
}
exports.default = VideoStatusIngest;
VideoStatusIngest.discriminator = undefined;
VideoStatusIngest.attributeTypeMap = [
    {
        name: 'status',
        baseName: 'status',
        type: 'VideoStatusIngestStatusEnum',
        format: '',
    },
    {
        name: 'filesize',
        baseName: 'filesize',
        type: 'number',
        format: '',
    },
    {
        name: 'receivedBytes',
        baseName: 'receivedBytes',
        type: 'Array<BytesRange>',
        format: '',
    },
];
