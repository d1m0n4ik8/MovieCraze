import { FC, SetStateAction } from 'react'
import { useGetMovieVideoQuery } from '../../../../store/api'
import Modal from '../../../ui/modal/Modal'

type trailerPropsType = {
	modalIsOpened: boolean
	setModalIsOpened: (value: SetStateAction<boolean>) => void
	trailerId: number
}

const TrailerModal: FC<trailerPropsType> = ({ modalIsOpened, setModalIsOpened, trailerId }) => {
	const { data, isLoading } = useGetMovieVideoQuery(trailerId)
	return (
		<Modal modalIsOpened={modalIsOpened} setModalIsOpened={setModalIsOpened}>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<iframe
					src={`https://www.youtube.com/embed/${data?.results[0].key}`}
					width='100%'
					height='500px'
					title='trailer'></iframe>
			)}
		</Modal>
	)
}

export default TrailerModal
