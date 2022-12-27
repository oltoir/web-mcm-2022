interface Props {
	title: string;
	description: string;
	icon: string;
	width?: string;
	background?: string;
}
export function ServiceCard(props: Props) {
	const {
		title,
		description,
		icon,
		width = '1/3',
		background = 'radial-gradient(73.2% 135.36% at 74.15% 69.72%,#898e93 0,#4f4f4f 100%),#6f6d6d',
	} = props;
	return (
		<div
			className={`rounded-2xl p-7 flex flex-col justify-between h-96 w-${width}`}
			style={{ background }}
		>
			<div>
				<p className="text-white font-bold text-3xl">{title}</p>
				<p className="text-white text-lg">{description}</p>
			</div>
			<div>
				<div className="flex justify-end w-full">
					<img width="210px" height="210px" src={icon} alt="title" />
				</div>
				<button className="transition ease-in-out flex items-center bg-gray-100 py-2.5 px-8 rounded-full hover:bg-white">
					Перейти
				</button>
			</div>
		</div>
	);
}
