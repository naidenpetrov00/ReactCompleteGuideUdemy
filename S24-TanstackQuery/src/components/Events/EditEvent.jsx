import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";

import { fetchEvent, updateEvent } from "../../util/http.js";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const params = useParams();

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      await queryClient.cancelQueries({
        queryKey: ["events", { search: params.id }],
      });
      const previousEvent = queryClient.getQueryData([
        "events",
        { search: params.id },
      ]);
      queryClient.setQueryData(["events", { search: params.id }], data.event);

      return { previousEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(
        ["events", { search: params.id }],
        context.previousEvent
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events"]);
    },
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { search: params.id }],
    queryFn: ({ signal }) => {
      return fetchEvent({ id: params.id, signal });
    },
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      {isPending && <LoadingIndicator />}
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
