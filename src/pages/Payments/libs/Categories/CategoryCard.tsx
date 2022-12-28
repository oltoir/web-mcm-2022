interface Props {
    id: number;
	title: string;
    onCategoryClick: (categoryId: number) => void;
}
export function CategoryCard(props: Props) {
	const { id, title, onCategoryClick } = props;

    function onClick() {
        onCategoryClick(id);
    }

	return (
		<a href="#" onClick={onClick}>
			<div
				className="p-3 border-gray-100 rounded-xl relative overflow-hidden"
				style={{
					width: '215px',
					height: '50px',
					border: '1px solid #E5E5E5',
				}}
			>
				<p className="absolute left-3 top-3">{title}</p>
			</div>
		</a>
	);
}
