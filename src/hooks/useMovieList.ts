import { useEffect, useState } from 'react'
import { IResult } from '../interfaces/IUpcomingMovie'
import { useLazyGetDiscoverMoviesQuery, useLazyGetSearchedMoviesQuery } from '../store/api'

const useMovieList = (queryString: string) => {
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [movieList, setMovieList] = useState<IResult[]>([])
	const [getDiscoverData, { data: discoverData, isLoading }] = useLazyGetDiscoverMoviesQuery()
	const [getSearchData, { data: searchData }] = useLazyGetSearchedMoviesQuery()

	useEffect(() => {
		if (queryString.length) getSearchData({ query: queryString, page })
		else getDiscoverData({ page })
	}, [getDiscoverData, getSearchData, page, queryString])

	useEffect(() => {
		if (queryString.length && searchData) {
			setMovieList(prev => [...prev, ...searchData.results])
			setTotalPages(searchData.total_pages)
		}
		if (!queryString.length && discoverData) {
			setMovieList(prev => [...prev, ...discoverData.results])
			setTotalPages(discoverData.total_pages)
		}
	}, [discoverData, queryString, searchData])

	return { movieList, setMovieList, isLoading, page, totalPages, setPage }
}

export default useMovieList
