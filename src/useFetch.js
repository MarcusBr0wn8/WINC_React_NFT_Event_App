// import { useEffect, useState } from "react";

// //Fetch for EventsPage
// export const useFetch = (url) => {
//   const [data, setData] = useState(null); // Corrected the type
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null); // Corrected the type

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(url)
//         .then((res) => {
//           if (!res.ok) {
//             throw Error("Error fetching users data");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setData(data);
//           setIsPending(false);
//           setError(null);
//         })
//         .catch((err) => {
//           setIsPending(false);
//           setError(err.message);
//         });
//     }, 1000);
//   }, [url]);

//   return { data, isPending, error };
// };

import { useEffect, useState } from "react";

//Fetch function for EventsPage
export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setData([]);
    setIsLoading(true);
    setError("");
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        if (!ignore) {
          setData(data);
          setIsLoading(false);
        }
      } else {
        setError(`Something went wrong: ${response.statusText} `);
        setIsLoading(false);
        throw Error(`Something went wrong: ${response.statusText} `);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  return { data, isLoading, error };
};
