import { RootRouter } from './routes';
import { ContextProvider } from './contexts/ContextProvider';

function App() {
	return (
		<ContextProvider>
			<RootRouter />
		</ContextProvider>
	);
}

export default App;
