import { useSelector } from "react-redux"; // This hook lets us read data from the Redux store.


// Functional component called `Products`.
const Users = () => {
    // Using the `useSelector` hook to access the Redux store.
    // Here, we are getting the `products` array from the state.
    // The state has a `products` slice, and inside it, there's a `products` property.
    const users = useSelector((state) => state.users.ursers);

    console.log(users);

    return <div>Products will be here</div>;
};

// Exporting the `Products` component so it can be used in other parts of the app.
export default Users;
