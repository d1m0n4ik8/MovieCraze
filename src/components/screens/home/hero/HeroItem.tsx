import { FC, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { IResult } from '../../../../interfaces/IUpcomingMovie'
import { getOriginalImagePath, getWidth500ImagePath } from '../../../../store/api'
import style from '../Home.module.scss'

type HeroItemPropsType = {
	item: IResult
	setTrailerId: (value: SetStateAction<number | null>) => void
	setModalIsOpened: (value: SetStateAction<boolean>) => void
}

const HeroItem: FC<HeroItemPropsType> = ({ item, setTrailerId, setModalIsOpened }) => {
	const background = getOriginalImagePath(item.backdrop_path)
	const trailerHandler = () => {
		setTrailerId(item.id)
		setModalIsOpened(true)
	}
	return (
		<>
			<div
				className={style.heroItem}
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${background})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}>
				<div className={`${style.heroItemCol} w-7/12 px-8`}>
					<div className='text-xl md:text-6xl pb-4 font-bold'>{item.title}</div>
					<div className='w-full text-xl  md:text-3xl text-justify indent-4 p-2'>{item.overview}</div>
					<div className='space-x-4 pt-8 text-2xl'>
						<Link to={`/movie/${item.id}`}>
							<button className='button'>Watch now</button>
						</Link>
						<button className='outlinedButton' onClick={trailerHandler}>
							Watch now
						</button>
					</div>
				</div>
				<div className={`${style.heroItemCol} w-5/12`}>
					<img className='w-44 sm:56 md:w-96 rounded-2xl' src={getWidth500ImagePath(item.poster_path)} />
				</div>
			</div>
		</>
	)
}

export default HeroItem
