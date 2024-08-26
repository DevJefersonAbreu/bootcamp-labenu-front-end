import useRequestData from './useRequestData';
import { BASE_URL } from '../constants/constants';

const useGetFilms = () => {
  return useRequestData(`${BASE_URL}/films`);
};

export default useGetFilms;
