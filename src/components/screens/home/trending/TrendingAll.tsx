import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetTrendingAllQuery } from '../../../../store/api'
import MovieSwiper from '../swiper/MovieSwiper'
import TimeTab from '../timeTab/TimeTab'

const TrendingAll: FC = () => {
	const [time, setTime] = useState('day')
	const { data } = useGetTrendingAllQuery(time)

	return (
		<>
			<div className='w-full py-10'>
				<div className='flex justify-between container p-10'>
					<div className='text-4xl flex'>
						<div>Trending all</div>
						<TimeTab time={time} setTime={setTime} />
					</div>
					<Link to='/movie' className='outlinedButton'>
						More...
					</Link>
				</div>
				<MovieSwiper sliderItems={data?.results} />
			</div>
		</>
	)
}

export default TrendingAll
