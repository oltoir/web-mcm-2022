export function NavBanner() {
	const links = [
		{
			title: 'Банк',
			links: [
				'Экспресс кредит',
				'Рефинансирование',
				'Jusan депозит',
				'Карта Jusan',
				'Прочие продукты',
			],
		},
		{
			title: 'Для бизнеса',
			links: [
				'Jusan Tole и эквайринг',
				'Кредит для бизнеса',
				'Открыть счет',
				'Прочие услуги',
			],
		},
		{
			title: 'Магазин',
			links: ['Товары', 'Услуги', 'Продукты', 'Акции', 'Стать партнером'],
		},
		{
			title: 'Страхование',
			links: [
				'ОГПО ВТС автострахование',
				'КАСКО автострахование',
				'Страхование имущества',
				'Страхование грузов',
				'Прочие услуги',
			],
		},
		{
			title: 'Инвестиции',
			links: [
				'IPO нацкомпаний',
				'Онлайн торговля',
				'Академия инвестирования',
				'Пенсионные активы',
				'Соцсеть инвесторов',
				'Прочие продукты',
			],
		},
	];

	return (
		<div className="w-full flex justify-center mt-7 h-96">
			<div className="flex justify-between" style={{ width: '1200px' }}>
				{links.map((link, index) => (
					<div key={index} className="flex flex-col">
						<p className="font-bold text-2xl text-black">{link.title}</p>
						{link.links.map((link, index) => (
							<a
								href="#"
								key={index}
								className="transition ease-in-out delay-200
                         text-gray-500 text-lg my-3 hover:text-orange"
							>
								{link}
							</a>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
