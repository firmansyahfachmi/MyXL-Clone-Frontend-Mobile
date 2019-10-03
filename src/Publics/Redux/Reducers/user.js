const initialState = {
  currentUser: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        currentUser: action.payload.data.response,
      };
    case 'BUY_PACKAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'BUY_PACKAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'BUY_PACKAGE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };

    case 'DELETE_PACKAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'DELETE_PACKAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'DELETE_PACKAGE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    case 'UPDATE_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'UPDATE_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'UPDATE_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    case 'REQUEST_OTP_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'REQUEST_OTP_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'REQUEST_OTP_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    case 'VERIFY_OTP_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'VERIFY_OTP_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'VERIFY_OTP_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    default:
      return state;
  }
};

export default user;
