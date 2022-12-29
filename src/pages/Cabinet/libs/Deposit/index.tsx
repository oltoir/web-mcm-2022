import { IUser } from 'core/models/user';
import { IUserDeposit } from 'core/models/user-deposit';
import { useEffect, useState } from 'react';
import { getMyDeposit } from 'store/auth/api';


function DepositList() {
	const [myDeposit, setMyDeposit] = useState<IUserDeposit | null>(null);

	useEffect(() => {
		getMyDeposit().then((deposit: IUserDeposit) => {
			setMyDeposit(deposit);
		}).catch(console.error);
	}, []);


	return (
		<>
			<h1 className="text-black font-bold text-4xl mt-12">Ваш депозитный счет</h1>
			<div className="flex flex-col gap-4 mt-4" style={
				{
					flexDirection: 'row',
					columnGap: '5vw',
				}
			}>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Номер счета</span>
					<span className="text-black font-bold">{myDeposit?.id}</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-gray-500">Баланс</span>
					<span className="text-black font-bold">{myDeposit?.sum} ₸</span>
				</div>
			</div>
		</>
	);
}

export default DepositList;
