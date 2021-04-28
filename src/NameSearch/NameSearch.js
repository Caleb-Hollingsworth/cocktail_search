import React, { useState } from 'react';
import { searchAPI } from '../Utils/index';
import axios from 'axios';
import '../CSS/Main.css';

const NameSearch = () => {
	const [drink, setDrink] = useState();
	const [drinks, setDrinks] = useState([]);
	const [nullSearch, setNullSearch] = useState(false);
	const searchNameUrl = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';

	const searchDrink = (e) => {
		e.preventDefault();
		searchAPI(searchNameUrl, drink).then((res) => {
			if (res.data.drinks) {
				setNullSearch(false);
				setDrinks(res.data.drinks);
			} else {
				setNullSearch(true);
			}
		});
	};
	const drinkList = drinks.map((drink) => {
		return (
			<ul>
				<h3>{drink.strDrink}</h3>
				<h4>Ingredients</h4>
				<li>{drink.strIngredient1}</li>
				<li>{drink.strIngredient2}</li>
				<li>{drink.strIngredient3}</li>
				<li>{drink.strIngredient4}</li>
				<div>
					<h4>Instructions:</h4>
					<p>{drink.strInstructions}</p>
				</div>
			</ul>
		);
	});
	return (
		<div>
			<header>
				<h2>Welcome to Cocktail Search</h2>
			</header>
			<main>
				<div>
					<form onSubmit={searchDrink}>
						<label>
							Search Cocktails
							<input
								type='text'
								name='search'
								placeholder='cocktails'
								onChange={(e) => setDrink(e.target.value)}
							/>
						</label>
						<input type='submit' title='Search' />
					</form>
				</div>
				<div>{drinks && drinkList}</div>
				<div>
					{nullSearch && (
						<p>Oops! There are no drinks with the name {drink}.</p>
					)}
				</div>
			</main>
		</div>
	);
};

export default NameSearch;
