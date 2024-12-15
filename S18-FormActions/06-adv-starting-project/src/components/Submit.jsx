import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";

export const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </p>
  );
};
