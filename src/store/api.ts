import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDiscoverMovies } from '../interfaces/IDiscoverMovies'
import { IMovieCredits } from '../interfaces/IMovieCredits'
import { IMovieDetails } from '../interfaces/IMovieDetails'
import { IMovieVideo } from '../interfaces/IMovieVideo'
import { ITrendingMovies } from '../interfaces/ITrendingMovies'
import { ITrendingPeoples } from '../interfaces/ITrendingPeoples'
import { ITrendingTV } from '../interfaces/ITrendingTV'
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
		getMovieVideo: builder.query<IMovieVideo, number>({
			query: movieId => `movie/${movieId}/videos`,
		}),
		getTrendingAll: builder.query<ITrendingMovies, string>({
			query: time => `trending/all/${time}`,
		}),
		getTrendingMovies: builder.query<ITrendingMovies, string>({
			query: time => `trending/movie/${time}`,
		}),
		getTrendingTV: builder.query<ITrendingTV, string>({
			query: time => `trending/tv/${time}`,
		}),
		getTrendingPeople: builder.query<ITrendingPeoples, string>({
			query: time => `trending/person/${time}`,
		}),
		getDiscoverMovies: builder.query<IDiscoverMovies, object>({
			query: params => ({ url: 'discover/movie', params }),
		}),
		getSearchedMovies: builder.query<IDiscoverMovies, object>({
			query: params => ({ url: 'search/movie', params }),
		}),
		getMovieDetails: builder.query<IMovieDetails, string>({
			query: movieId => `movie/${movieId}`,
		}),
		getMovieCredits: builder.query<IMovieCredits, string>({
			query: movieId => `movie/${movieId}/credits`,
		}),
	}),
})

export const {
	useGetMovieListQuery,
	useGetMovieVideoQuery,
	useGetTrendingMoviesQuery,
	useGetTrendingTVQuery,
	useGetTrendingAllQuery,
	useGetTrendingPeopleQuery,
	useLazyGetDiscoverMoviesQuery,
	useLazyGetSearchedMoviesQuery,
	useGetMovieDetailsQuery,
	useGetMovieCreditsQuery,
} = movieApi
