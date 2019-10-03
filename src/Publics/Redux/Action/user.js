import Axios from 'axios';

export const getUser = number => {
  return {
    type: 'GET_USER',
    payload: Axios.get(`http://18.140.51.229:5000/api/user/${number}`),
  };
};

export const buyPackage = (number, id) => {
  return {
    type: 'BUY_PACKAGE',
    payload: Axios.post(
      `http://18.140.51.229:5000/api/user/buypackage/${number}`,
      {packageID: id},
    ),
  };
};

export const deletePackage = (number, id) => {
  return {
    type: 'DELETE_PACKAGE',
    payload: Axios.post(
      `http://18.140.51.229:5000/api/user/unsubscribe/${number}`,
      {packageID: id},
    ),
  };
};

export const updateUser = (number, data) => {
  return {
    type: 'UPDATE_USER',
    payload: Axios.patch(
      `http://18.140.51.229:5000/api/user/profile/${number}`,
      data,
    ),
  };
};

// export const requestOTP = number => {
//   return {
//     type: 'REQUEST_OTP',
//     payload: Axios.get(
//       `http://18.140.51.229:5000/api/user/otp/login/${number}`,
//     ),
//   };
// };

// export const verifyOTP = (number, data) => {
//   return {
//     type: 'VERIFY_OTP',
//     payload: Axios.post(
//       `http://18.140.51.229:5000/api/user/otp/login/${number}`,
//       data,
//     ),
//   };
// };

export const login = number => {
  return {
    type: 'LOGIN',
    payload: Axios.post(`http://18.140.51.229:5000/api/user/login/${number}`),
  };
};
