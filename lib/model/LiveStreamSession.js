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
class LiveStreamSession {
    static getAttributeTypeMap() {
        return LiveStreamSession.attributeTypeMap;
    }
}
exports.default = LiveStreamSession;
LiveStreamSession.discriminator = undefined;
LiveStreamSession.attributeTypeMap = [
    {
        name: 'session',
        baseName: 'session',
        type: 'LiveStreamSessionSession',
        format: '',
    },
    {
        name: 'location',
        baseName: 'location',
        type: 'LiveStreamSessionLocation',
        format: '',
    },
    {
        name: 'referrer',
        baseName: 'referrer',
        type: 'LiveStreamSessionReferrer',
        format: '',
    },
    {
        name: 'device',
        baseName: 'device',
        type: 'LiveStreamSessionDevice',
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
        type: 'LiveStreamSessionClient',
        format: '',
    },
];
