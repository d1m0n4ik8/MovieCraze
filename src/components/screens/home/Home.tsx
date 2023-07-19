import { FC } from 'react'
import Hero from './hero/Hero'
import TrendingAll from './trendingAll/TrendingAll'
import TrendingMovies from './trendingMovies/TrendingMovies'
import TrendingPeople from './trendingPeople/TrendingPeople'
import TrendingTV from './trendingTV/TrendingTV'

const Home: FC = () => {
	return (
		<div className='overflow-hidden max-w-full'>
			<Hero />
			<TrendingAll />
			<TrendingMovies />
			<TrendingTV />
			<TrendingPeople />
		</div>
	)
}

export default Home
