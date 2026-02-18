import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../features/users/userThunks";
import type { RootState, AppDispatch } from "../app/store";
import { List, Item, DeleteButton } from "./UserList.styles"

export const UserList = () => {
  const dispatch = useDispatch<AppDispatch>(); // ✅ ADD THIS


  const { users, filter, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(filter.toLowerCase())
);
  
  return (
    <List>
      {filteredUsers.map((user) => (
        <Item key={user.id}>
          {user.name}
          <DeleteButton
  onClick={() => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );

    if (confirmed) {
      dispatch(deleteUser(user.id));
    }
  }}
>
  Delete
</DeleteButton>

        </Item>
      ))}
    </List>
  );
};
