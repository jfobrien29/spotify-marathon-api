import SpotifyService from './SpotifyService';
import { config } from '../config';
import { logger } from '../config/logger';

// NOTE: This class is used for validation and response protocol for various endpoints
class SpotifyController {

    /********************************************
     * GET controllers
     ********************************************/

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

    /********************************************
     * POST controllers
     ********************************************/
}

export default new SpotifyController();
