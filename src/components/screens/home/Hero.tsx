import { FC } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useGetMovieListQuery } from '../../../store/api'
import HeroItem from './HeroItem'
const Hero: FC = () => {
	const { data } = useGetMovieListQuery(1)

	return (
		<div>
			<Swiper
				className='w-screen h-screen'
				slidesPerView={1}
				grabCursor
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}>
				{data?.results.slice(0, 4).map(item => (
					<SwiperSlide key={item.id}>
						<HeroItem item={item} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className='h-96'></div>
		</div>
	)
}

export default Hero
