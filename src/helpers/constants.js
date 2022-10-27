import getenv from './getenv.js';
import os from 'os';

export const FILE_UPLOADS_BASEPATH = 'public/uploads';

export const PORT = getenv('PORT');
export const PROTOCOL = PORT == 443 ? 'https' : 'http';
export const HOSTNAME = os.hostname();
export const BASEURL = `${PROTOCOL}://${HOSTNAME}:${
  PORT == 443 || PORT == 80 ? '' : PORT
}`;
