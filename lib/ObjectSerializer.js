"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-non-null-assertion */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccessToken_1 = __importDefault(require("./model/AccessToken"));
const AuthenticatePayload_1 = __importDefault(require("./model/AuthenticatePayload"));
const BadRequest_1 = __importDefault(require("./model/BadRequest"));
const BytesRange_1 = __importDefault(require("./model/BytesRange"));
const Caption_1 = __importDefault(require("./model/Caption"));
const CaptionsListResponse_1 = __importDefault(require("./model/CaptionsListResponse"));
const CaptionsUpdatePayload_1 = __importDefault(require("./model/CaptionsUpdatePayload"));
const Chapter_1 = __importDefault(require("./model/Chapter"));
const ChaptersListResponse_1 = __importDefault(require("./model/ChaptersListResponse"));
const Link_1 = __importDefault(require("./model/Link"));
const LiveStream_1 = __importDefault(require("./model/LiveStream"));
const LiveStreamAssets_1 = __importDefault(require("./model/LiveStreamAssets"));
const LiveStreamCreationPayload_1 = __importDefault(require("./model/LiveStreamCreationPayload"));
const LiveStreamListResponse_1 = __importDefault(require("./model/LiveStreamListResponse"));
const LiveStreamSession_1 = __importDefault(require("./model/LiveStreamSession"));
const LiveStreamSessionClient_1 = __importDefault(require("./model/LiveStreamSessionClient"));
const LiveStreamSessionDevice_1 = __importDefault(require("./model/LiveStreamSessionDevice"));
const LiveStreamSessionLocation_1 = __importDefault(require("./model/LiveStreamSessionLocation"));
const LiveStreamSessionReferrer_1 = __importDefault(require("./model/LiveStreamSessionReferrer"));
const LiveStreamSessionSession_1 = __importDefault(require("./model/LiveStreamSessionSession"));
const LiveStreamUpdatePayload_1 = __importDefault(require("./model/LiveStreamUpdatePayload"));
const Metadata_1 = __importDefault(require("./model/Metadata"));
const NotFound_1 = __importDefault(require("./model/NotFound"));
const Pagination_1 = __importDefault(require("./model/Pagination"));
const PaginationLink_1 = __importDefault(require("./model/PaginationLink"));
const PlayerSessionEvent_1 = __importDefault(require("./model/PlayerSessionEvent"));
const PlayerTheme_1 = __importDefault(require("./model/PlayerTheme"));
const PlayerThemeAssets_1 = __importDefault(require("./model/PlayerThemeAssets"));
const PlayerThemeCreationPayload_1 = __importDefault(require("./model/PlayerThemeCreationPayload"));
const PlayerThemeUpdatePayload_1 = __importDefault(require("./model/PlayerThemeUpdatePayload"));
const PlayerThemesListResponse_1 = __importDefault(require("./model/PlayerThemesListResponse"));
const Quality_1 = __importDefault(require("./model/Quality"));
const RawStatisticsListLiveStreamAnalyticsResponse_1 = __importDefault(require("./model/RawStatisticsListLiveStreamAnalyticsResponse"));
const RawStatisticsListPlayerSessionEventsResponse_1 = __importDefault(require("./model/RawStatisticsListPlayerSessionEventsResponse"));
const RawStatisticsListSessionsResponse_1 = __importDefault(require("./model/RawStatisticsListSessionsResponse"));
const RefreshTokenPayload_1 = __importDefault(require("./model/RefreshTokenPayload"));
const TokenCreationPayload_1 = __importDefault(require("./model/TokenCreationPayload"));
const TokenListResponse_1 = __importDefault(require("./model/TokenListResponse"));
const UploadToken_1 = __importDefault(require("./model/UploadToken"));
const Video_1 = __importDefault(require("./model/Video"));
const VideoAssets_1 = __importDefault(require("./model/VideoAssets"));
const VideoClip_1 = __importDefault(require("./model/VideoClip"));
const VideoCreationPayload_1 = __importDefault(require("./model/VideoCreationPayload"));
const VideoSession_1 = __importDefault(require("./model/VideoSession"));
const VideoSessionClient_1 = __importDefault(require("./model/VideoSessionClient"));
const VideoSessionDevice_1 = __importDefault(require("./model/VideoSessionDevice"));
const VideoSessionLocation_1 = __importDefault(require("./model/VideoSessionLocation"));
const VideoSessionOs_1 = __importDefault(require("./model/VideoSessionOs"));
const VideoSessionReferrer_1 = __importDefault(require("./model/VideoSessionReferrer"));
const VideoSessionSession_1 = __importDefault(require("./model/VideoSessionSession"));
const VideoSource_1 = __importDefault(require("./model/VideoSource"));
const VideoSourceLiveStream_1 = __importDefault(require("./model/VideoSourceLiveStream"));
const VideoSourceLiveStreamLink_1 = __importDefault(require("./model/VideoSourceLiveStreamLink"));
const VideoStatus_1 = __importDefault(require("./model/VideoStatus"));
const VideoStatusEncoding_1 = __importDefault(require("./model/VideoStatusEncoding"));
const VideoStatusEncodingMetadata_1 = __importDefault(require("./model/VideoStatusEncodingMetadata"));
const VideoStatusIngest_1 = __importDefault(require("./model/VideoStatusIngest"));
const VideoThumbnailPickPayload_1 = __importDefault(require("./model/VideoThumbnailPickPayload"));
const VideoUpdatePayload_1 = __importDefault(require("./model/VideoUpdatePayload"));
const VideoWatermark_1 = __importDefault(require("./model/VideoWatermark"));
const VideosListResponse_1 = __importDefault(require("./model/VideosListResponse"));
const Watermark_1 = __importDefault(require("./model/Watermark"));
const WatermarksListResponse_1 = __importDefault(require("./model/WatermarksListResponse"));
const Webhook_1 = __importDefault(require("./model/Webhook"));
const WebhooksCreationPayload_1 = __importDefault(require("./model/WebhooksCreationPayload"));
const WebhooksListResponse_1 = __importDefault(require("./model/WebhooksListResponse"));
/* tslint:disable:no-unused-variable */
const primitives = [
    'string',
    'boolean',
    'double',
    'integer',
    'long',
    'float',
    'number',
    'any',
];
const supportedMediaTypes = {
    'application/json': Infinity,
    'application/octet-stream': 0,
};
const enumsMap = new Set([
    'QualityTypeEnum',
    'QualityQualityEnum',
    'QualityStatusEnum',
    'VideoStatusIngestStatusEnum',
]);
let typeMap = {
    AccessToken: AccessToken_1.default,
    AuthenticatePayload: AuthenticatePayload_1.default,
    BadRequest: BadRequest_1.default,
    BytesRange: BytesRange_1.default,
    Caption: Caption_1.default,
    CaptionsListResponse: CaptionsListResponse_1.default,
    CaptionsUpdatePayload: CaptionsUpdatePayload_1.default,
    Chapter: Chapter_1.default,
    ChaptersListResponse: ChaptersListResponse_1.default,
    Link: Link_1.default,
    LiveStream: LiveStream_1.default,
    LiveStreamAssets: LiveStreamAssets_1.default,
    LiveStreamCreationPayload: LiveStreamCreationPayload_1.default,
    LiveStreamListResponse: LiveStreamListResponse_1.default,
    LiveStreamSession: LiveStreamSession_1.default,
    LiveStreamSessionClient: LiveStreamSessionClient_1.default,
    LiveStreamSessionDevice: LiveStreamSessionDevice_1.default,
    LiveStreamSessionLocation: LiveStreamSessionLocation_1.default,
    LiveStreamSessionReferrer: LiveStreamSessionReferrer_1.default,
    LiveStreamSessionSession: LiveStreamSessionSession_1.default,
    LiveStreamUpdatePayload: LiveStreamUpdatePayload_1.default,
    Metadata: Metadata_1.default,
    NotFound: NotFound_1.default,
    Pagination: Pagination_1.default,
    PaginationLink: PaginationLink_1.default,
    PlayerSessionEvent: PlayerSessionEvent_1.default,
    PlayerTheme: PlayerTheme_1.default,
    PlayerThemeAssets: PlayerThemeAssets_1.default,
    PlayerThemeCreationPayload: PlayerThemeCreationPayload_1.default,
    PlayerThemeUpdatePayload: PlayerThemeUpdatePayload_1.default,
    PlayerThemesListResponse: PlayerThemesListResponse_1.default,
    Quality: Quality_1.default,
    RawStatisticsListLiveStreamAnalyticsResponse: RawStatisticsListLiveStreamAnalyticsResponse_1.default,
    RawStatisticsListPlayerSessionEventsResponse: RawStatisticsListPlayerSessionEventsResponse_1.default,
    RawStatisticsListSessionsResponse: RawStatisticsListSessionsResponse_1.default,
    RefreshTokenPayload: RefreshTokenPayload_1.default,
    TokenCreationPayload: TokenCreationPayload_1.default,
    TokenListResponse: TokenListResponse_1.default,
    UploadToken: UploadToken_1.default,
    Video: Video_1.default,
    VideoAssets: VideoAssets_1.default,
    VideoClip: VideoClip_1.default,
    VideoCreationPayload: VideoCreationPayload_1.default,
    VideoSession: VideoSession_1.default,
    VideoSessionClient: VideoSessionClient_1.default,
    VideoSessionDevice: VideoSessionDevice_1.default,
    VideoSessionLocation: VideoSessionLocation_1.default,
    VideoSessionOs: VideoSessionOs_1.default,
    VideoSessionReferrer: VideoSessionReferrer_1.default,
    VideoSessionSession: VideoSessionSession_1.default,
    VideoSource: VideoSource_1.default,
    VideoSourceLiveStream: VideoSourceLiveStream_1.default,
    VideoSourceLiveStreamLink: VideoSourceLiveStreamLink_1.default,
    VideoStatus: VideoStatus_1.default,
    VideoStatusEncoding: VideoStatusEncoding_1.default,
    VideoStatusEncodingMetadata: VideoStatusEncodingMetadata_1.default,
    VideoStatusIngest: VideoStatusIngest_1.default,
    VideoThumbnailPickPayload: VideoThumbnailPickPayload_1.default,
    VideoUpdatePayload: VideoUpdatePayload_1.default,
    VideoWatermark: VideoWatermark_1.default,
    VideosListResponse: VideosListResponse_1.default,
    Watermark: Watermark_1.default,
    WatermarksListResponse: WatermarksListResponse_1.default,
    Webhook: Webhook_1.default,
    WebhooksCreationPayload: WebhooksCreationPayload_1.default,
    WebhooksListResponse: WebhooksListResponse_1.default,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        // Check the discriminator
        if (typeMap[expectedType]) {
            const discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty && data[discriminatorProperty]) {
                const discriminatorType = data[discriminatorProperty];
                if (typeMap[discriminatorType]) {
                    return discriminatorType; // use the type given in the discriminator
                }
            }
        }
        return expectedType;
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            if (format == 'date') {
                let month = data.getMonth() + 1;
                month = month < 10 ? '0' + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? '0' + day.toString() : day.toString();
                return data.getFullYear() + '-' + month + '-' + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                // is Enum
                return data;
            }
            if (!typeMap[type]) {
                // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(';')[0].trim().toLowerCase();
    }
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    static getPreferredMediaType(mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return 'application/json';
        }
        const normalMediaTypes = mediaTypes
            .map(this.normalizeMediaType)
            .filter((mt) => mt);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error('None of the given media types are supported: ' + mediaTypes.join(', '));
        }
        return selectedMediaType;
    }
    /**
     * Convert data to a string according the given media type
     */
    static stringify(data, mediaType) {
        if (mediaType === 'application/json') {
            return JSON.stringify(data);
        }
        // HTTP DELETE response.
        if (data === '') {
            return data;
        }
        throw new Error('The mediaType ' +
            mediaType +
            ' is not supported by ObjectSerializer.stringify.');
    }
    /**
     * Parse data from a string according to the given media type
     */
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            // HTTP DELETE response.
            if (rawData === '') {
                return rawData;
            }
            throw new Error('Cannot parse content. No Content-Type defined.');
        }
        if (mediaType === 'application/json' ||
            mediaType.indexOf('application/vnd.api.video+json;version=') === 0) {
            return JSON.parse(rawData);
        }
        throw new Error('The mediaType ' +
            mediaType +
            ' is not supported by ObjectSerializer.parse.');
    }
}
exports.default = ObjectSerializer;
