import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const request = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


request.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Basic ${token}`,
        'X-CSRFTOKEN': `GyFiWXPQrX7RWEVSZElBdfZ9m0FvUWgNZUZO0zysOru4R6JGUJVpYjxoZsThiQxJ`,
      };
      return config;

    } else {
      config.headers = {
        ...config.headers,
        'X-CSRFTOKEN': `GyFiWXPQrX7RWEVSZElBdfZ9m0FvUWgNZUZO0zysOru4R6JGUJVpYjxoZsThiQxJ`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { request };
