import axios from 'axios';
import { getToken } from './hooks/auth';

const api = axios.create({
    baseURL: "https://quiz-api-rest.herokuapp.com",
    responseType: "json"
  });

  api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = "Token "+token;
      console.log(token);
    }
    return config;
  });
  
  export default api;