import Axios from 'axios';

export const getPackage = () => {
  return {
    type: 'GET_PACKAGE',
    payload: Axios.get(`http://18.140.51.229:5000/api/packages/`),
  };
};
