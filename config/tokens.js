import Jwt from "jsonwebtoken";

export const getAccessToken = (user) => {
    return Jwt.sign(
        { email: user.email, },
        process.env.ACCESS_TOKEN,
        { expiresIn: '15m', }
    );
}

export const getRefreshToken = (user) => {
    return Jwt.sign(
        { email: user.email, },
        process.env.REFRESH_TOKEN,
        { expiresIn: '7d', }
    );
}