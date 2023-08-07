import { FC } from 'react'
import { getWidth500ImagePath, useGetCreditsQuery } from '../../../store/api'
import { movieTvInfoType } from '../../../store/api.types'

const MovieCredits: FC<movieTvInfoType> = ({ id, category }) => {
	const { data } = useGetCreditsQuery({ id, category })

	return (
		<div className='flex space-x-4 py-4'>
			{data?.cast.slice(0, 5).map(actor => (
				<div key={actor.id}>
					<img className='rounded-xl' src={getWidth500ImagePath(actor.profile_path || '')} />
					<div className='text-center'>{actor.name}</div>
				</div>
			))}
		</div>
	)
}

export default MovieCredits
