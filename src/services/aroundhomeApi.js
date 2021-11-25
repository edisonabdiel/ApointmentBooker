import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createRequest = (url) => ({ url, headers: { 'Content-Type': 'application/json' } });

const baseURL = 'http://localhost:3000';
// Endpoints calling the API, takes params coming from the redux hook
export const aroundhomeApi = createApi({
  reducerPath: 'aroundhomeApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getTimeslots: builder.query({
      query: () => createRequest('/timeslots'),
    })
  }),
});

//Destructure the endpoints to be later used as redux hooks
export const { useGetTimeslotsQuery } = aroundhomeApi;
