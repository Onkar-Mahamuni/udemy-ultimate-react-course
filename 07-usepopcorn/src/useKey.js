import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      // We have to close the movie when the user press the escape key
      document.addEventListener("keydown", callback); // This is DOM Manipulation
      // As we do such outside events in useEffects, react team calls it as an Escape Hatch
      // We specifically named this function so it can be reused in cleanup

      return function () {
        document.removeEventListener("keydown", callback);
      };
      // We also need to remove the event listener in cleaup to avoid adding a new event lister everytime we open a movie
      // and not to keep all of them open at a time
      // This might become a big memory problem in a big app
    },
    [key, action]
  );
}
