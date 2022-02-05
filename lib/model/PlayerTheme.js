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
class PlayerTheme {
    static getAttributeTypeMap() {
        return PlayerTheme.attributeTypeMap;
    }
}
exports.default = PlayerTheme;
PlayerTheme.discriminator = undefined;
PlayerTheme.attributeTypeMap = [
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'text',
        baseName: 'text',
        type: 'string',
        format: '',
    },
    {
        name: 'link',
        baseName: 'link',
        type: 'string',
        format: '',
    },
    {
        name: 'linkHover',
        baseName: 'linkHover',
        type: 'string',
        format: '',
    },
    {
        name: 'trackPlayed',
        baseName: 'trackPlayed',
        type: 'string',
        format: '',
    },
    {
        name: 'trackUnplayed',
        baseName: 'trackUnplayed',
        type: 'string',
        format: '',
    },
    {
        name: 'trackBackground',
        baseName: 'trackBackground',
        type: 'string',
        format: '',
    },
    {
        name: 'backgroundTop',
        baseName: 'backgroundTop',
        type: 'string',
        format: '',
    },
    {
        name: 'backgroundBottom',
        baseName: 'backgroundBottom',
        type: 'string',
        format: '',
    },
    {
        name: 'backgroundText',
        baseName: 'backgroundText',
        type: 'string',
        format: '',
    },
    {
        name: 'enableApi',
        baseName: 'enableApi',
        type: 'boolean',
        format: '',
    },
    {
        name: 'enableControls',
        baseName: 'enableControls',
        type: 'boolean',
        format: '',
    },
    {
        name: 'forceAutoplay',
        baseName: 'forceAutoplay',
        type: 'boolean',
        format: '',
    },
    {
        name: 'hideTitle',
        baseName: 'hideTitle',
        type: 'boolean',
        format: '',
    },
    {
        name: 'forceLoop',
        baseName: 'forceLoop',
        type: 'boolean',
        format: '',
    },
    {
        name: 'playerId',
        baseName: 'playerId',
        type: 'string',
        format: '',
    },
    {
        name: 'createdAt',
        baseName: 'createdAt',
        type: 'Date',
        format: 'date-time',
    },
    {
        name: 'updatedAt',
        baseName: 'updatedAt',
        type: 'Date',
        format: 'date-time',
    },
    {
        name: 'linkActive',
        baseName: 'linkActive',
        type: 'string',
        format: '',
    },
    {
        name: 'assets',
        baseName: 'assets',
        type: 'PlayerThemeAssets',
        format: '',
    },
];
