import { FC, ReactNode, SetStateAction } from 'react'

type Props = {
	modalIsOpened: boolean
	setModalIsOpened: (value: SetStateAction<boolean>) => void
	children: ReactNode
}

const Modal: FC<Props> = ({ modalIsOpened, setModalIsOpened, children }) => {
	return (
		<>
			{modalIsOpened && (
				<div
					className='fixed w-full h-full bg-gray-950 bg-opacity-50 top-0 left-0 flex justify-center items-center cursor-pointer overflow-hidden z-10'
					onClick={() => setModalIsOpened(false)}>
					<div
						className='bg-black bg-opacity-75 cursor-default w-3/4 rounded-2xl shadow-lg shadow-teal-400 p-8'
						onClick={e => e.stopPropagation()}>
						{children}
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
