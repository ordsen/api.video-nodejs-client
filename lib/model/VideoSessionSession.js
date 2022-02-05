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
class VideoSessionSession {
    static getAttributeTypeMap() {
        return VideoSessionSession.attributeTypeMap;
    }
}
exports.default = VideoSessionSession;
VideoSessionSession.discriminator = undefined;
VideoSessionSession.attributeTypeMap = [
    {
        name: 'sessionId',
        baseName: 'sessionId',
        type: 'string',
        format: '',
    },
    {
        name: 'loadedAt',
        baseName: 'loadedAt',
        type: 'Date',
        format: 'date-time',
    },
    {
        name: 'endedAt',
        baseName: 'endedAt',
        type: 'Date',
        format: 'date-time',
    },
    {
        name: 'metadata',
        baseName: 'metadata',
        type: 'Array<Metadata>',
        format: '',
    },
];
