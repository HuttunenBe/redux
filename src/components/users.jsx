// Import useEffect hook to perform side effects in React
import { useEffect } from "react";

// Import useSelector to access state from the Redux store
import { useSelector } from "react-redux";

// Import a custom typed dispatch hook
// This ensures TypeScript knows the types for your Redux actions
import { useAppDispatch } from "../hooks/hooks";

// Import thunk action to fetch users from your API/store
import { fetchUsers } from "../store/userSlice";

// Define the Users component
const Users = () => {
  // Access the 'users' array from the Redux store
  // useSelector subscribes to store updates, so the component re-renders when 'users' changes
  const users = useSelector((state) => state.users.users);

  // Get the dispatch function from Redux
  const dispatch = useAppDispatch();

  // useEffect runs a side effect when the component mounts
  // Here, we fetch the list of users from the API/store
  useEffect(() => {
    dispatch(fetchUsers()); // Dispatch the fetchUsers thunk action
  }, [dispatch]); // Dependency array ensures this runs once on mount

  return (
    <div>
      {/* Display the number of users */}
      <p>{users.length}</p>

      {/* Loop over the users array and display each user's name */}
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
};

// Export the Users component for use in other parts of the app
export default Users;
