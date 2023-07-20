import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ITrendingResult } from '../../../../interfaces/ITrendingMovies'
import { ITrendingPeoplesResult } from '../../../../interfaces/ITrendingPeoples'
import { ITrendingTVResult } from '../../../../interfaces/ITrendingTV'
import { getOriginalImagePath } from '../../../../store/api'

type propsType = {
	sliderItems: (ITrendingResult | ITrendingTVResult | ITrendingPeoplesResult)[] | undefined
}

const MovieSwiper: FC<propsType> = ({ sliderItems }) => {
	return (
		<Swiper
			className='w-[90vw]'
			slidesPerView={'auto'}
			spaceBetween={20}
			grabCursor
			autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
			modules={[Autoplay]}>
			{sliderItems ? (
				sliderItems.map(item => (
					<SwiperSlide className='w-48' key={item.id}>
						<Link to={`/${item.media_type}/${item.id}`}>
							{'profile_path' in item ? (
								<img
									className='w-full rounded-xl'
									src={
										item.profile_path
											? getOriginalImagePath(`${item.profile_path}`)
											: `https://placehold.co/600x900/000/FFF?text=${item.name.split(' ').join('+')}`
									}
									height={600}
								/>
							) : (
								<img
									className='w-full rounded-xl'
									src={getOriginalImagePath(`${'poster_path' in item && item.poster_path}`)}
								/>
							)}

							<div className='flex justify-center text-xl text-white'>
								{'name' in item ? item.name : item.title}
							</div>
						</Link>
					</SwiperSlide>
				))
			) : (
				<div className='w-full flex space-x-4'>
					<Skeleton containerClassName='flex-1' height={320} />
					<Skeleton containerClassName='flex-1' height={320} />
					<Skeleton containerClassName='flex-1' height={320} />
					<Skeleton containerClassName='flex-1' height={320} />
					<Skeleton containerClassName='flex-1' height={320} />
					<Skeleton containerClassName='flex-1' height={320} />
				</div>
			)}
		</Swiper>
	)
}

export default MovieSwiper
