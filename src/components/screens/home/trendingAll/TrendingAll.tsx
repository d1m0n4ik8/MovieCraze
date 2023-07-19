import { FC, useState } from 'react'
import { useGetTrendingAllQuery } from '../../../../store/api'
import MovieSwiper from '../movieSwiper/MovieSwiper'
import TimeTab from '../timeTab/TimeTab'

const TrendingAll: FC = () => {
	const [time, setTime] = useState('day')
	const { data, isLoading } = useGetTrendingAllQuery(time)

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className='w-full py-10'>
					<div className='flex justify-between container p-10'>
						<div className='text-4xl flex'>
							<div>Trending all</div>
							<TimeTab time={time} setTime={setTime} />
						</div>
					</div>
					<MovieSwiper sliderItems={data?.results} />
				</div>
			)}
		</>
	)
}

export default TrendingAll
