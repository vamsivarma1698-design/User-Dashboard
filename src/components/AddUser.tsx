import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/users/userThunks";
import type { AppDispatch, RootState } from "../app/store";
import { Form, Input, Button, ErrorText } from "./AddUser.styles";

export const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      addUser({
        id: Date.now(),
        name
      })
    );

    setName("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={name}
          placeholder="Enter user name"
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </Button>
      </Form>

      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};
