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
import Caption from './Caption';
import Pagination from './Pagination';

export default class CaptionsListResponse {
  'data': Array<Caption>;
  'pagination': Pagination;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'data',
      baseName: 'data',
      type: 'Array<Caption>',
      format: '',
    },
    {
      name: 'pagination',
      baseName: 'pagination',
      type: 'Pagination',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CaptionsListResponse.attributeTypeMap;
  }
}
