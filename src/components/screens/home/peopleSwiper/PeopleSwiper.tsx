import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ITrendingPeoplesResult } from '../../../../interfaces/ITrendingPeoples'
import { getOriginalImagePath } from '../../../../store/api'
type propsType = {
	sliderItems: ITrendingPeoplesResult[] | undefined
}

const PeopleSwiper: FC<propsType> = ({ sliderItems }) => {
	return (
		<Swiper
			className='w-[90vw]'
			slidesPerView={'auto'}
			spaceBetween={20}
			grabCursor
			autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
			modules={[Autoplay]}>
			{sliderItems?.map(
				item =>
					item.profile_path && (
						<SwiperSlide className='w-48' key={item.id}>
							<Link to={`/${item.media_type}/${item.id}`}>
								<img className='w-full rounded-xl' src={getOriginalImagePath(item.profile_path)} />
								<div className='flex justify-center text-xl text-white'>{item.name}</div>
							</Link>
						</SwiperSlide>
					)
			)}
		</Swiper>
	)
}

export default PeopleSwiper
