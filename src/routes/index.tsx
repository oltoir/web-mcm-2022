import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { AppTemplate } from 'templates/AppTemplate';

const MainPage = lazy(() => import('pages/Main'));
const TestPage = lazy(() => import('pages/Test'));
const MarketPage = lazy(() => import('pages/Market'));

function RootRouterWrap(): JSX.Element {
	const routes = [
		{
			path: '/',
			element: <AppTemplate />,
			children: [
				{
					path: '/',
					element: <MainPage />,
				},
				{
					path: '/test',
					element: <TestPage />,
				},
				{
					path: '/market',
					element: <MarketPage />,
				},
			],
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
