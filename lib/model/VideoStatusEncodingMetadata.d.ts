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
export default class VideoStatusEncodingMetadata {
    /**
     * The width of the video in pixels.
     */
    'width'?: number;
    /**
     * The height of the video in pixels.
     */
    'height'?: number;
    /**
     * The number of bits processed per second.
     */
    'bitrate'?: number;
    /**
     * The length of the video.
     */
    'duration'?: number;
    /**
     * The frequency with which consecutive images or frames appear on a display. Shown in this API as frames per second (fps).
     */
    'framerate'?: number;
    /**
     * How many samples per second a digital audio system uses to record an audio signal. The higher the rate, the higher the frequencies that can be recorded. They are presented in this API using hertz.
     */
    'samplerate'?: number;
    /**
     * The method used to compress and decompress digital video. API Video supports all codecs in the libavcodec library.
     */
    'videoCodec'?: string;
    /**
     * The method used to compress and decompress digital audio for your video.
     */
    'audioCodec'?: string;
    'aspectRatio'?: string;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
