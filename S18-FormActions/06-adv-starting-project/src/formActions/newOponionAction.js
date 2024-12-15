export const newOpinionAction = async(prevState, formState,addOpinion) => {
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

  await addOption({userName,title,body});

  return { errors: null };
};
