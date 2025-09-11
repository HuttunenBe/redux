import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { fetchUsers } from "../store/userSlice";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <p>{users.length}</p>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Users;
