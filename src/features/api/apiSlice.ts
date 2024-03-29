import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<any, void>({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    getRandomTodo: builder.query<any, void>({
      query: () => "/todos/random",
      providesTags: ["Todos"],
    }),
  }),
});
export const { useGetTodosQuery, useLazyGetRandomTodoQuery } = apiSlice;
