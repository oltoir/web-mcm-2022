import { Card } from './Card';
import { ShopCard } from './ShopCard';

const cards = [
	{
		title: 'Экспресс-кредит',
		description: 'Онлайн без залога и на любые цели',
		icon: 'https://jusan.kz/lottie/credit/images/img_1.png',
	},
	{
		title: 'Jusan депозит',
		description: 'Управляйте своими сбережениями онлайн',
		icon: 'https://jusan.kz/lottie/deposit/images/img_1.png',
	},
	{
		title: 'Карта Jusan',
		description: 'Чем больше транзакций, тем больше бонусов',
		icon: 'https://jusan.kz/lottie/card/images/img_1.png',
	},
];

const shopCards = [
	{
		title: 'Экспресс-кредит',
		description: 'Онлайн без залога и на любые цели',
		icon: 'https://jusan.kz/lottie/credit/images/img_1.png',
	},
	{
		title: 'Jusan депозит',
		description: 'Управляйте своими сбережениями онлайн',
		icon: 'https://jusan.kz/lottie/deposit/images/img_1.png',
	},
	{
		title: 'Карта Jusan',
		description: 'Чем больше транзакций, тем больше бонусов',
		icon: 'https://jusan.kz/lottie/card/images/img_1.png',
	},
];

export function CardList() {
	return (
		<>
			<h1 className="text-black font-bold text-4xl">Продукты банка</h1>
			<div className="flex justify-between mt-6 gap-6">
				{cards.map((card, index) => (
					<Card
						key={index}
						title={card.title}
						description={card.description}
						icon={card.icon}
					/>
				))}
			</div>
			<div className="mt-5">
				<h1 className="text-black font-bold text-4xl">Продукты банка</h1>
				<div className="flex justify-between mt-6 gap-6 ">
					{shopCards.map((card, index) => (
						<ShopCard title={card.title} key={index} image={card.icon} />
					))}
				</div>
			</div>
			<div className="mt-5">
				<div className="flex justify-between mt-6 gap-6 ">
					{shopCards.map((card, index) => (
						<ShopCard title={card.title} key={index} image={card.icon} />
					))}
				</div>
			</div>
			<div className="flex justify-between mt-5 gap-6">
				{cards.slice(1).map((card, index) => (
					<Card
						key={index}
						title={card.title}
						description={card.description}
						icon={card.icon}
						width="1/2"
					/>
				))}
			</div>
		</>
	);
}
