import { FC } from 'react'
import { Link } from 'react-router-dom'

type propsType = {
	id: number
	mediaType: string
	imageUrl: string
	title: string
}

const Card: FC<propsType> = ({ id, mediaType, imageUrl, title }) => {
	return (
		<div className='w-48 last:grow'>
			<Link to={`/${mediaType}/${id}`}>
				<img className='w-full rounded-xl' src={imageUrl} />
				<div className='flex justify-center text-xl text-white'>{title}</div>
			</Link>
		</div>
	)
}

export default Card
