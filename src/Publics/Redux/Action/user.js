import Axios from 'axios';

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: Axios.get(`http://192.168.6.145:5000/api/user/081910508754`),
  };
};
