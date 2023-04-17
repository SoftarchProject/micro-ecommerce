import axios from 'axios';

// ----------------------------------------------------------------------

const axiosItemsInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_ITEMS_API_URL,
});

const axiosHistoryInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_HISTORY_API_URL,
  });

axiosItemsInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

axiosHistoryInstance.interceptors.response.use(
    (response) => response,
    (error) =>
      Promise.reject((error.response && error.response.data) || 'Something went wrong')
  );

export default { axiosItemsInstance, axiosHistoryInstance};