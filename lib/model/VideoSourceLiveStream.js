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
 * This appears if the video is from a Live Record.
 */
class VideoSourceLiveStream {
    static getAttributeTypeMap() {
        return VideoSourceLiveStream.attributeTypeMap;
    }
}
exports.default = VideoSourceLiveStream;
VideoSourceLiveStream.discriminator = undefined;
VideoSourceLiveStream.attributeTypeMap = [
    {
        name: 'liveStreamId',
        baseName: 'liveStreamId',
        type: 'string',
        format: '',
    },
    {
        name: 'links',
        baseName: 'links',
        type: 'Array<VideoSourceLiveStreamLink>',
        format: '',
    },
];
