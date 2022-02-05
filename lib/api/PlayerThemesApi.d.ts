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
import HttpClient from '../HttpClient';
import PlayerTheme from '../model/PlayerTheme';
import PlayerThemeCreationPayload from '../model/PlayerThemeCreationPayload';
import PlayerThemeUpdatePayload from '../model/PlayerThemeUpdatePayload';
import PlayerThemesListResponse from '../model/PlayerThemesListResponse';
/**
 * no description
 */
export default class PlayerThemesApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
     * Delete a player
     * @param playerId The unique identifier for the player you want to delete.
     */
    delete(playerId: string): Promise<void>;
    /**
     * Delete logo
     * @param playerId The unique identifier for the player.
     */
    deleteLogo(playerId: string): Promise<void>;
    /**
     * Retrieve a list of all the player themes you created, as well as details about each one. Tutorials that use the [player endpoint](https://api.video/blog/endpoints/player).
     * List all player themes
     * @param {Object} searchParams
     * @param { &#39;name&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39; } searchParams.sortBy createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.
     * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.
     * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
     */
    list({ sortBy, sortOrder, currentPage, pageSize, }?: {
        sortBy?: 'name' | 'createdAt' | 'updatedAt';
        sortOrder?: 'asc' | 'desc';
        currentPage?: number;
        pageSize?: number;
    }): Promise<PlayerThemesListResponse>;
    /**
     * Use a player ID to retrieve details about the player and display it for viewers.
     * Show a player
     * @param playerId The unique identifier for the player you want to retrieve.
     */
    get(playerId: string): Promise<PlayerTheme>;
    /**
     * Use a player ID to update specific details for a player. NOTE: It may take up to 10 min before the new player configuration is available from our CDN.
     * Update a player
     * @param playerId The unique identifier for the player.
     * @param playerThemeUpdatePayload
     */
    update(playerId: string, playerThemeUpdatePayload?: PlayerThemeUpdatePayload): Promise<PlayerTheme>;
    /**
     * Create a player for your video, and customise it.
     * Create a player
     * @param playerThemeCreationPayload
     */
    create(playerThemeCreationPayload?: PlayerThemeCreationPayload): Promise<PlayerTheme>;
    /**
     * The uploaded image maximum size should be 200x100 and its weight should be 100KB.  It will be scaled down to 30px height and converted to PNG to be displayed in the player.
     * Upload a logo
     * @param playerId The unique identifier for the player.
     * @param file The name of the file you want to use for your logo.
     * @param link A public link that you want to advertise in your player. For example, you could add a link to your company. When a viewer clicks on your logo, they will be taken to this address.
     */
    uploadLogo(playerId: string, file: string, link?: string): Promise<PlayerTheme>;
}
