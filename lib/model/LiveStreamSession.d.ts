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
import LiveStreamSessionClient from './LiveStreamSessionClient';
import LiveStreamSessionDevice from './LiveStreamSessionDevice';
import LiveStreamSessionLocation from './LiveStreamSessionLocation';
import LiveStreamSessionReferrer from './LiveStreamSessionReferrer';
import LiveStreamSessionSession from './LiveStreamSessionSession';
import VideoSessionOs from './VideoSessionOs';
export default class LiveStreamSession {
    'session'?: LiveStreamSessionSession;
    'location'?: LiveStreamSessionLocation;
    'referrer'?: LiveStreamSessionReferrer;
    'device'?: LiveStreamSessionDevice;
    'os'?: VideoSessionOs;
    'client'?: LiveStreamSessionClient;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
