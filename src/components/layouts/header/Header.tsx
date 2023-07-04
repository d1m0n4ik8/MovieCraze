import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
	return (
		<header className='fixed w-full h-18 bg-neutral-900 bg-opacity-50  text-blue-50 p-4 shadow-lg px-10 text-lg'>
			<div className='container mx-auto flex justify-between items-center  '>
				<img
					className='w-40 hover:cursor-pointer'
					src='https://ik.imagekit.io/d1m0n4ik/MovieCrazy/Logo.png?updatedAt=1688228269319'
					alt='logo'
				/>
				<nav className='space-x-6'>
					<Link className='hover:text-teal-400' to='/'>
						Movie
					</Link>
					<Link className='hover:text-teal-400' to='/'>
						People
					</Link>
					<Link className='hover:text-teal-400' to='/'>
						More
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
