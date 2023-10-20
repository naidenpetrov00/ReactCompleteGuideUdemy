import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Something went wrong!";
  
  return (
    <PageContent title="">
      <p></p>
    </PageContent>
  );
};

export default ErrorPage;
