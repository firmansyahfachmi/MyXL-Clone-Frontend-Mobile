const initialState = {
  categoryData: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_CATEGORY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        categoryData: action.payload.data.response,
      };
    case 'GET_CATEGORY_BY_ID_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_CATEGORY_BY_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_CATEGORY_BY_ID_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        categoryData: action.payload.data.response,
      };
    default:
      return state;
  }
};

export default category;
