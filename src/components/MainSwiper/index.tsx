import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import 'assets/styles/swiper.css';

interface Props {
	slides: Array<{
		image: string;
		href: string;
	}>;
}
export function MainSwiper(props: Props) {
	const { slides } = props;

	return (
		<Swiper
			navigation={true}
			modules={[Navigation, Pagination]}
			className="mySwiper"
			loop={true}
			autoplay={{ delay: 5000 }}
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<a href={slide.href}>
						<img src={slide.image} alt={slide.href} />
					</a>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
