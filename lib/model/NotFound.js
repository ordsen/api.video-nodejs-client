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
class NotFound {
    static getAttributeTypeMap() {
        return NotFound.attributeTypeMap;
    }
}
exports.default = NotFound;
NotFound.discriminator = undefined;
NotFound.attributeTypeMap = [
    {
        name: 'type',
        baseName: 'type',
        type: 'string',
        format: '',
    },
    {
        name: 'title',
        baseName: 'title',
        type: 'string',
        format: '',
    },
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'number',
        format: '',
    },
];
