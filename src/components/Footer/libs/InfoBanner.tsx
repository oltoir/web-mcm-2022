export function InfoBanner() {
	const links = [
		'О банке',
		'Контакты',
		'Вакансии',
		'Партнерам',
		'Помощь',
		'Контакты',
		'Контакты',
		'Вакансии',
		'Партнерам',
		'Партнерам',
		'Помощь',
		'Помощь',
		'Помощь',
	];

	return (
		<div className="w-full flex justify-center">
			<div
				className="flex gap-5 items-center rounded-2xl px-8 py-4 bg-gray-100"
				style={{ width: '1200px' }}
			>
				{links.map((link, index) => (
					<a
						href="#"
						key={index}
						className="transition ease-in-out delay-200 whitespace-nowrap
						hover:text-orange
						"
					>
						{link}
					</a>
				))}
			</div>
		</div>
	);
}
