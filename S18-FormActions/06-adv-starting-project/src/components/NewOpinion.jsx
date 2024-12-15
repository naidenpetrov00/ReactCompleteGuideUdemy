import { useActionState } from "react";
import { use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { Submit } from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  const newOpinionAction = async (prevState, formState) => {
    const userName = formState.get("userName");
    const title = formState.get("title");
    const body = formState.get("body");

    let errors = [];
    if (userName.lentgth < 8) {
      errors.push("Username should be > 8");
    }
    if (!title || title.lentgth > 50) {
      errors.push("title is empty");
    }
    if (!body || body.lentgth > 300) {
      errors.push("body is empty");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }
    await addOpinion({ userName, title, body });

    return { errors: null };
  };
  const [formState, formAction, pending] = useActionState(newOpinionAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>

        {formState.errors?.map((error) => (
          <li key={error}>{error}</li>
        ))}

        <Submit />
      </form>
    </div>
  );
}
