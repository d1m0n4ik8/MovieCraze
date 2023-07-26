import { FC, useEffect, useState } from 'react'
import { IResult } from '../../../interfaces/IUpcomingMovie'
import { getWidth500ImagePath, useLazyGetDiscoverMoviesQuery, useLazyGetSearchedMoviesQuery } from '../../../store/api'
import Card from '../../ui/card/Card'
import PageHeader from '../../ui/pageHeader/PageHeader'
import Search from '../../ui/search/Search'

const Movies: FC = () => {
	const [page, setPage] = useState(1)
	const [queryString, setQueryString] = useState('')
	const [movieList, setMovieList] = useState<IResult[]>([])
	const [getDiscoverData, { data: discoverData, isLoading }] = useLazyGetDiscoverMoviesQuery()
	const [getSearchData, { data: searchData }] = useLazyGetSearchedMoviesQuery()

	useEffect(() => {
		if (queryString.length) getSearchData({ query: queryString, page })
		else getDiscoverData({ page })
	}, [getDiscoverData, getSearchData, page, queryString])

	useEffect(() => {
		if (queryString.length) {
			searchData && setMovieList(prev => [...prev, ...searchData.results])
		} else {
			discoverData && setMovieList(prev => [...prev, ...discoverData.results])
		}
	}, [discoverData, queryString, searchData])

	const loadMoreHandler = () => {
		setPage(prev => prev + 1)
	}

	const searchHandler = (searchString: string) => {
		if (searchString.trim().length) {
			setMovieList([])
			setPage(1)
			setQueryString(searchString.trim())
		}
	}

	return (
		<div className='flex flex-col items-center'>
			<PageHeader pageTitle='Movies' />
			<Search searchHandler={searchHandler} />
			<div className='grid grid-cols-6 gap-4 py-8'>
				{!isLoading &&
					movieList.map(item => (
						<Card
							key={item.id}
							id={item.id}
							mediaType='movie'
							imageUrl={getWidth500ImagePath(item.poster_path)}
							title={item.title}
						/>
					))}
			</div>
			<div
				className={`w-full text-center pb-10 ${
					page < (discoverData?.total_pages || searchData?.total_pages || 0) ? '' : 'hidden '
				}`}>
				<button
					className={`button ${isLoading ? 'cursor-not-allowed' : ''}`}
					onClick={loadMoreHandler}
					disabled={isLoading}>
					Load more
				</button>
			</div>
		</div>
	)
}

export default Movies
