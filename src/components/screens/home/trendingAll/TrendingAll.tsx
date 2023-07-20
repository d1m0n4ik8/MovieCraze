import { FC, useState } from 'react'
import { useGetTrendingAllQuery } from '../../../../store/api'
import TimeTab from '../timeTab/TimeTab'
import MovieSwiper from '../trendingSwiper/TrendingSwiper'

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
				</div>
				<MovieSwiper sliderItems={data?.results} />
			</div>
		</>
	)
}

export default TrendingAll
