import { FC, useState } from 'react'
import useMovieList from '../../../hooks/useMovieList'
import Card from '../../ui/card/Card'
import PageHeader from '../../ui/pageHeader/PageHeader'
import Search from '../../ui/search/Search'

const Movies: FC = () => {
	const [queryString, setQueryString] = useState('')
	const { movieList, setMovieList, isLoading, page, totalPages, setPage } = useMovieList(queryString)
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
						<Card key={item.id} id={item.id} mediaType='movie' imageUrl={item.poster_path} title={item.title} />
					))}
			</div>
			<div className={`w-full text-center pb-10 ${page < totalPages ? '' : 'hidden '}`}>
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
