import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import { Fragment, Suspense } from "react";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <Fragment>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </Fragment>
  );
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId},`,
    { method: "DELETE" }
  );

  if (!response.ok) {
    throw json({ message: "Colud not delete event" }, { status: 500 });
  }

  return redirect("/events");
}

async function loadEvent(eventId) {
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
    throw json(
      { message: "Colud not fetch details for selected events" },
      { status: 500 }
    );
  }

  const data = await response.json();
  return data.events;
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
      status: 500,
    });
  } else {
    const data = await response.json();
    return data.events;
  }
}
