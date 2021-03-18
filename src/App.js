import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = removalID => {
		const newArr = cart.map((item, index) => {
			return (removalID !== index ? true : false);
		})

		setCart(
			cart.filter((item, index) => {
				return (removalID !== index ? true : false)
			})
		);
	}

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} removeItem={removeItem} />
			</Route>
		</div>
	);
}

export default App;
