import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { AppTemplate } from 'templates/AppTemplate';

const MainPage = lazy(async () => await import('pages/Main'));
const TestPage = lazy(async () => await import('pages/Test'));

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
