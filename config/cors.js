export const allowedOrigins = [
    'http://localhost:3500',
    'http://127.0.0.1:5000'
];

export const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin)
            callback(null, true);
        else
            callback(new Error('Origin not allowed by CORS'));

    },
    optionsSuccessStatus: 200,
};

