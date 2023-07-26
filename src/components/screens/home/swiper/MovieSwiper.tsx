import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ITrendingResult } from '../../../../interfaces/ITrendingMovies'
import { ITrendingTVResult } from '../../../../interfaces/ITrendingTV'
import { getWidth500ImagePath } from '../../../../store/api'
import Card from '../../../ui/card/Card'

type propsType = {
	sliderItems: (ITrendingResult | ITrendingTVResult)[] | undefined
}

const MovieSwiper: FC<propsType> = ({ sliderItems }) => {
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
						imageUrl={getWidth500ImagePath(item.poster_path)}
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

export default MovieSwiper
