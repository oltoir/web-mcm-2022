import { useBasket } from 'contexts/basket.context';
import { numberPrettier } from 'core/helpers';

interface Product {
	id: number;
	title: string;
	price: number;
	imageUrl: string;
}
interface Props {
	product: Product;
}

export function ProductCard(props: Props) {
	const { product } = props;
	const { title, price, imageUrl } = product;

	const { basket, dispatch } = useBasket();

	const isInBasket: boolean = basket.find((item) => item.id === product.id);
	const isInBasketCount: number = basket.filter(
		(item) => item.id === product.id
	).length;

	const addToBasket = () => {
		dispatch({ type: 'ADD_ITEM', item: product });
	};

	const removeFromBasket = () => {
		dispatch({ type: 'REMOVE_ITEM', item: product });
	};

	return (
		<div
			className="rounded-2xl bg-white p-4 flex flex-col gap-3 justify-between"
			style={{ width: '224px' }}
		>
			<a href={`/products/${product.id}`}>
				<img
					src={imageUrl}
					alt={title}
					style={{ height: '160px', objectFit: 'contain' }}
				/>
			</a>
			<div className="w-full">
				<p className="whitespace-nowrap text-base text-orange font-bold">
					{numberPrettier(price)}₸
					<span
						className="rounded-full bg-orange pt-0.5 pb-0.5 px-2.5 text-white
					font-bold text-sm h-5 whitespace-nowrap ml-2"
					>
						до 0-0-24
					</span>
				</p>
			</div>
			<p className="text-gray-500 text-sm overflow-ellipsis overflow-hidden">
				{title}
			</p>
			{isInBasket && (
				<div className="flex w-full justify-between item-center">
					<button
						className="text-white text-base rounded-full bg-orange px-4 py-2"
						onClick={addToBasket}
					>
						+
					</button>
					<p>{isInBasketCount}</p>
					<button
						className="text-white text-base rounded-full bg-orange px-4 py-2"
						onClick={removeFromBasket}
					>
						-
					</button>
				</div>
			)}
			{!isInBasket && (
				<button
					className="text-white text-base w-full  rounded-full bg-orange"
					onClick={addToBasket}
				>
					в корзину
				</button>
			)}
		</div>
	);
}
