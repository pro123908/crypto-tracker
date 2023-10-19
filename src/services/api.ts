import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.github.com",
});

// const baseQueryWithInterceptor: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions)
//   if (result.error && result.error.status === 401) {
//     console.log('Unauthorized')
//   }
//   return result
// }

export const api = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
