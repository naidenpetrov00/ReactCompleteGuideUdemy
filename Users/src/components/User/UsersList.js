import Card from "../UI/Card";
import User from "./User";

function UsersList({ users }) {
  return (
    <Card>
      <ul>
        {users.map((u) => (
          <User userModel={u} key={u.id}/>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
