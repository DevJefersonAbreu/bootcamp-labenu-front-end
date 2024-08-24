import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequestData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useRequestData;
