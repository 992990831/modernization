import axios from 'axios';

export const Get_Order_Url = '/order';

export const Request = axios.create({
    baseURL: 'http://localhost:5000/',
    responseType: 'json'
});


// Add a request interceptor
Request.interceptors.request.use(function (config) {
    // Do something before request is sent
    debugger;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    debugger;
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});