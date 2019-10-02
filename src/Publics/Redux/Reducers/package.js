const initialState = {
  packageData: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const packages = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PACKAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_PACKAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_PACKAGE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        packageData: action.payload.data.response,
      };

    default:
      return state;
  }
};

export default packages;
