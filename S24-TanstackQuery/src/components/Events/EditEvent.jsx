import { useQuery } from "@tanstack/react-query";
import {
  Link,
  redirect,
  useNavigate,
  useParams,
  useSubmit,
} from "react-router-dom";

import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const submit = useSubmit();

  const { data, isError, error } = useQuery({
    queryKey: ["events", { search: params.id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ id: params.id, signal });
    },
  });

  function handleSubmit(formData) {
    submit(formData, { method: "PUT" });
  }

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      {isError && (
        <ErrorBlock
          title="Could not fetch event Details"
          message={error.message || "Failed to load event"}
        />
      )}
      {data && (
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
      )}
    </Modal>
  );
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", { search: params.id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ id: params.id, signal });
    },
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);

  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(["events"]);

  return redirect("../");
}
