import { FC } from 'react'
import { useParams } from 'react-router-dom'
import {
	getOriginalImagePath,
	getWidth500ImagePath,
	useGetMovieDetailsQuery,
	useGetMovieVideoQuery,
} from '../../../store/api'
import MovieCredits from './MovieCredits'

const SingleMovie: FC = () => {
	const { movieId } = useParams()

	const { data } = useGetMovieDetailsQuery(movieId || '0')
	const { data: TrailerLinkData } = useGetMovieVideoQuery(movieId ? +movieId : 0)

	if (!data) return <div>don't find</div>
	return (
		<div
			className='w-screen h-[50vh] px-40'
			style={{
				background: `linear-gradient(to top, #0a0a0a, rgba(0, 0, 0, 0.5)), url(${
					data.backdrop_path
						? getOriginalImagePath(data.backdrop_path)
						: `https://placehold.co/1400x600/000/FFF?text=${data.title.split(' ').join('+')}`
				})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<div className='flex pt-60 space-x-16'>
				<img className='h-[500px] rounded-3xl' src={getWidth500ImagePath(data.poster_path)} />
				<div>
					<div className='text-6xl pb-8'>{data.title}</div>
					<div className='flex space-x-3'>
						{data.genres.map(genre => (
							<div key={genre.id} className='border-2 rounded-3xl py-1 px-8'>
								{genre.name}
							</div>
						))}
						<div className='border-2 rounded-3xl py-1 px-8'>{data.release_date}</div>
					</div>
					<div className='text-xl text-justify pt-4'>{data.overview}</div>
					<div className='flex space-x-8 pt-8'>
						<a
							href={`https://www.youtube.com/embed/${TrailerLinkData?.results[0].key}`}
							className='button text-2xl rounded-2xl'
							target='_blank'>
							Watch trailer
						</a>
						<div className='border-2 border-teal-400 rounded-full w-16 h-16 flex justify-center items-center'>
							{data.vote_average.toFixed(2)}
						</div>
					</div>
					<MovieCredits movieId={movieId || ''} />
				</div>
			</div>

			<iframe
				src={`https://3442534688564.svetacdn.in/msNIXXBblTTU?imdb_id=tt0388629`}
				width='100%'
				height='100%'
				title='video'
				loading='eager'
				allowFullScreen={true}
			/>
		</div>
	)
}

export default SingleMovie
