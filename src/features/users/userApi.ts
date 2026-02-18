import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "./types";
import type { deleteUser } from "./userThunks";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users"
    }),
    deleteUser: builder.mutation<void, number>({
    query: (id) => ({
      url: `/users/${id}`,
      method: "DELETE"
    }),
    }),
  })
});

export const { useGetUsersQuery } = userApi;
