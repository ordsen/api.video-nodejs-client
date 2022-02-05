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
class VideoSession {
    static getAttributeTypeMap() {
        return VideoSession.attributeTypeMap;
    }
}
exports.default = VideoSession;
VideoSession.discriminator = undefined;
VideoSession.attributeTypeMap = [
    {
        name: 'session',
        baseName: 'session',
        type: 'VideoSessionSession',
        format: '',
    },
    {
        name: 'location',
        baseName: 'location',
        type: 'VideoSessionLocation',
        format: '',
    },
    {
        name: 'referrer',
        baseName: 'referrer',
        type: 'VideoSessionReferrer',
        format: '',
    },
    {
        name: 'device',
        baseName: 'device',
        type: 'VideoSessionDevice',
        format: '',
    },
    {
        name: 'os',
        baseName: 'os',
        type: 'VideoSessionOs',
        format: '',
    },
    {
        name: 'client',
        baseName: 'client',
        type: 'VideoSessionClient',
        format: '',
    },
];
