import { allowedOrigins } from "../config/cors.js";
/* 
Middleware:
If the origin who is sending the request is in our allowedOrigins list
Then set the header in the response to true, as this is required by CORS.

We obviously need to import this middleware in our server.js file.
Right before the cors middleware.
*/
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin))
        res.setHeader('Access-Control-Allow-Origin', true);
    next();
}

export default credentials;