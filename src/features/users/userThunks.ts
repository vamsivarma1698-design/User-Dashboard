import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "./types";

export const addUser = createAsyncThunk(
  "users/addUser",
  async (newUser: User) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-type": "application/json" }
      }
    );

    

    return response.json();
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
