import axios from 'axios';

export const localHost = '127.0.0.1';

export const port = '3001';

export const localHostWithPort = `${localHost}:${port}`;

export const api = axios.create({
  baseURL: `http://${localHostWithPort}`
});
