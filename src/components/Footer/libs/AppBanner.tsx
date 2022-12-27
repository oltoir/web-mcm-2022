export function AppBanner() {
	return (
		<div
			className="flex mx-auto justify-between"
			style={{
				width: '1024px',
				height: '240px',
				backgroundImage:
					'https://jusan.kz/file-server/filename?dir=additional&filename=mobile.png',
			}}
		>
			<div className="flex gap-10 items-center">
				<img
					src="https://jusan.kz/file-server/filename?dir=additional&filename=qr.webp"
					alt="QR"
					height="115px"
					width="115px"
				/>
				<div className="flex flex-col gap-5 h-full justify-center">
					<p className="text-black text-3xl font-bold">Приложение Jusan</p>
					<p className="text-black text-lg">
						Одно приложение – много возможностей!
						<br /> В приложении Jusan вы найдете все, что вам нужно
					</p>
					<button
						className="transition ease-in-out w-72 h-12 text-white
                     bg-black rounded-2xl font-bold hover:bg-gray-400"
					>
						Скачать приложение
					</button>
				</div>
			</div>
			<img
				src="https://jusan.kz/file-server/filename?dir=additional&filename=mobile.png"
				alt="screens"
			/>
		</div>
	);
}
