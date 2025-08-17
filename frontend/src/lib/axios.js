import axios from 'axios';

export const  axiosInstance = axios.create({
  baseURL: 'https://chatwebappupload.onrender.com/api',
  withCredentials: true,
});
