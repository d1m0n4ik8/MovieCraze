import { FC } from 'react'
import { IResult } from '../../../interfaces/IUpcomingMovie'
import { getOriginalImagePath, getWidth500ImagePath } from '../../../store/api'
import style from './Home.module.scss'

type HeroItemPropsType = {
	item: IResult
}

const HeroItem: FC<HeroItemPropsType> = ({ item }) => {
	const background = getOriginalImagePath(item.backdrop_path)
	return (
		<div
			className={style.heroItem}
			style={{
				background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${background})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<div className={`${style.heroItemCol}`}>
				<div className='text-xl md:text-4xl pb-4'>{item.title}</div>
				<div className='w-full md:w-3/4 text-base  md:text-xl text-justify indent-4 p-2'>{item.overview}</div>
			</div>
			<div className={`${style.heroItemCol}`}>
				<img className='w-44 sm:56  md:w-80' src={getWidth500ImagePath(item.poster_path)} />
			</div>
		</div>
	)
}

export default HeroItem
