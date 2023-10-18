import EventItem from "../components/EventItem";

const EVENTS = [
  {
    id: "e1",
    image: "photo",
    date: "18.10.2023",
    description: "must do",
    title: "carwash",
  },
  {
    id: "e2",
    image: "photo",
    date: "18.10.2023",
    description: "must do",
    title: "shop",
  },
  {
    id: "e3",
    image: "photo",
    date: "18.10.2023",
    description: "must do",
    title: "cinema",
  },
];

const EventsPage = () => {
  return (
    <ul>
      {EVENTS.map((e) => (
        <EventItem key={e.id} event={e} />
      ))}
    </ul>
  );
};

export default EventsPage;
