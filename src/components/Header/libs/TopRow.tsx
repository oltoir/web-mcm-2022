import { Logo } from 'components/Logo';
import { AuthModal } from 'components/AuthModal';
import { useAuth } from 'store';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from 'core/useDbounce';

export function TopRow() {
	const { isLoggedIn } = useAuth();
	const search = window.location.search;
	const currentUrl = window.location.href;
	const params = new URLSearchParams(search);
	const searchQuery = params.get('search');
	const [searchValue, setSearchValue] = useState(searchQuery || '');

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchValue(e.target.value);
	const debouncedSearch = useDebounce(searchValue, 2000);

	return (
		<div className="flex w-full">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-x-2.5">
					<div className="w-40 flex mr-7">
						<a href="/">
							<Logo />
						</a>
					</div>
					<button className="rounded-xl py-4 px-5 text-gray-400 hover:bg-gray-100 hover:text-black text-lg">
						<a href="/cabinet">Банк</a>
					</button>
					<button className="rounded-xl py-4 px-5 text-gray-400 hover:bg-gray-100 hover:text-black text-lg">
						Бизнес
					</button>
					<button className="rounded-xl py-4 px-5 text-gray-400 hover:bg-gray-100 hover:text-black text-lg">
						Private
					</button>
				</div>
				{isLoggedIn ? (
					<a
						href="cabinet"
						className="flex gap-2 items-center rounded-xl py-4 px-5 text-gray-400 hover:bg-gray-100 hover:text-black text-lg"
					>
						<svg
							fill="none"
							height="20"
							viewBox="0 0 20 20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clipRule="evenodd"
								d="M5.84 15.63a6.97 6.97 0 0 0 8.32 0 8.2 8.2 0 0 0-8.32 0zM4.7 14.57a7
						 7 0 1 1 10.6 0 9.7 9.7 0 0 0-10.6 0zM10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zm-1.5 7a1.5 1.5 0 1 0
						  3 0 1.5 1.5 0 0 0-3 0zm1.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
								fill="currentColor"
								fillRule="evenodd"
							></path>
						</svg>
						Мой кабинет
					</a>
				) : (
					<AuthModal />
				)}

				<div className="flex gap-x-2.5 items-center">
					<div className="flex">
						<input
							className="flex bg-gray-100 py-3 px-4 rounded-l-xl w-40 placeholder-gray-400 text-sm"
							type="text"
							onChange={onInputChange}
							value={searchValue}
							placeholder="Поиск в Jusan"
						/>
						<span className="bg-gray-100 py-3 px-4 rounded-r-xl">
							<img
								src="https://jusan.kz/file-server/filename?dir=icons&filename=search-icon.webp"
								alt="Лупа"
							/>
						</span>
					</div>
					<p className="text-gray-500">RU</p>
					<img
						className="w-10 h-10"
						src="https://jusan.kz/file-server/filename?dir=icons&filename=location-icon.webp"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
