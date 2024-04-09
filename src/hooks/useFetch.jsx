import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setLoading(false);
      setData(result);
    };
    fetchData();
  }, [url]);

  return { data, loading };
}

export default useFetch;
