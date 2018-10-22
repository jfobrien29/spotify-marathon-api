import SpotifyService from './SpotifyService';

// NOTE: This class is used for validation and response protocol for various endpoints
class SpotifyController {

    /********************************************
     * GET controllers
     ********************************************/

    public getCurrentSession = async (req, res) => {
        try {
            const session = await SpotifyService.getSession();
            res.status(200).send(session);
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
