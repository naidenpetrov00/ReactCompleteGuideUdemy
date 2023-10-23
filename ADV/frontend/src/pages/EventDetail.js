import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Colud not fetch details for selected events" },
      { status: 500 }
    );
  }

  return response;
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
