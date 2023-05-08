import { getAccessToken, getRefreshToken } from "../config/tokens.js";
import { prodCookie, devCookie } from "../config/cookies.js";
import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';
import customerService from "../services/customer.js";
import { compare, hash } from "bcrypt";


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

    await customerService.updateCustomer(user._id, { ...user, refreshToken });
    if (process.env.NODE_ENV === 'production')
        res.cookie('jwt', refreshToken, prodCookie);
    else
        res.cookie('jwt', refreshToken, devCookie);

    res.json({ accessToken });
});


export const refresh = asyncHandler(async (req, res, next) => { });



export const logout = asyncHandler(async (req, res, next) => { });