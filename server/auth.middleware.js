import jwt from "jsonwebtoken"
import { User } from "./models/user.model.js";

export const AuthorizeJWT = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }

        if (!token) return res.status(401).json({ msg: "Acesso negado" })

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded._id)

        req.user = user;

        next()
    } catch (error) {
        res.status(401).json({ msg: "Acesso negado", error: error.message })
    }
}

export const AuthorizeJWTCookies = async (req, res, next) => {

    const authCookie = req.cookies['auth-cookie'];

    if (authCookie == null) return res.sendStatus(401);

    jwt.verify(authCookie, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);

        req.user = user;
        next();
    })
}