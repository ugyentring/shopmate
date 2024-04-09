import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchData = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setLoading(false);
        setData(result);
      };
      fetchData();
    } catch (error) {
      console.log("Unable to fetch data", error);
    }
  }, [url]);

  return { data, loading };
}

export default useFetch;
