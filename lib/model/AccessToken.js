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
class AccessToken {
    static getAttributeTypeMap() {
        return AccessToken.attributeTypeMap;
    }
}
exports.default = AccessToken;
AccessToken.discriminator = undefined;
AccessToken.attributeTypeMap = [
    {
        name: 'accessToken',
        baseName: 'access_token',
        type: 'string',
        format: '',
    },
    {
        name: 'tokenType',
        baseName: 'token_type',
        type: 'string',
        format: '',
    },
    {
        name: 'refreshToken',
        baseName: 'refresh_token',
        type: 'string',
        format: '',
    },
    {
        name: 'expiresIn',
        baseName: 'expires_in',
        type: 'number',
        format: '',
    },
];