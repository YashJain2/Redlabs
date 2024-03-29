import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiHeader = { "content-type": "application/json" };


const baseUrl = "https://adventum.com";
const createRequest = (url: string) => ({ url, headers: baseApiHeader });
export const baseApi = createApi({
 reducerPath: "baseApi",
 baseQuery: fetchBaseQuery({ baseUrl }),
 endpoints: (builder) => ({
   getProjects: builder.query({
     query: () => createRequest(`/projects`),
   })
 }),
});
export const { useGetProjectsQuery } = baseApi;