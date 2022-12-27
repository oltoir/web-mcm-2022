import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';

export function AppTemplate() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
