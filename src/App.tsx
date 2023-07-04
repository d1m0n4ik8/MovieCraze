import { FC } from 'react'
import Header from './components/layouts/header/Header'
import Home from './components/screens/home/Home'

const App: FC = () => {
	return (
		<div className=' min-w-screen min-h-screen flex flex-col bg-neutral-800'>
			<Header />
			<main className='container flex-grow mx-auto pt-24'>
				<Home />
			</main>
		</div>
	)
}

export default App
