import { IUserAccount } from 'core/models/user-account';
import { useEffect, useState } from 'react';
import { getMyAccount } from 'store/auth/api';


function AccountList() {
	const [myAccount, setMyAccount] = useState<IUserAccount | null>(null);

	useEffect(() => {
		getMyAccount().then((account: IUserAccount) => {
			setMyAccount(account);
		}).catch(console.error);
	}, []);


	return (
		<>
			<h1 className="text-black font-bold text-4xl mt-12">Ваш счет</h1>
			<div className="flex flex-col gap-4 mt-4" style={
				{
					flexDirection: 'row',
					columnGap: '5vw',
				}
			}>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Номер счета</span>
					<span className="text-black font-bold">{myAccount?.cardNumber}</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Баланс</span>
					<span className="text-black font-bold">{myAccount?.sum} ₸</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Бонусы</span>
					<span className="text-black font-bold">{myAccount?.bonuses} ₸</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Срок действия</span>
					<span className="text-black font-bold">{myAccount?.expirationDate}</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Вид карты</span>
					<span className="text-black font-bold">{myAccount?.kind === 'JUSAN' ? 'Наша карта' : 'Другая карта'}</span>
				</div>
			</div>
		</>
	);
}

export default AccountList;
