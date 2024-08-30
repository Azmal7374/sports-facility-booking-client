import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookingsByUser: builder.query({
      query: () => ({
        url: "/booking/user",
        method: "GET",
      }),
      providesTags: ["bookingsByUser"],
    }),

    cancelBooking: builder.mutation({
      query: (_id) => ({
        url: `/booking/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bookingsByUser"],
    }),

    getAllBookings: builder.query({
      query: () => ({
        url: "/booking",
        method: "GET",
      }),
      providesTags: ["getAllBookings"],
    }),
  }),
});

export const {
  useGetBookingsByUserQuery,
  useCancelBookingMutation,
  useGetAllBookingsQuery,
} = authApi;