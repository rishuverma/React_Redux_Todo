import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://dummyjson.com" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<any, void>({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
  }),
});
export const { useGetTodosQuery } = apiSlice;
