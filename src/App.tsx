import { FC } from 'react'
import Header from './components/layouts/header/Header'
import Home from './components/screens/home/Home'

const App: FC = () => {
	return (
		<div className=' max-w-screen min-h-screen flex flex-col bg-neutral-950 overflow-x-hidden'>
			<Header />
			<main className='flex-grow mx-auto'>
				<Home />
			</main>
		</div>
	)
}

export default App
