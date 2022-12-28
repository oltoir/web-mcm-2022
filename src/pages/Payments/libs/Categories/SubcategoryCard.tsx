interface Props {
    title: string;
    image: string;
    paymentIdentifier: string;
    onSubcategoryClick: (paymentIdentifier: string) => void;
}
export function SubcategoryCard(props: Props) {
	const { title, image, paymentIdentifier, onSubcategoryClick} = props;

    function onClick() {
        onSubcategoryClick(paymentIdentifier);
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
