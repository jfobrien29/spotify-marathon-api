const SHA256 = require('crypto-js/sha256');
const faker = require('faker');

export class SpotifyService {

    /**************************************************************
     * Query Services
     *************************************************************/

    async getSession(): Promise<any> {
        return {
            message : 'Session'
        };
    }

}

export default new SpotifyService();
