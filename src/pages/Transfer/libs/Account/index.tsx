import { IUserAccount } from 'core/models/user-account';

interface IUserAccountProps {
	account: IUserAccount | null;
}

function AccountList(props: IUserAccountProps) {
	const { account } = props;

	return (
		<>
			<h2 className="text-black font-bold text-4xl mt-12">Ваш счет</h2>
			<div className="flex flex-col gap-4 mt-4" style={
				{
					flexDirection: 'row',
					columnGap: '5vw',
				}
			}>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Номер счета</span>
					<span className="text-black font-bold">{account?.cardNumber}</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Баланс</span>
					<span className="text-black font-bold">{account?.sum} ₸</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Бонусы</span>
					<span className="text-black font-bold">{account?.bonuses} ₸</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Срок действия</span>
					<span className="text-black font-bold">{account?.expirationDate}</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Вид карты</span>
					<span className="text-black font-bold">{account?.kind === 'JUSAN' ? 'Наша карта' : 'Другая карта'}</span>
				</div>
			</div>
		</>
	);
}

export default AccountList;
