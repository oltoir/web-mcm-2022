interface Props {
	image: string;
}
export function PromotionCard(props: Props) {
	const { image } = props;

	return (
		<a href="#" style={{ height: '210px' }}>
			<img className="rounded-xl" src={image} alt="image" />
		</a>
	);
}
