import useRequestData from './useRequestData';
import { BASE_URL } from '../constants/constants';

const useGetCharacters = () => {
  return useRequestData(`${BASE_URL}/people`);
};

export default useGetCharacters;
