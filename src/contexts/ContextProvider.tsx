import { ReactNode } from 'react';
import { BasketProvider } from './basket.context';

interface Props {
	children: ReactNode;
}
export const ContextProvider = ({ children }: Props) => {
	return <BasketProvider>{children}</BasketProvider>;
};
