interface Props {
	image: string;
	title: string;
}
export function ShopCard(props: Props) {
	const { image, title } = props;

	return (
		<div className="bg-white flex flex-col justify-between rounded-2xl w-1/3">
			<p className="text-black text-xl font-semibold w-2/3 whitespace-wrap text-right self-end p-5">
				{title}
			</p>
			<img width="125px" height="125px" src={image} alt={title} />
		</div>
	);
}
