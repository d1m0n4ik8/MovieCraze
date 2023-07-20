import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetTrendingTVQuery } from '../../../../store/api'
import TimeTab from '../timeTab/TimeTab'
import MovieSwiper from '../trendingSwiper/TrendingSwiper'

const TrendingTV: FC = () => {
	const [time, setTime] = useState('day')
	const { data } = useGetTrendingTVQuery(time)

	return (
		<>
			<div className='w-full'>
				<div className='flex justify-between container p-10'>
					<div className='text-4xl flex'>
						<div>Trending TV</div>
						<TimeTab time={time} setTime={setTime} />
					</div>

					<Link to='/tv' className='outlinedButton'>
						More...
					</Link>
				</div>
				<MovieSwiper sliderItems={data?.results} />
			</div>
		</>
	)
}

export default TrendingTV
