/* eslint-disable react-hooks/rules-of-hooks */
import {
	useGetTrendingAllQuery,
	useGetTrendingMoviesQuery,
	useGetTrendingPeopleQuery,
	useGetTrendingTVQuery,
} from '../store/api'

type category = 'all' | 'movie' | 'tv' | 'people'

const useTrending = (time: string, category: category) => {
	switch (category) {
		case 'all':
			return useGetTrendingAllQuery(time)
		case 'movie':
			return useGetTrendingMoviesQuery(time)
		case 'tv':
			return useGetTrendingTVQuery(time)
		case 'people':
			return useGetTrendingPeopleQuery(time)

		default:
			return useGetTrendingAllQuery(time)
	}
}

export default useTrending
