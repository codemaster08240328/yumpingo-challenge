import { useState, useEffect } from 'react';

const useAsyncFetch = (fn) => {
  const [isFetching, setisFetching] = useState(true);
  const [data, setdata] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fn()
      .then(res => {
        setdata(res);
        setisFetching(false);
      })
      .catch(err => {
        seterror(err);
        setisFetching(false);
      });
  }, [fn]);

  return {
    isFetching,
    data,
    error
  }
}

export default useAsyncFetch;