import axios from 'axios';

const url = 'http://localhost:8000';
const exchangeUrl = 'https://economia.awesomeapi.com.br/json'

const axiosInstance = axios.create({
  baseURL: url,
});

const exchangeInstance = axios.create({
    baseURL: exchangeUrl,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  loadCurrency() {
    return exchangeInstance.get('/available/uniq')
  },
  convertCurrency(from,to) {
    return exchangeInstance.get(`/last/${from}-${to}`)
  }
  
};