import { logger } from '../config/logger';
import { config } from '../config';
import { songReviews } from '../config/SongReviews';
import SpotifyHelper from '../gateways/SpotifyGateway';
const request = require('request-promise-native');

export class SpotifyService {

    /**************************************************************
     * Query Services
     *************************************************************/

    async getSessionData(auth): Promise<any> {
        const response = await SpotifyHelper.getCurrentlyPlaying(auth);
        if (!response) {
            return {isPlaying: false};
        }
        else {
            const data = JSON.parse(response);
            const reviewData = songReviews[data.item.id];
            data.review = (reviewData) ? reviewData.review : '';
            data.isPlaying = true;
            return data;
        }
    }

    async getSession(auth): Promise<any> {
        const data = await this.getSessionData(auth);
        return this.createResponseWithData(data);
    }

    async getLastPlayed(auth): Promise<any> {
        return await SpotifyHelper.getLastPlayed(auth);
    }

    createResponseWithData(data) {
        if (data.isPlaying) {
            const song = data.item.name;
            const artImage = data.item.album.images[0].url;
            const artists = data.item.artists.reduce((artistString, currArtist, index) => {
                return (index === 0) ? currArtist.name : artistString + ', ' + currArtist.name;
            }, '');
            const numArtists = data.item.artists.length;
            const progress = data.progress_ms;
            const duration = data.item.duration_ms;
            const review = data.review;

            logger.info('Returning Current Session Info');
            return `<html>
            <body>
            <h2>
                Jack Is Listening To Music! <img src="https://kylekeech.com/wp-content/uploads/2016/01/bars1.gif" width="15" height="15">
            </h2>
            <h2>Song: ${song} </h2>
            <h2>Artist${(numArtists > 1) ? 's' : ''}: ${artists}</h2>

            <img src="${artImage}" alt="Album Art" width="400" height="400">
            ${(review === '') ? '<p>This song hasn\'t been reviewed.</p>' : '<p> My Thoughts: <b>"' + review + '"</b></p>'}
            <p>Song is <b>${this.msToMinSec(progress)}</b> of <b>${this.msToMinSec(duration)}</b> complete.</p>
            <p><a href=${data.item.external_urls.spotify}>Listen to this song in your browser!</p>
            <p><a href=${data.item.uri}>Open this song in Spotify!</p>
            </body>
            </html>`;
        }
        else {
            return `<html>
            <body>
            <h2>Jack Is <em>Not</em> Currently Listening To Music!</h2>
            </body>
            </html>`;
        }
    }

    msToMinSec(ms) {
        const s = Math.floor(ms / 1000);
        const seconds = s % 60;
        const min = Math.floor(s / 60);
        return `${min}:${(seconds < 10) ? '0' + seconds : seconds}`;
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
