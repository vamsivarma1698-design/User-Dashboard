import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser, updateUser } from "../features/users/userThunks";
import type { RootState, AppDispatch } from "../app/store";
import { List, Item, DeleteButton, EditButton, SaveButton, EditInput, ButtonGroup, LoadingText, ErrorText } from "./UserList.styles"

export const UserList = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState("");


  const { users, filter, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <LoadingText>Looaaaddddiiiiing...</LoadingText>;
  if (error) return <ErrorText>{error}</ErrorText>;

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(filter.toLowerCase())
);
  
  return (
  <List>
    {filteredUsers.map((user) => (
      <Item key={user.id}>
        {editingId === user.id ? (
          <>
            <EditInput
             value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
             />

            <SaveButton
              disabled={!editedName.trim()}
              onClick={() => {
               dispatch(updateUser({ id: user.id, name: editedName }));
               setEditingId(null);
              }}
             >
               Save
            </SaveButton>

           </>
        ) : (
          <>
           <span> {user.name} </span>
           <ButtonGroup>
            <EditButton
              onClick={() => {
                setEditingId(user.id);
                setEditedName(user.name);
              }}
            >
              Edit
            </EditButton>
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
        </ButtonGroup>
        </>
        )}
      </Item>
    ))}
  </List>
);
}

