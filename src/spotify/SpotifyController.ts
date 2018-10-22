import SpotifyService from './SpotifyService';
import { config } from '../config';

// NOTE: This class is used for validation and response protocol for various endpoints
class SpotifyController {

    /********************************************
     * GET controllers
     ********************************************/

    public getCurrentSession = async (req, res) => {
        try {
            await SpotifyService.getSession(req, res, config.TOKEN);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }

    /********************************************
     * POST controllers
     ********************************************/
}

export default new SpotifyController();
