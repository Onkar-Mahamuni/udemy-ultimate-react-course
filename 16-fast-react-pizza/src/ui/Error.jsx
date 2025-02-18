import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  // This is the hook used for getting error info

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>

      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
