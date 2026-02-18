import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addUser, deleteUser } from "./userThunks";
import type { User } from "./types";

interface UsersState {
  users: User[];
  filter: string;
  loading: boolean;
  error: string | null;
}
const savedUsers = localStorage.getItem("users");

const initialState: UsersState = {
  users: savedUsers ? JSON.parse(savedUsers) : [],
  filter: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
 extraReducers: (builder) => {
  builder
    // Fetch USER
  .addCase(fetchUsers.pending, (state) => {
  state.loading = true;
})
.addCase(fetchUsers.fulfilled, (state, action) => {
  state.loading = false;
  if (state.users.length === 0) {
  state.users = action.payload;
}

})
.addCase(fetchUsers.rejected, (state) => {
  state.loading = false;
  state.error = "Failed to fetch users";
})


  // Add User
  // Add User
.addCase(addUser.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(addUser.fulfilled, (state, action) => {
  state.loading = false;
  state.users.push(action.payload);

  localStorage.setItem(
    "users",
    JSON.stringify(state.users)
  );
})
.addCase(addUser.rejected, (state, action) => {
  state.loading = false;
  state.error =
    action.error.message || "Failed to add user";
})

    // DELETE USER
    .addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter(
        (user) => user.id !== action.payload
      );
      localStorage.setItem(
        "users",
        JSON.stringify(state.users)
      )
    });
  },
});


export const { setFilter } = userSlice.actions;
export default userSlice.reducer;
