import { FC, SetStateAction } from 'react'
type propsType = {
	time: string
	setTime: (value: SetStateAction<string>) => void
}

const TimeTab: FC<propsType> = ({ time, setTime }) => {
	return (
		<div className='space-x-2 pl-4 flex'>
			<div className={`${time === 'day' ? 'button' : 'outlinedButton'} text-lg py-2`} onClick={() => setTime('day')}>
				day
			</div>
			<div
				className={`${time === 'week' ? 'button' : 'outlinedButton'} text-lg py-2`}
				onClick={() => setTime('week')}>
				week
			</div>
		</div>
	)
}

export default TimeTab
