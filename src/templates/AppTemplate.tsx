import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';

export function AppTemplate() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
