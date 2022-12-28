/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-case-declarations */
import React, { createContext, useContext, useReducer } from 'react';

interface Props {
	children: React.ReactNode;
}

// Create the context
const BasketContext = createContext<{
	basket: any[];
	dispatch: React.Dispatch<any>;
}>({
	basket: [],
	dispatch: () => {},
});

// Create the reducer
const basketReducer = (state: any[], action: any) => {
	switch (action.type) {
		case 'ADD_ITEM':
			// eslint-disable-next-line no-case-declarations
			const newState = [...state, action.item];
			localStorage.setItem('basket', JSON.stringify(newState));
			return [...state, action.item];
		case 'REMOVE_ITEM':
			const index = state.findIndex((item) => item.id === action.item.id);
			if (index === -1) {
				return state;
			}
			const filteredState = [
				...state.slice(0, index),
				...state.slice(index + 1),
			];
			localStorage.setItem('basket', JSON.stringify(filteredState));
			return filteredState;
		case 'CLEAR_CART':
			localStorage.setItem('basket', '[]');
			return [];
		default:
			return state;
	}
};

// Create the context provider
function BasketProvider({ children }: Props) {
	const storedCart = localStorage.getItem('basket');
	const initialCart = storedCart ? JSON.parse(storedCart) : [];

	const [basket, dispatch] = useReducer(basketReducer, initialCart);

	return (
		<BasketContext.Provider value={{ basket, dispatch }}>
			{children}
		</BasketContext.Provider>
	);
}

// Create a hook to use the context
const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
