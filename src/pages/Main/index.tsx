import { MainSwiper } from 'components/MainSwiper';
import { CardList } from './libs';
import { NavCard } from 'components';

const slides = [
	{
		image:
			'https://jusan.kz/file-server/filename?dir=banner&filename=1440x374_РУС-min.webp',
		href: '/',
	},
	{
		image:
			'https://jusan.kz/file-server/filename?dir=slider&filename=business-car-desktop-ru.webp',
		href: '/',
	},
	{
		image:
			'https://jusan.kz/file-server/filename?dir=slider&filename=BARISTO-1440x374-ru-min.webp',
		href: '/',
	},
];
function MainPage() {
	return (
		<section className="h-full bg-gray-100">
			<div className="pb-12 pt-36 mx-auto" style={{ maxWidth: '1200px' }}>
				<MainSwiper slides={slides} />
				<NavCard />
				<CardList />
			</div>
		</section>
	);
}

export default MainPage;
