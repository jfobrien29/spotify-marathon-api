import { config } from '../config';
import { logger } from '../config/logger';
const request = require('request-promise-native');

export class SpotifyHelper {
    /**************************************************************
     * API Calls
     *************************************************************/

    public async getCurrentlyPlaying(auth: string): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ('Bearer ' + auth)
        };

        const options = {
            url: 'https://api.spotify.com/v1/me/player/currently-playing',
            headers: headers
        };

        const response = await request(options);
        return response;
    }

    public async getPlaylist(auth: string): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ('Bearer ' + auth)
        };

        const options = {
            url: 'https://api.spotify.com/v1/playlists/2JUf2gUEcVwxOue6vaASwa',
            headers: headers
        };

        const response = await request(options);
        return response;
    }

    public async getLastPlayed(auth: string): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ('Bearer ' + auth)
        };

        const options = {
            url: 'https://api.spotify.com/v1/me/player/recently-played?limit=1',
            headers: headers
        };

        const response = await request(options);
        return response;
    }

    public async getCurrentDevice(auth: string): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ('Bearer ' + auth)
        };

        const options = {
            url: 'https://api.spotify.com/v1/me/player/devices',
            headers: headers
        };

        const response = await request(options);
        return response;
    }

    public async getNewAccessToken(): Promise<any> {
        // requesting access token from refresh token
        const refresh_token = config.RTOKEN;
        const cid = config.SPOTIFY_CLIENT_ID;
        const cs = config.SPOTIFY_CLIENT_SECRET;

        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(cid + ':' + cs).toString('base64'))
            },
            form: {
                grant_type: 'refresh_token',
                refresh_token: refresh_token
            },
            json: true
        };

        const resp = await request.post(authOptions);
        logger.debug(JSON.stringify(resp, undefined, 2));
        const access_token = resp.access_token;
        config.TOKEN = resp.access_token;
        return access_token;
    }
}

export default new SpotifyHelper();
