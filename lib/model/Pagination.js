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
class Pagination {
    static getAttributeTypeMap() {
        return Pagination.attributeTypeMap;
    }
}
exports.default = Pagination;
Pagination.discriminator = undefined;
Pagination.attributeTypeMap = [
    {
        name: 'itemsTotal',
        baseName: 'itemsTotal',
        type: 'number',
        format: '',
    },
    {
        name: 'pagesTotal',
        baseName: 'pagesTotal',
        type: 'number',
        format: '',
    },
    {
        name: 'pageSize',
        baseName: 'pageSize',
        type: 'number',
        format: '',
    },
    {
        name: 'currentPage',
        baseName: 'currentPage',
        type: 'number',
        format: '',
    },
    {
        name: 'currentPageItems',
        baseName: 'currentPageItems',
        type: 'number',
        format: '',
    },
    {
        name: 'links',
        baseName: 'links',
        type: 'Array<PaginationLink>',
        format: '',
    },
];
