import { IUserAccount } from 'core/models/user-account';
import Account from './libs/Account';
import { useEffect, useState } from 'react';
import { getMyAccount } from 'store/auth/api';
import Transfer from './libs/Transfer';
import Transactions from './libs/Transactions';


function TransferPage() {

	const [myAccount, setMyAccount] = useState<IUserAccount | null>(null);

	useEffect(() => {
		getMyAccount().then((account) => {
			setMyAccount(account)
		}).catch(console.error);
	}, []);


	return (
		<section className="h-full bg-gray-100">
			<div className="pb-12 pt-36 mx-auto" style={{ maxWidth: '1200px' }}>
				<h1 className="text-black font-bold text-4xl mt-12">Переводы</h1>
				<Account account={myAccount}/>
				<Transfer account={myAccount} updateAccount={setMyAccount}/>
				<Transactions account={myAccount}/>
			</div>
		</section>
	);
}

export default TransferPage;
