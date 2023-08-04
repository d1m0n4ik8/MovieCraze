import { useEffect, useState } from 'react'
import { IMovie } from '../interfaces/IMovie'
import { ITv } from '../interfaces/ITv'
import { useLazyGetDiscoverQuery, useLazyGetSearchedQuery } from '../store/api'
import { movieTvType } from '../store/api.types'

const useMediaList = (queryString: string, category: movieTvType, page: number) => {
	const [totalPages, setTotalPages] = useState(1)
	const [movieList, setMovieList] = useState<(IMovie | ITv)[]>([])
	const [getDiscoverData, { data: discoverData, isLoading }] = useLazyGetDiscoverQuery()
	const [getSearchData, { data: searchData }] = useLazyGetSearchedQuery()

	useEffect(() => {
		if (queryString.length) {
			getSearchData({
				category,
				params: {
					query: queryString,
					page,
				},
			})
		} else {
			getDiscoverData({
				category,
				params: {
					page,
				},
			})
		}
	}, [getDiscoverData, getSearchData, page, queryString, category])

	useEffect(() => {
		if (searchData) {
			setMovieList(prev => [...prev, ...searchData.results])
			setTotalPages(searchData.total_pages)
		} else if (discoverData) {
			setMovieList(prev => [...prev, ...discoverData.results])
			setTotalPages(discoverData.total_pages)
		}
	}, [discoverData, searchData])

	return { movieList, setMovieList, isLoading, totalPages }
}

export default useMediaList
