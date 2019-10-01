import Axios from 'axios';

export const getPackage = () => {
  return {
    type: 'GET_PACKAGE',
    payload: Axios.get(`http://192.168.6.145:5000/api/packages/`),
  };
};
