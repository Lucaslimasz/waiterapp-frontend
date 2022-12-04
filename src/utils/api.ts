import axios from 'axios';

export const localHost = 'localhost';

export const port = '3001';

export const localHostWithPort = `${localHost}:${port}`;

export const api = axios.create({
  baseURL: `http://${localHostWithPort}`
});
