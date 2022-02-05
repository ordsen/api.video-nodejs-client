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
class RawStatisticsListPlayerSessionEventsResponse {
    static getAttributeTypeMap() {
        return RawStatisticsListPlayerSessionEventsResponse.attributeTypeMap;
    }
}
exports.default = RawStatisticsListPlayerSessionEventsResponse;
RawStatisticsListPlayerSessionEventsResponse.discriminator = undefined;
RawStatisticsListPlayerSessionEventsResponse.attributeTypeMap = [
    {
        name: 'data',
        baseName: 'data',
        type: 'Array<PlayerSessionEvent>',
        format: '',
    },
    {
        name: 'pagination',
        baseName: 'pagination',
        type: 'Pagination',
        format: '',
    },
];
