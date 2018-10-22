import { logger } from '../config/logger';
const SHA256 = require('crypto-js/sha256');
const faker = require('faker');
const request = require('request');


export class SpotifyService {

    /**************************************************************
     * Query Services
     *************************************************************/

    async getSession(req, res, auth): Promise<any> {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ('Bearer ' + auth)
        };

        const options = {
            url: 'https://api.spotify.com/v1/me/player/currently-playing',
            headers: headers
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);

                const song = data.item.name;
                const artImage = data.item.album.images[0].url;
                const artists = data.item.artists.reduce((artistString, currArtist, index) => {
                    return (index === 0 ) ? currArtist.name : artistString + ', ' + currArtist.name;
                }, '');
                const numArtists = data.item.artists.length;

                logger.info('Returning Current Session Info');
                res.send(`
                <html>
                <body>

                <h2>Current Spotify Session</h2>
                <h2>Song: ${song} </h2>
                <h2>Artist${(numArtists > 1) ? 's' : ''}: ${artists}</h2>
                <img src="${artImage}" alt="Album Art" width="300" height="300">
                <p><a href=${data.item.external_urls.spotify}>Listen to this song!</p>
                </body>
                </html>`);
            }
            else {
                throw new Error(error);
            }
        }

        request(options, callback);
    }
}

export default new SpotifyService();
