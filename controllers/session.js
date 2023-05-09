import { getAccessToken, getRefreshToken } from "../config/tokens.js";
import { prodCookie, devCookie } from "../config/cookies.js";
import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';
import customerService from "../services/customer.js";
import { compare, hash } from "bcrypt";
import Jwt from "jsonwebtoken";


export const register = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return next(createError(400, 'Email and password are required'));

    const existingUser = await customerService.getCustomerByEmail(email);
    if (existingUser)
        return next(createError(409, 'User already exists'));

    const hashedPassword = await hash(password, 14);
    const newUser = await customerService.addCustomer({ ...req.body, password: hashedPassword });
    res.status(201).json({ message: `New user ${newUser.email} created!` });

});

export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return next(createError(400, 'Email and password are required'));

    const user = await customerService.getCustomerByEmail(email);
    if (!user)
        return next(createError(404, 'User not found'));

    const isMatch = await compare(password, user.password);
    if (!isMatch)
        return next(createError(400, 'Invalid credentials'));

    const accessToken = getAccessToken(user);
    const refreshToken = getRefreshToken(user);

    const updatedUserData = { ...user.toObject(), refreshToken }
    await customerService.updateCustomer(user._id, updatedUserData);

    if (process.env.NODE_ENV === 'production')
        res.cookie('jwt', refreshToken, prodCookie);
    else
        res.cookie('jwt', refreshToken, devCookie);

    res.json({ accessToken });
});


export const refresh = asyncHandler(async (req, res, next) => {
    const cookies = req.cookies

    if (!cookies?.jwt)
        return next(createError(401, 'Unauthorized'));

    const foundUser = await customerService.getCustomerByToken(cookies.jwt);
    if (!foundUser)
        return next(createError(403, 'Forbidden'));

    Jwt.verify(
        cookies.jwt,
        process.env.REFRESH_TOKEN,
        async (err, decoded) => {
            if (err)
                return next(createError(403, 'Forbidden'));

            const accessToken = getAccessToken(foundUser);
            res.json({ accessToken });
        }
    );
});



export const logout = asyncHandler(async (req, res, next) => {
    //To do: On cliente delete access Token
    const cookies = req.cookies

    if (!cookies?.jwt)
        return res.sendStatus(204);

    const foundUser = await customerService.getCustomerByToken(cookies.jwt);
    if (!foundUser)
        return res.sendStatus(204);

    const updatedUserData = { ...foundUser.toObject(), refreshToken: '' }
    await customerService.updateCustomer(foundUser._id, updatedUserData);

    if (process.env.NODE_ENV === 'production')
        res.clearCookie('jwt', prodCookie);
    else
        res.clearCookie('jwt', devCookie);

    res.sendStatus(204);
});