import { FC } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useGetMovieListQuery } from '../../../store/api'
import HeroItem from './HeroItem'
import style from './Home.module.scss'

const Hero: FC = () => {
	const { data, isLoading } = useGetMovieListQuery(1)

	return (
		<div>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<Swiper
					className={style.swiper}
					slidesPerView={1}
					grabCursor
					loop={true}
					autoplay={{
						delay: 2500,
					}}
					modules={[Autoplay]}>
					{data?.results.slice(0, 4).map(item => (
						<SwiperSlide className={style.slide} key={item.id}>
							<HeroItem item={item} />
						</SwiperSlide>
					))}
				</Swiper>
			)}

			<div className='h-96'></div>
		</div>
	)
}

export default Hero
