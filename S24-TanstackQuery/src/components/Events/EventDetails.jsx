import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import { deleteEvent, fetchEvent } from "../../util/http.js";

import Header from "../Header.jsx";
import Modal from "../UI/Modal.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const eventParam = useParams();
  const id = eventParam.id;

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      navigate("/events");
    },
  });

  const { data, isPending, isError } = useQuery({
    queryKey: ["events", { search: id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ id, signal });
    },
  });

  const startDeleteHandler = () => {
    setIsDeleting(true);
  };
  const stopDeleteHandler = () => {
    setIsDeleting(false);
  };
  const deleteEventHandler = () => {
    mutate({ id });
  };

  return (
    <>
      {isDeleting && (
        <Modal onClose={stopDeleteHandler}>
          <h2>Are you sure?</h2>
          <div className="form-actions">
            <button onClick={stopDeleteHandler} className="button-text">
              Cancel
            </button>
            <button onClick={deleteEventHandler} className="button">
              Delete
            </button>
          </div>
        </Modal>
      )}
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
              <h1>{data.title}</h1>
              <nav>
                <button onClick={startDeleteHandler}>Delete</button>
                <Link to="edit">Edit</Link>
              </nav>
            </header>
            <div id="event-details-content">
              <img
                src={`http://localhost:3000/${data.image}`}
                alt={data.image}
              />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">{data.location}</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>{data.date}</time>
                </div>
                <p id="event-details-description">{data.description}</p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
