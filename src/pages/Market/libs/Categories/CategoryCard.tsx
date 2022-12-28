interface Props {
	title: string;
	image: string;
}
export function CategoryCard(props: Props) {
	const { title, image } = props;
	return (
		<a href="#">
			<div
				className="p-3 border-gray-100 rounded-xl relative overflow-hidden"
				style={{
					width: '215px',
					height: '115px',
					border: '1px solid #E5E5E5',
				}}
			>
				<img src={image} alt={title} className="absolute left-0 bottom-0" />
				<p className="absolute right-3 top-3">{title}</p>
			</div>
		</a>
	);
}
