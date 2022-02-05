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
 * What kind of browser the viewer is using for the live stream session.
 */
class LiveStreamSessionClient {
    static getAttributeTypeMap() {
        return LiveStreamSessionClient.attributeTypeMap;
    }
}
exports.default = LiveStreamSessionClient;
LiveStreamSessionClient.discriminator = undefined;
LiveStreamSessionClient.attributeTypeMap = [
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
