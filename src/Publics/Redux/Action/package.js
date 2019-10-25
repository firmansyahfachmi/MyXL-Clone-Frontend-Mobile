import Axios from 'axios';

export const getPackage = () => {
  return {
    type: 'GET_PACKAGE',
    payload: Axios.get(`http://54.251.188.79:5000/api/packages/`),
  };
};
