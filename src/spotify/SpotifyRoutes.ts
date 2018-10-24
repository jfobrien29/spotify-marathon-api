import { config } from '../config';
import SpotifyController from './SpotifyController';

export = (app) => {
    const endpoint = config.API_BASE;

    app.get(endpoint, SpotifyController.getCurrentSession);
    app.get(endpoint + 'data', SpotifyController.getCurrentSessionData);
    // app.get(endpoint + 'lastPlayed', SpotifyController.getLastPlayed); // Need to update scope
};