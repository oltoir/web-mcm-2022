interface Props {
	title: string;
	categoryId?: number;
	image: string;
}
export function CategoryCard(props: Props) {
	const { title, image, categoryId } = props;
	// generate url to product page with category id
	const url = categoryId ? `/products?categoryId=${categoryId}` : '/products';

	return (
		<a href={url}>
			<div
				className="p-3 border-gray-100 rounded-xl relative overflow-hidden"
				style={{
					width: '215px',
					height: '115px',
					border: '1px solid #E5E5E5',
				}}
			>
				<img src={image} alt={title} className="absolute left-0 bottom-0" />
				<p className="absolute right-3 top-3 font-bold">{title}</p>
			</div>
		</a>
	);
}
