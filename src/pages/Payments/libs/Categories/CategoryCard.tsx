interface Props {
    id: number;
	title: string;
    image: string;
    onCategoryClick: (categoryId: number) => void;
}
export function CategoryCard(props: Props) {
	const { id, title, image, onCategoryClick } = props;

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
                    display: 'flex',
                    alignItems: 'center'
				}}
			>
				<p>{title}</p>
                <img src={image} alt={title} style={{marginLeft: '3px', height: '32px', width: '32px'}}/>
			</div>
		</a>
	);
}
