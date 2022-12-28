import { useBasket } from 'contexts/basket.context';
import { ProductCard } from '../Market/libs/Products/ProductCard';
import { numberPrettier } from 'core/helpers';

function Basket() {
	const { basket } = useBasket();

	if (basket.length === 0) {
		return (
			<div className="pb-12 pt-36 mx-auto" style={{ maxWidth: '1200px' }}>
				<div className="w-full h-96">
					<p className="text-black font-bold text-4xl">
						В корзине пока пусто ;(
					</p>
				</div>
			</div>
		);
	}

	const totalPrice = basket.reduce((acc: number, item) => acc + item.price, 0);

	const uniqueItems: { [key: string]: any } = {};

	// Iterate over the items and add each unique item to the object
	for (const item of basket) {
		uniqueItems[item.id] = item;
	}

	// Convert the object to an array
	const uniqueBasket = Object.values(uniqueItems);

	return (
		<section className="h-full bg-gray-100">
			<h1 className="text-black font-bold text-4xl">Корзина</h1>
			<div className="pb-12 pt-36 mx-auto" style={{ maxWidth: '1200px' }}>
				<div className="flex justify-between gap-5 mt-6 overflow-auto">
					{uniqueBasket.map((item, index) => (
						<ProductCard key={index} product={item} />
					))}
				</div>
				<div className="flex w-full gap-5 mt-8 items-center">
					<p>
						Сумма: <span>{numberPrettier(totalPrice)}₸</span>
					</p>
					<button className="bg-orange text-white font-bold text-lg rounded-full px-5 py-3">
						Купить
					</button>
				</div>
			</div>
		</section>
	);
}

export default Basket;
