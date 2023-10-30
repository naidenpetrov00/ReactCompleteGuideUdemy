import { Link, Outlet, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const eventParam = useParams();
  const id = eventParam.id;

  const { data, isPending, isError } = useQuery({
    queryKey: ["event", { search: eventParam.id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ id, signal });
    },
  });

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {isPending && <LoadingIndicator />}
        {isError && <ErrorBlock title="Could not fetch details" />}
        {data && (
          <>
            <header>
              <h1>EVENT TITLE</h1>
              <nav>
                <button>Delete</button>
                <Link to="edit">Edit</Link>
              </nav>
            </header>
            <div id="event-details-content">
              <img src={`http://localhost:3000/${data.image}`} alt="" />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">EVENT LOCATION</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>DATE @ TIME</time>
                </div>
                <p id="event-details-description">EVENT DESCRIPTION</p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
