import {useState, useEffect} from 'react';

const useFetch = (url: string) => {

  const [data, setData] : any= useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();

    //console.log(blogs)
      fetch(url, {signal: abortCont.signal})
        .then(res => {
          if(!res.ok) {
            throw Error("Could not fetch data for that resource");
          }
          return res.json()
        })
        .then((data) => {
          //console.log(data);
          setError(null);
          setData(data);
          setIsLoading(false);
        }).catch((e) => {
          if(e.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setError(e.message);
            setIsLoading(false);
          }
        })

    return () => abortCont.abort();
  }, [url]);

  return {data, isLoading, error};
}

export default useFetch;