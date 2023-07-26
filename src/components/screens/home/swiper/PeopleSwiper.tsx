import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ITrendingPeoplesResult } from '../../../../interfaces/ITrendingPeoples'
import { getOriginalImagePath } from '../../../../store/api'
import Card from '../../../ui/card/Card'

type propsType = {
	sliderItems: ITrendingPeoplesResult[] | undefined
}

const PeopleSwiper: FC<propsType> = ({ sliderItems }) => {
	return sliderItems ? (
		<Swiper
			className='w-[90vw]'
			slidesPerView={6.5}
			spaceBetween={20}
			grabCursor
			autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
			modules={[Autoplay]}>
			{sliderItems.map(item => (
				<SwiperSlide className='w-48' key={item.id}>
					<Card
						id={item.id}
						mediaType={item.media_type}
						imageUrl={
							item.profile_path
								? getOriginalImagePath(`${item.profile_path}`)
								: `https://placehold.co/600x900/000/FFF?text=${item.name.split(' ').join('+')}`
						}
						title={item.name}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	) : (
		<div className='w-full flex space-x-4'>
			<Skeleton containerClassName='flex-1' height={320} />
			<Skeleton containerClassName='flex-1' height={320} />
			<Skeleton containerClassName='flex-1' height={320} />
			<Skeleton containerClassName='flex-1' height={320} />
			<Skeleton containerClassName='flex-1' height={320} />
			<Skeleton containerClassName='flex-1' height={320} />
		</div>
	)
}

export default PeopleSwiper
