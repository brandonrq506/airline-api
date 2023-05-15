import createError from "../helpers/errorHelpers.js";

const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        //We should on the assumption that verifyJWT comes before this.
        if (!req?.roles)
            return next(createError(500, 'No roles found'));

        const rolesArray = [...allowedRoles];
        console.log(rolesArray);
        console.log(req.roles);
        const result = req.roles.some(role => rolesArray.includes(role));

        if (!result)
            return next(createError(401, 'Unauthorized'));

        console.log('Successfully passed role verification')
        next();
    };
};

export default verifyRoles;