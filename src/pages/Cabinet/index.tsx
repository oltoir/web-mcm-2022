import { IUser } from 'core/models/user';
import { useEffect, useState } from 'react';
import { getMe } from 'store/auth/api';
import Account from './libs/Account';
import Deposit from './libs/Deposit';
import EditUser from './libs/EditUser';
import UserCard from './libs/UserCard';


function CabinetPage() {
	const tempUser: IUser = {
		id: 1,
		firstName: 'John',
		lastName: 'Doe',
		phone: '+7 777 777 77 77',
		email: 'test@gmail.com',
		avatarUrl: 'https://i.pravatar.cc/150?img=1',
	};

	useEffect(() => {
		getMe().then((myAccount) => {
			setUser(myAccount);
		}).catch(console.error);
	}, []);

	const [user, setUser] = useState<IUser | null>(tempUser);
	const [isEditUserVisible, setIsEditUserVisible] = useState(false);

	return (
		<section className="h-full bg-gray-100">
			<div className="pb-12 pt-36 mx-auto" style={{ maxWidth: '1200px' }}>
				<UserCard user={user} />
				<div className="flex gap-4 mt-4">
					<button
						onClick={() => setIsEditUserVisible(true)}
						className="px-4 py-2 text-sm font-bold text-white bg-orange rounded-full"
					>
						Редактировать
					</button>
					<button className="px-4 py-2 text-sm font-bold text-orange bg-white rounded-full">
						Выйти
					</button>
				</div>
				{isEditUserVisible && (
					<EditUser
						user={user}
						onClose={() => setIsEditUserVisible(false)}
						setUser={setUser}
					/>
				)}
				<Account />
				<Deposit />
			</div>
		</section>
	);
}

export default CabinetPage;
