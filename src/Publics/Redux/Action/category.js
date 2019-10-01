import Axios from 'axios';

export const getCategory = category => {
  return {
    type: 'GET_CATEGORY',
    payload: Axios.get(`http://192.168.6.145:5000/api/category/${category}`),
  };
};
