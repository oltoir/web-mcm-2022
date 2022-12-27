interface Props {
	title: string;
	description: string;
	icon: string;
	width?: string;
}
export function Card(props: Props) {
	const { title, description, icon, width = '1/3' } = props;
	return (
		<div
			className={`rounded-2xl bg-white p-7 flex flex-col justify-between h-96 w-${width}`}
			style={{ maxWidth: '560px' }}
		>
			<div>
				<p className="text-black font-bold text-2xl">{title}</p>
				<p className="text-gray-500 text-sm">{description}</p>
			</div>
			<div>
				<div className="flex justify-end w-full">
					<img width="210px" height="210px" src={icon} alt="title" />
				</div>
				<button className="transition ease-in-out flex items-center bg-gray-100 py-1.5 px-3 rounded-full font-bold hover:bg-white">
					узнать подробнее
					<svg
						viewBox="0 0 18 18"
						width="12px"
						height="12px"
						fill="black"
						className="ic"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11.2293 7.49979L8.18009 4.19646L10.3845 2.16162L16.6967 8.99979L10.3845 15.838L8.18009 13.8031L11.2293 10.4998H3.01379V7.49979H11.2293Z"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
}
