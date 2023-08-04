import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TrendingResultsType } from '../../../../interfaces/ITrending'
import Card from '../../../ui/card/Card'

type propsType = {
	sliderItems: TrendingResultsType[] | undefined
}

const TrendingSwiper: FC<propsType> = ({ sliderItems }) => {
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
						imageUrl={'poster_path' in item ? item.poster_path : item.profile_path}
						title={'title' in item ? item.title : item.name}
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

export default TrendingSwiper
