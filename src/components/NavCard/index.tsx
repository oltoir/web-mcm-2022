const data = [
	{
		image:
			'https://jusan.kz/file-server/filename?dir=popular-navigations/main-navigation&filename=nav-second-stock.webp',
		name: 'Акции',
	},
	{
		image:
			'https://jusan.kz/file-server/filename?dir=popular-navigations/main-navigation&filename=nav-second-express-loan.webp',
		name: 'Кредиты',
	},
	{
		image:
			'https://jusan.kz/file-server/filename?dir=icons&filename=pay-cart-icon.webp',
		name: 'Дебетовые карты',
	},
	{
		image:
			'https://jusan.kz/file-server/filename?dir=icons&filename=auto-inshurance-icon.webp',
		name: 'Автострахование',
	},
	{
		image:
			'https://jusan.kz/file-server/filename?dir=popular-navigations/main-navigation&filename=nav-second-jusan-deposit.webp',
		name: 'Депозиты',
	},
];

export function NavCard() {
	return (
		<div className="flex py-3 px-6 justify-between bg-white rounded-2xl my-8">
			{data.map((item, index) => (
				<a href="/" className="flex gap-3" key={index}>
					<img height="40px" width="40px" src={item.image} alt={item.name} />
					<p className="text-gray-500 ">{item.name}</p>
				</a>
			))}
		</div>
	);
}
