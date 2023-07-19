import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
	const [open, setOpen] = useState(false)
	const [navSize, setNavSize] = useState('h-32')
	const [navColor, setNavColor] = useState('bg-transparent')

	const listenScrollEvent = () => {
		window.scrollY > 10 ? setNavColor('bg-neutral-950') : setNavColor('bg-transparent')
		window.scrollY > 10 ? setNavSize('h-16') : setNavSize('h-32')
	}

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent)
		return () => {
			window.removeEventListener('scroll', listenScrollEvent)
		}
	}, [])

	return (
		<header
			className={`fixed w-full flex items-center text-blue-50 p-4 px-10 text-base md:text-lg z-20 ${navSize} ${navColor} transition-all duration-500 `}>
			<div className='container mx-auto flex justify-between items-center  '>
				<img
					className='w-36 md:w-40 hover:cursor-pointer'
					src='https://ik.imagekit.io/d1m0n4ik/MovieCrazy/Logo.png?updatedAt=1688228269319'
					alt='logo'
				/>
				<nav className='space-x-6 flex items-center'>
					<Link className='hover:text-teal-400' to='/'>
						Movie
					</Link>
					<Link className='hover:text-teal-400' to='/'>
						People
					</Link>
					<Link className='hover:text-teal-400' to='/'>
						More
					</Link>

					<div className='dropdown relative'>
						<div
							className={`flex space-x-4 items-center cursor-pointer hover:text-teal-400 ${
								open && 'text-teal-400'
							}`}
							onPointerEnter={() => setOpen(true)}
							onPointerLeave={() => setOpen(false)}>
							<div>UserName</div>
							<img
								className='rounded-full w-8'
								src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
								alt='user'
							/>
						</div>
						{open ? (
							<ul
								className='menu absolute bg-neutral-900 w-full py-4'
								onPointerEnter={() => setOpen(true)}
								onPointerLeave={() => setOpen(false)}>
								<li className='menu-item'>
									<Link className='block px-4 hover:text-teal-400' to='/'>
										Menu 1
									</Link>
								</li>
								<li className='menu-item '>
									<Link className='block px-4 hover:text-teal-400' to='/123'>
										Menu 1
									</Link>
								</li>
							</ul>
						) : null}
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
