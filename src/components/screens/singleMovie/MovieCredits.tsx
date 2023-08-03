import { FC } from 'react'
import { getWidth500ImagePath, useGetMovieCreditsQuery } from '../../../store/api'
type propsTypes = {
	movieId: string
}

const MovieCredits: FC<propsTypes> = ({ movieId }) => {
	const { data } = useGetMovieCreditsQuery(movieId)

	return (
		<div className='flex space-x-4 py-4'>
			{data?.cast.slice(0, 5).map(actor => (
				<div>
					<img className='rounded-xl' src={getWidth500ImagePath(actor.profile_path || '')} />
					<div className='text-center'>{actor.name}</div>
				</div>
			))}
		</div>
	)
}

export default MovieCredits
