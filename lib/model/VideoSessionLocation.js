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
 * The location of the viewer.
 */
class VideoSessionLocation {
    static getAttributeTypeMap() {
        return VideoSessionLocation.attributeTypeMap;
    }
}
exports.default = VideoSessionLocation;
VideoSessionLocation.discriminator = undefined;
VideoSessionLocation.attributeTypeMap = [
    {
        name: 'country',
        baseName: 'country',
        type: 'string',
        format: '',
    },
    {
        name: 'city',
        baseName: 'city',
        type: 'string',
        format: '',
    },
];
