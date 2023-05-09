import Jwt from "jsonwebtoken";
import createError from "../helpers/errorHelpers.js";

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader)
        return next(createError(401, 'No Authorization header'));

    const token = authHeader.split(' ')[1];
    Jwt.verify(
        token,
        process.env.ACCESS_TOKEN,
        (err, user) => {
            if (err)
                return next(createError(403, 'Invalid token'));

            req.email = user.email;
            req.roles = user.roles;
            next();
        }
    );
}

export default verifyJWT;