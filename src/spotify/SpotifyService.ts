import { logger } from '../config/logger';
import { config } from '../config';
const request = require('request-promise-native');
const SHA256 = require('crypto-js/sha256');
const faker = require('faker');


export class SpotifyService {

    /**************************************************************
     * Query Services
     *************************************************************/

    async getSession(auth): Promise<any> {
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
        const data = JSON.parse(response);
        return this.createResponseWithData(data);
    }

    createResponseWithData(data) {
            const song = data.item.name;
            const artImage = data.item.album.images[0].url;
            const artists = data.item.artists.reduce((artistString, currArtist, index) => {
                return (index === 0) ? currArtist.name : artistString + ', ' + currArtist.name;
            }, '');
            const numArtists = data.item.artists.length;

            logger.info('Returning Current Session Info');
            return`<html>
            <body>
            <h2>Current Spotify Session</h2>
            <h2>Song: ${song} </h2>
            <h2>Artist${(numArtists > 1) ? 's' : ''}: ${artists}</h2>
            <img src="${artImage}" alt="Album Art" width="300" height="300">
            <p><a href=${data.item.external_urls.spotify}>Listen to this song on the Internet!</p>
            <p><a href=${data.item.uri}>Open this song in Spotify!</p>
            </body>
            </html>`;
    }

    async getNewAccessToken(): Promise<any> {
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

export default new SpotifyService();
