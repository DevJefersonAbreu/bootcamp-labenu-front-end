import useRequestData from './useRequestData';
import { BASE_URL } from '../constants/constants';

const useGetStarShips = () => {
  return useRequestData(`${BASE_URL}/starships`);
};

export default useGetStarShips;
