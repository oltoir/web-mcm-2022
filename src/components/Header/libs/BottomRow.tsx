export function BottomRow() {
	const links = [
		{
			id: 0,
			name: 'Магазин',
			link: '/',
			icon: 'https://jusan.kz/file-server/filename?dir=icons/header-tiny&filename=shop-tiny.webp',
			extraComponent: (
				<span className="rounded-full bg-orange pt-0.5 pb-5 px-2.5 text-white font-bold text-sm h-5">
					0-0-24
				</span>
			),
		},
		{
			id: 1,
			name: 'Мой банк',
			link: '/',
			icon: 'https://jusan.kz/file-server/filename?dir=icons/header-tiny&filename=invest-tiny.webp',
		},
		{
			id: 2,
			name: 'Платежи',
			link: '/',
			icon: 'https://jusan.kz/file-server/filename?dir=icons/header-tiny&filename=inshurance-tiny.webp',
		},
		{
			id: 3,
			name: 'Путешествия',
			link: '/',
			icon: 'https://jusan.kz/file-server/filename?dir=icons/header-tiny&filename=travel-tiny.webp',
			extraComponent: (
				<span className="rounded-full bg-green pt-0.5 pb-5 px-2.5 text-white font-bold text-sm h-5">
					5%
				</span>
			),
		},
		{
			id: 4,
			name: 'Mobile',
			link: '/',
			icon: 'https://jusan.kz/file-server/filename?dir=icons/header-tiny&filename=mobile-tiny.webp',
		},
		{
			id: 5,
			name: 'Билеты',
			link: '/',
			icon: 'https://jusan.kz/file-server/filename?dir=icons/header-tiny&filename=ticket.webp',
		},
		{
			id: 6,
			name: 'Валюты',
			link: '/',
			icon: 'https://jusan.kz/file-server/filename?dir=icons/header-tiny&filename=currency-tiny.webp',
		},
	];

	return (
		<div className="flex w-full  ">
			<div className="flex items-center gap-5">
				{links.map((link, index) => (
					<a
						key={index}
						href={link.link}
						className="transition ease-in-out delay-200 hover:text-orange text-gray-500 flex gap-2 items-center"
					>
						<img src={link.icon} alt={link.name} />
						<p>{link.name}</p>
						{link?.extraComponent}
					</a>
				))}
			</div>
		</div>
	);
}
