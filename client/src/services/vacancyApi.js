import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vacancyApi = createApi({
  reducerPath: "vacancyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    getVacancy: build.query({
      query: () => `api/vacancy`,
    }),
    getVacancyById: build.query({
      query: (id) => `api/vacancy/${id ? id : ""}`,
    }),
  }),
});

export const { useGetVacancyQuery, useGetVacancyByIdQuery } = vacancyApi;
