import SpotifyService from './SpotifyService';
import { config } from '../config';
import { logger } from '../config/logger';

// NOTE: This class is used for validation and response protocol for various endpoints
class SpotifyController {

    /********************************************
     * GET controllers
     ********************************************/

    public getCurrentSessionData = async (req, res) => {
        try {
            res.status(200).send(await SpotifyService.getSessionData(config.TOKEN));
        }
        catch (err) {
            if (err.statusCode === 401) {
                logger.info('Getting new Access Token');
                const token = await SpotifyService.getNewAccessToken();
                res.status(200).send(await SpotifyService.getSessionData(token));
            }
            else {
                logger.debug(err);
                res.status(500).send(err);
            }
        }
    }

    public getCurrentSession = async (req, res) => {
        try {
            res.status(200).send(await SpotifyService.getSession(config.TOKEN));
        }
        catch (err) {
            if (err.statusCode === 401) {
                logger.info('Getting new Access Token');
                const token = await SpotifyService.getNewAccessToken();
                res.status(200).send(await SpotifyService.getSession(token));
            }
            else {
                logger.debug(err);
                res.status(500).send(err);
            }
        }
    }

    public getLastPlayed = async (req, res) => {
        try {
            res.status(200).send(await SpotifyService.getLastPlayed(config.TOKEN));
        }
        catch (err) {
            if (err.statusCode === 401) {
                logger.info('Getting new Access Token');
                const token = await SpotifyService.getNewAccessToken();
                res.status(200).send(await SpotifyService.getLastPlayed(token));
            }
            else {
                logger.debug(err);
                res.status(500).send(err);
            }
        }
    }

    /********************************************
     * POST controllers
     ********************************************/
}

export default new SpotifyController();
