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
class Quality {
    static getAttributeTypeMap() {
        return Quality.attributeTypeMap;
    }
}
exports.default = Quality;
Quality.discriminator = undefined;
Quality.attributeTypeMap = [
    {
        name: 'type',
        baseName: 'type',
        type: 'QualityTypeEnum',
        format: '',
    },
    {
        name: 'quality',
        baseName: 'quality',
        type: 'QualityQualityEnum',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'QualityStatusEnum',
        format: '',
    },
];
