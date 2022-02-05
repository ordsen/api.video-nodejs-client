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
class BytesRange {
    static getAttributeTypeMap() {
        return BytesRange.attributeTypeMap;
    }
}
exports.default = BytesRange;
BytesRange.discriminator = undefined;
BytesRange.attributeTypeMap = [
    {
        name: 'from',
        baseName: 'from',
        type: 'number',
        format: '',
    },
    {
        name: 'to',
        baseName: 'to',
        type: 'number',
        format: '',
    },
    {
        name: 'total',
        baseName: 'total',
        type: 'number',
        format: '',
    },
];
