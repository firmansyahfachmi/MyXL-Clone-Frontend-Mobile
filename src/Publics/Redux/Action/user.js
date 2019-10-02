import Axios from 'axios';

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: Axios.get(`http://192.168.6.145:5000/api/user/081910508754`),
  };
};

export const buyPackage = (number, id) => {
  return {
    type: 'BUY_PACKAGE',
    payload: Axios.post(
      `http://192.168.6.145:5000/api/user/buypackage/${number}`,
      {packageID: id},
    ),
  };
};

export const deletePackage = (number, id) => {
  return {
    type: 'DELETE_PACKAGE',
    payload: Axios.post(
      `http://192.168.6.145:5000/api/user/unsubscribe/${number}`,
      {packageID: id},
    ),
  };
};
