import Jwt from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader)
        return res.status(401).json({ message: "No Authorization header" });

    const token = authHeader.split(' ')[1];
    Jwt.verify(token, process.env.ACCESS_TOKEN,
        (err, user) => {
            if (err)
                return res.status(403).json({ message: "Invalid token" });

            req.user = user.username;
            next();
        }
    );
}

export default verifyJWT;