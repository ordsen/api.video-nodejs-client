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
import AttributeType from './AttributeType';
import PaginationLink from './PaginationLink';
export default class Pagination {
    /**
     * Total number of items that exist.
     */
    'itemsTotal'?: number;
    /**
     * Number of items listed in the current page.
     */
    'pagesTotal'?: number;
    /**
     * Maximum number of item per page.
     */
    'pageSize'?: number;
    /**
     * The current page index.
     */
    'currentPage'?: number;
    /**
     * The number of items on the current page.
     */
    'currentPageItems'?: number;
    'links': Array<PaginationLink>;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
