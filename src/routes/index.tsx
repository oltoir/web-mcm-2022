import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

const MainPage = lazy(() => import('pages/Main'));
const TestPage = lazy(() => import('pages/Test'));

function RootRouterWrap(): JSX.Element {
	const routes = [
		{
			path: '/',
			element: <MainPage />,
		},
		{
			path: '/test',
			element: <TestPage />,
		},
	];

	return <>{useRoutes(routes)}</>;
}

export function RootRouter() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Router>
				<RootRouterWrap />
			</Router>
		</Suspense>
	);
}
