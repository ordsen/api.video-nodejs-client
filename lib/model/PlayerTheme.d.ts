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
import PlayerThemeAssets from './PlayerThemeAssets';
export default class PlayerTheme {
    /**
     * The name of the player theme
     */
    'name'?: string;
    /**
     * RGBA color for timer text. Default: rgba(255, 255, 255, 1)
     */
    'text'?: string;
    /**
     * RGBA color for all controls. Default: rgba(255, 255, 255, 1)
     */
    'link'?: string;
    /**
     * RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)
     */
    'linkHover'?: string;
    /**
     * RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)
     */
    'trackPlayed'?: string;
    /**
     * RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)
     */
    'trackUnplayed'?: string;
    /**
     * RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)
     */
    'trackBackground'?: string;
    /**
     * RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)
     */
    'backgroundTop'?: string;
    /**
     * RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)
     */
    'backgroundBottom'?: string;
    /**
     * RGBA color for title text. Default: rgba(255, 255, 255, 1)
     */
    'backgroundText'?: string;
    /**
     * enable/disable player SDK access. Default: true
     */
    'enableApi'?: boolean;
    /**
     * enable/disable player controls. Default: true
     */
    'enableControls'?: boolean;
    /**
     * enable/disable player autoplay. Default: false
     */
    'forceAutoplay'?: boolean;
    /**
     * enable/disable title. Default: false
     */
    'hideTitle'?: boolean;
    /**
     * enable/disable looping. Default: false
     */
    'forceLoop'?: boolean;
    'playerId': string;
    /**
     * When the player was created, presented in ISO-8601 format.
     */
    'createdAt'?: Date;
    /**
     * When the player was last updated, presented in ISO-8601 format.
     */
    'updatedAt'?: Date;
    /**
     * RGBA color for the play button when hovered.
     */
    'linkActive'?: string;
    'assets'?: PlayerThemeAssets;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
