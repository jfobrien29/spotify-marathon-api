// import { ExtractJwt, Strategy } from 'passport-jwt';
// import * as passport from 'passport';
// import { UserDb } from '../users/UserDb';
// import { config } from '.';

// const options = {
//     secretOrKey: config.JWT_SECRET,
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
// };

// passport.use('jwt', new Strategy(options, (payload: any, done) => {
//     return new UserDb().findByUsername(payload.username)
//         .then(user => {
//             if (user === null) {
//                 return done(undefined, false, {message: 'The user in the token was not found'});
//             }

//             return done(undefined, {username: user.username});
//         })
//         .catch(err => {
//             return done(err);
//         });
// }));

// passport.initialize();