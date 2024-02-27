import { useEffect, useState } from "react";
const KEY = "217ef51b";

export function useMovies(query) {
  //use default exports for components and named exports for custom hooks
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      //   callback?.();

      // AbortController is a browser functionality we use to abort the requests
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          // Setting the isLoading state to true before starting to fetch the data
          setIsLoading(true);
          setError("");

          //We connected the abort controller to our query by passing the signal as second argument to the fetch function
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);

          // Error should be set as empty if no error occurs
          setError("");
        } catch (err) {
          // The aborted request throws an error from fetch, hence we want to ignore that
          // This can be done as below
          if (err.name !== "AbortError") {
            setError(err.message);
            console.log(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (!query.length || query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();

      // And in cleanup function, we abort the controller
      return function () {
        // Cencells the ongoing request
        controller.abort();
      };
    },
    [query]
    // This will fetch the data whenever the query state changes
  );

  return { movies, isLoading, error };
}
