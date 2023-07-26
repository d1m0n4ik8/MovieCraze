import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/layouts/header/Header'
import Home from './components/screens/home/Home'
import Movies from './components/screens/movies/Movies'
import SingleMovie from './components/screens/singleMovie/SingleMovie'

const App: FC = () => {
	return (
		<div className=' max-w-screen min-h-screen flex flex-col bg-neutral-950 overflow-x-hidden'>
			<Header />
			<main className='flex-grow mx-auto'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/movie'>
						<Route path='/movie' element={<Movies />} />
						<Route path='/movie:movieId' element={<SingleMovie />} />
					</Route>
				</Routes>
			</main>
		</div>
	)
}

export default App
