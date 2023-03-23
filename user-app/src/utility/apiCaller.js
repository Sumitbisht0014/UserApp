import axios from 'axios';
import {API_URL} from '../config/constants';


const http = axios.create({
    baseURL: API_URL,
    headers: {
        "ApiKey": "yourappAPIKEY"
    }
  });

  const get = async (url, config = {}) => {
    const response = await http.get(url, config);
    return response.data;
  };
  
  const post = async (url, data, config = {}) => {
    const response = await http.post(url, data, config);
    return response.data;
  };

  const put = async (url, data, config = {}) => {
    const response = await http.put(url, data, config);
    return response.data;
  };

  const del = async (url, data, config = {}) => {
    const response = await http.delete(url, data, config);
    return response.data;
  };
  
  export default {
    get,
    post,
    del,
    put,
  };  