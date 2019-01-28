import Axios from 'axios';
import { SERVER_URL } from 'Constants/app';

export const get = async function (route) {
  try {
    return await Axios.get(`/${SERVER_URL}/${route}`);
  } catch (error) {
    throw error;
  }
};

export const post = async function (route, data) {
  try {
    return await Axios.post(`${SERVER_URL}/${route}`, data);
  } catch (error) {
    throw error;
  }
};

export const put = async function (route, data) {
  try {
    return await Axios.put(`${SERVER_URL}/${route}`, data);
  } catch (error) {
    throw error;
  }
};

export const remove = async function (route) {
  try {
    return await Axios.delete(`${SERVER_URL}/${route}`);
  } catch (error) {
    throw error;
  }
};
