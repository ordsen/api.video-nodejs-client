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
 * What kind of browser the viewer is using for the video session.
 */
class VideoSessionClient {
    static getAttributeTypeMap() {
        return VideoSessionClient.attributeTypeMap;
    }
}
exports.default = VideoSessionClient;
VideoSessionClient.discriminator = undefined;
VideoSessionClient.attributeTypeMap = [
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'version',
        baseName: 'version',
        type: 'string',
        format: '',
    },
    {
        name: 'type',
        baseName: 'type',
        type: 'string',
        format: '',
    },
];
