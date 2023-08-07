import { FC } from 'react'
import { useParams } from 'react-router-dom'
import {
	getOriginalImagePath,
	getWidth500ImagePath,
	useGetDetailsQuery,
	useGetTrailerVideoQuery,
} from '../../../store/api'
import { movieTvType } from '../../../store/api.types'
import Credits from './Credits'
import VideoPlayer from './VideoPlayer'

type propsType = {
	category: movieTvType
}

const SingleMedia: FC<propsType> = ({ category }) => {
	const { id = '' } = useParams()
	const { data } = useGetDetailsQuery({ id, category })
	const { data: TrailerLinkData } = useGetTrailerVideoQuery({ id, category })
	const title = data && 'title' in data ? data?.title : data?.name

	if (!data) return <div>don't find</div>
	return (
		<div
			className='w-screen h-[50vh] px-40'
			style={{
				background: `linear-gradient(to top, #0a0a0a, rgba(0, 0, 0, 0.5)), url(${
					data.backdrop_path
						? getOriginalImagePath(data.backdrop_path)
						: `https://placehold.co/1400x600/000/FFF?text=${title?.split(' ').join('+')}`
				})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<div className='flex pt-60 space-x-16'>
				<img className='h-[500px] rounded-3xl' src={getWidth500ImagePath(data.poster_path)} />
				<div>
					<div className='text-6xl pb-8'>{title}</div>
					<div className='flex space-x-3'>
						{data.genres.map(genre => (
							<div key={genre.id} className='border-2 rounded-3xl py-1 px-8'>
								{genre.name}
							</div>
						))}
						<div className='border-2 rounded-3xl py-1 px-8'>
							{'release_date' in data ? data.release_date : data.first_air_date}
						</div>
					</div>
					<div className='text-xl text-justify pt-4'>{data.overview}</div>
					<div className='flex space-x-8 pt-8'>
						<a
							href={`https://www.youtube.com/embed/${TrailerLinkData?.results[0]?.key}`}
							className='button text-2xl rounded-2xl'
							target='_blank'>
							Watch trailer
						</a>
						<div className='border-2 border-teal-400 rounded-full w-16 h-16 flex justify-center items-center'>
							{data.vote_average.toFixed(2)}
						</div>
					</div>
					<Credits id={id} category={category} />
				</div>
			</div>
			<div className='h-[600px] my-32 pb-4'>
				<VideoPlayer id={id} category={category} />
			</div>
		</div>
	)
}

export default SingleMedia
