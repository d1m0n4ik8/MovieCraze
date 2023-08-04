import { FC, useState } from 'react'
import useMediaList from '../../../hooks/useMediaList'
import { movieTvType } from '../../../store/api.types'
import Card from '../../ui/card/Card'
import PageHeader from '../../ui/pageHeader/PageHeader'
import Search from '../../ui/search/Search'
type propsType = {
	category: movieTvType
}

const Catalog: FC<propsType> = ({ category }) => {
	const [queryString, setQueryString] = useState('')
	const { movieList, setMovieList, isLoading, page, totalPages, setPage } = useMediaList(queryString, category)
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
			<PageHeader pageTitle={category.toUpperCase()} />
			<Search searchHandler={searchHandler} />
			<div className='grid grid-cols-6 gap-4 py-8'>
				{!isLoading &&
					movieList.map(item => (
						<Card
							key={item.id}
							id={item.id}
							mediaType={category}
							imageUrl={item.poster_path}
							title={'title' in item ? item.title : item.name}
						/>
					))}
			</div>
			<div className={`w-full flex justify-center pb-10 ${page < totalPages ? '' : 'hidden '}`}>
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

export default Catalog
