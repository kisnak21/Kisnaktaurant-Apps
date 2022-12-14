import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG.BASE_URL}list`,
  REVIEW: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  ADDREVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
