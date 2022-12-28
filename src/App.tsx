import { RootRouter } from './routes';
import { ContextProvider } from './contexts/ContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<RootRouter />
			</ContextProvider>
		</QueryClientProvider>
	);
}

export default App;
