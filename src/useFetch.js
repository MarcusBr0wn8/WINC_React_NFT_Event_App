import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null); // Corrected the type
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null); // Corrected the type

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Error fetching users data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};
