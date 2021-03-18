import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = removalID => {
		setCart(
			cart.filter((item, index) => {
				return (removalID !== index ? true : false)
			})
		);
	}

	return (
		<ProductContext.Provider value={{ products, cart, addItem, removeItem }}>
		<CartContext.Provider value={{ cart, removeItem }}>

		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} removeItem={removeItem} />
			</Route>
		</div>

		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
