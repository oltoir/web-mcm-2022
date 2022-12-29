import round from 'lodash/round';
import { useBuyOrder } from 'store/auth/hooks';
import { Item } from '../../../store/auth/type';

interface Props {
	item: Item;
}
export function MainCard(props: Props) {
	const { item } = props;
	const { mutate } = useBuyOrder();

	const handleBuy = () => {
		mutate(
			{
				items: [
					{
						item_id: item.id,
						quantity: 1,
					},
				],
			},
			{
				onSuccess: () => {
					alert('Вы купили товар');
				},
			}
		);
	};

	return (
		<div
			className="bg-white rounded-2xl p-8 flex gap-6 mt-8"
			style={{ width: '890px', height: '500px' }}
		>
			<img
				src={item.imageUrl}
				alt={item.title}
				style={{ width: '390px', height: '390px', objectFit: 'contain' }}
			/>
			<div className="flex flex-col justify-between h-full">
				<div>
					<span className="rounded-full bg-orange py-2  px-2.5 text-white font-bold text-sm h-5">
						0-0-24
					</span>
					<span className="rounded-full bg-green py-2 px-2.5 text-white font-bold text-sm h-5 ml-2">
						{round(item.bonusPercent * 100)}%
					</span>
					<p className="text-2xl font-bold text-black mt-4">{item?.title}</p>
					<p className="text-gray-500 text-sm mt-4">{item.description}</p>
				</div>
				<button
					className="bg-orange py-3 px-5 text-white text-bold rounded-full"
					onClick={handleBuy}
				>
					Купить
				</button>
			</div>
		</div>
	);
}
