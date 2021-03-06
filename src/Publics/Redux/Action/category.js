import Axios from 'axios';

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: Axios.get(`http://54.251.188.79:5000/api/category/`),
  };
};

export const getCategoryById = category => {
  return {
    type: 'GET_CATEGORY_BY_ID',
    payload: Axios.get(`http://54.251.188.79:5000/api/category/id/${category}`),
  };
};

export const getSubCategory = category => {
  return {
    type: 'GET_SUBCATEGORY',
    payload: Axios.get(
      `http://54.251.188.79:5000/api/category/sub/${category}`,
    ),
  };
};
