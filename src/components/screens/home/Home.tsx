import { FC, Suspense, lazy } from 'react'

import Footer from '../../layouts/footer/Footer'
import Hero from './hero/Hero'
const TrendingAll = lazy(() => import('./trending/TrendingAll'))
const TrendingMovies = lazy(() => import('./trending/TrendingMovies'))
const TrendingPeople = lazy(() => import('./trending/TrendingPeople'))
const TrendingTV = lazy(() => import('./trending/TrendingTV'))

const Home: FC = () => {
	return (
		<div className='overflow-hidden max-w-full'>
			<Suspense>
				<Hero />
				<TrendingAll />
				<TrendingMovies />
				<TrendingTV />
				<TrendingPeople />
			</Suspense>
			<Footer />
		</div>
	)
}

export default Home
