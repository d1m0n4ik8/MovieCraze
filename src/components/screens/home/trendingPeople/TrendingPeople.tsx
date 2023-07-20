import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetTrendingPeopleQuery } from '../../../../store/api'
import TimeTab from '../timeTab/TimeTab'
import MovieSwiper from '../trendingSwiper/TrendingSwiper'

const TrendingPeople: FC = () => {
	const [time, setTime] = useState('day')
	const { data } = useGetTrendingPeopleQuery(time)

	return (
		<>
			<div className='w-full py-10'>
				<div className='flex justify-between container p-10'>
					<div className='text-4xl flex'>
						<div>Trending people</div>
						<TimeTab time={time} setTime={setTime} />
					</div>

					<Link to='/people' className='outlinedButton'>
						More...
					</Link>
				</div>
				<MovieSwiper sliderItems={data?.results} />
			</div>
		</>
	)
}

export default TrendingPeople
