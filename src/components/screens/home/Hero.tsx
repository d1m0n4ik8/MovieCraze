import { FC } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const Hero: FC = () => {
	return (
		<>
			<Swiper
				className='w-full h-1/2'
				slidesPerView={1}
				spaceBetween={30}
				grabCursor
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}>
				<SwiperSlide>
					<img src='https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg' />
				</SwiperSlide>
				<SwiperSlide>
					<img src='https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg' />
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Hero
