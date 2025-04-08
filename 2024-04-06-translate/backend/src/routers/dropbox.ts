import { Router } from "express";
import dropboxAuth from "../auth/dropbox";
import { sign } from "jsonwebtoken";
import config from "config";

const dropboxRouter = Router()

dropboxRouter.get('/auth', dropboxAuth.authenticate('dropbox-oauth2'))
dropboxRouter.get('/callback', dropboxAuth.authenticate('dropbox-oauth2', {
    session: false,
    failureRedirect: 'http://localhost:5173/'
}), function (req, res) {
    // create jwt
    const jwt = sign(req.user, config.get('app.jwtSecret'))
    res.redirect(`http://localhost:5173/login-success?jwt=${jwt}`)
})

export default dropboxRouter