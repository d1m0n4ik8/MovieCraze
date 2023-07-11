import { FC } from 'react'
import { IResult } from '../../../interfaces/IUpcomingMovie'
import { getOriginalImagePath, getWidth500ImagePath } from '../../../store/api'
type HeroItemPropsType = {
	item: IResult
}
const HeroItem: FC<HeroItemPropsType> = ({ item }) => {
	const background = getOriginalImagePath(item.backdrop_path)
	return (
		<div
			className="w-full h-full flex after:content-['*'] after:bg-black'"
			style={{
				backgroundImage: `url(${background})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<div className='w-1/2 -full flex items-center flex-col justify-center p-4'>
				<div>{item.title}</div>
				<div>{item.overview}</div>
			</div>
			<div className='w-1/2 h-full flex items-center justify-center'>
				<img className='w-80' src={getWidth500ImagePath(item.poster_path)} />
			</div>
		</div>
	)
}

export default HeroItem
