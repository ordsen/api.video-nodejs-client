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
import VideoSessionClient from './VideoSessionClient';
import VideoSessionDevice from './VideoSessionDevice';
import VideoSessionLocation from './VideoSessionLocation';
import VideoSessionOs from './VideoSessionOs';
import VideoSessionReferrer from './VideoSessionReferrer';
import VideoSessionSession from './VideoSessionSession';
export default class VideoSession {
    'session'?: VideoSessionSession;
    'location'?: VideoSessionLocation;
    'referrer'?: VideoSessionReferrer;
    'device'?: VideoSessionDevice;
    'os'?: VideoSessionOs;
    'client'?: VideoSessionClient;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
