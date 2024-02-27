import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState; // To make sure we are not sending null if initial local storage has no values
  });
  //useState can also take a function as an argument. Function must be a pure function without arguments
  // and that function should return something which is set as state.
  // This function is only executed at initial render

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  ); // We are doing this because we need to add/remove as the watchedlist is updated

  return [value, setValue];
}
