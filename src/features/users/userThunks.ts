import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "./types";

export const addUser = createAsyncThunk<
  User,                    // return type
  Omit<User, "id">         // argument type (without id)
>(
  "users/addUser",
  async (newUser) => {
    await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-type": "application/json" }
      }
    );

    return {
      ...newUser,
      id: Date.now(), // generate id here
    };
  }
);


export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: number) => {
    await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "DELETE"
      }
    );

    return id;
  }
);

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.json();
  }
);

export const updateUser = createAsyncThunk<
  User,
  { id: number; name: string }
>(
  "users/updateUser",
  async ({ id, name }) => {
    await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ name }),
        headers: { "Content-type": "application/json" }
      }
    );

    return { id, name };
  }
);
