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
import BytesRange from './BytesRange';
/**
 * Details about the capturing, transferring, and storing of your video for use immediately or in the future.
 */
export default class VideoStatusIngest {
    /**
     * There are three possible ingest statuses. missing - you are missing information required to ingest the video. uploading - the video is in the process of being uploaded. uploaded - the video is ready for use.
     */
    'status'?: VideoStatusIngestStatusEnum;
    /**
     * The size of your file in bytes.
     */
    'filesize'?: number;
    /**
     * The total number of bytes received, listed for each chunk of the upload.
     */
    'receivedBytes'?: Array<BytesRange>;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
export declare type VideoStatusIngestStatusEnum = 'missing' | 'uploading' | 'uploaded';
