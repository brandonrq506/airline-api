import fs from 'fs';
import path from 'path';

import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { fileURLToPath } from 'url';

const fsPromises = fs.promises;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logEvents = async (message, logName) => {
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        //If Directory doesn't exist, create it
        if (!fs.existsSync(path.join(__dirname, '..', 'logs')))
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));

        //Append log item to file
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
    } catch (error) {
        console.error(error);
    }
}

export const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    next();
}