import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { AppTemplate } from 'templates/AppTemplate';

const MainPage = lazy(async () => await import('pages/Main'));
const TestPage = lazy(async () => await import('pages/Test'));
const MarketPage = lazy(async () => await import('pages/Market'));
const CabinetPage = lazy(async () => await import('pages/Cabinet'));
const BasketPage = lazy(async () => await import('pages/Basket'));

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
				{
					path: '/basket',
					element: <BasketPage />,
				},
				{
					path: '/cabinet',
					element: <CabinetPage />,
				}
			],
		},
		{
			path: '*',
			element: <div>404</div>,
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
