import { Logo } from 'components/Logo';
import { AuthModal } from 'components/AuthModal';

export function TopRow() {
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
						Банк
					</button>
					<button className="rounded-xl py-4 px-5 text-gray-400 hover:bg-gray-100 hover:text-black text-lg">
						Бизнес
					</button>
					<button className="rounded-xl py-4 px-5 text-gray-400 hover:bg-gray-100 hover:text-black text-lg">
						Private
					</button>
				</div>
				<AuthModal />
				<div className="flex gap-x-2.5 items-center">
					<div className="flex">
						<input
							className="flex bg-gray-100 py-3 px-4 rounded-l-xl w-40 placeholder-gray-400 text-sm"
							type="text"
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
