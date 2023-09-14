function User({ userModel }) {
  return (
    <li>
      <p>
        {userModel.username}: {userModel.age}
      </p>
    </li>
  );
}

export default User;
