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
import AccessToken from '../model/AccessToken';
import AuthenticatePayload from '../model/AuthenticatePayload';
import RefreshTokenPayload from '../model/RefreshTokenPayload';
/**
 * no description
 */
export default class AuthenticationApi {
    private httpClient;
    constructor(httpClient: HttpClient);
    /**
     * To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication. All tutorials using the [authentication endpoint](https://api.video/blog/endpoints/authenticate)
     * Authenticate
     * @param authenticatePayload
     */
    authenticate(authenticatePayload: AuthenticatePayload): Promise<AccessToken>;
    /**
     * Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token.
     * Refresh token
     * @param refreshTokenPayload
     */
    refresh(refreshTokenPayload: RefreshTokenPayload): Promise<AccessToken>;
}
