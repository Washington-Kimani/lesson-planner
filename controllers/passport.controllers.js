import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import { comparePassword, findUserByEmail, findUserById } from '../services/login.services.js';

export const initPassportLocal = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, async (req, email, password, done) => {
        try {
            let user = await findUserByEmail(email);

            if (!user) {
                return done(null, false, req.flash("errors", `This user email "${email}" doesn't exist`));
            }

            let isMatch = await comparePassword(password, user);

            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, req.flash("errors", "The password that you've entered is incorrect"));
            }
        } catch (error) {
            console.error('Error in LocalStrategy:', error);
            return done(error);
        }
    }));
};

passport.serializeUser((user, done) => {
    done(null, user.id); // Serialize user id to session
});

passport.deserializeUser((id, done) => {
    findUserById(id)
        .then((user) => done(null, user)) // Deserialize user from session
        .catch((error) => done(error, null));
});
