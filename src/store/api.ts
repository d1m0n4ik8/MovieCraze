import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUpcomingMovie } from '../interfaces/IUpcomingMovie'
export const getOriginalImagePath = (imagePath: string) => `https://image.tmdb.org/t/p/original/${imagePath}`
export const getWidth500ImagePath = (imagePath: string) => `https://image.tmdb.org/t/p/w500/${imagePath}`

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3/',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWVlYTE0YzM5Y2FiZjBlNzk5OTk4NThiZGVmYzg3NiIsInN1YiI6IjY0YTA0NDIxYzM5MGM1MDBjYWZmOTk2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y60xIYli7UsGFg1q-u36MHNTnyp74rbwvk0ykwcc_lw',
		},
	}),
	endpoints: builder => ({
		getMovieList: builder.query<IUpcomingMovie, number>({
			query: page => `movie/upcoming?language=en-US&page=${page}`,
		}),
	}),
})

export const { useGetMovieListQuery } = movieApi
