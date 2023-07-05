import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
	const [open, setOpen] = useState(false)

	return (
		<header className='fixed w-full h-18 bg-neutral-900 bg-opacity-50  text-blue-50 p-4 shadow-lg px-10 text-lg z-10'>
			<div className='container mx-auto flex justify-between items-center  '>
				<img
					className='w-40 hover:cursor-pointer'
					src='https://ik.imagekit.io/d1m0n4ik/MovieCrazy/Logo.png?updatedAt=1688228269319'
					alt='logo'
				/>
				<nav className='space-x-6 flex'>
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
