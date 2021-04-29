import React, { useState } from 'react';
import { searchAPI } from '../Utils/index';
import CocktailCards from '../Cards/CocktailCards';
import '../CSS/Search.css';

const Search = () => {
	//url for searching by drink name
	const searchNameUrl = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';
	//url for searching by ingredient
	const searchIngredientUrl =
		'https://thecocktaildb.com/api/json/v1/1/filter.php?i=';
	//hook for setting drink to search
	const [query, setQuery] = useState();
	//hook for setting array of drinks returned from axios request
	const [drinks, setDrinks] = useState([]);
	//hook for providing conditional rendering of empty search results
	const [nullSearch, setNullSearch] = useState(false);
	//hook for setting url
	const [url, setUrl] = useState(searchNameUrl);
	//hook for setting type
	const [type, setType] = useState('Cocktail Name');

	//function that calls axios request and sets drinks
	const searchDrink = (e) => {
		e.preventDefault();
		searchAPI(url, query).then((res) => {
			console.log(res);
			if (res.data.drinks) {
				setNullSearch(false);
				setDrinks(res.data.drinks);
			} else {
				setNullSearch(true);
			}
		});
	};
	//function that changes search type ie by ingredient or by name
	const changeSearchType = () => {
		if (type === 'Cocktail Name') {
			setUrl(searchIngredientUrl);
			setType('Ingredient');
		} else {
			setUrl(searchNameUrl);
			setType('Cocktail Name');
		}
	};

	return (
		<div>
			<header>
				<h2>Welcome to Cocktail Search</h2>
			</header>
			<main>
				<div>
					<h3>Currently Searching by {type}</h3>
					<p>
						Switch to searching by{' '}
						<button
							onClick={
								type === 'Cocktail Name'
									? () => changeSearchType('Ingredient')
									: () => changeSearchType('CockTail Name')
							}>
							{type === 'Cocktail Name' ? 'Ingredient' : 'Cocktail Name'}
						</button>
					</p>
				</div>
				<div>
					<form onSubmit={searchDrink}>
						<label>
							Search Cocktails
							<input
								type='text'
								name='search'
								placeholder='cocktails'
								onChange={(e) => setQuery(e.target.value)}
							/>
						</label>
						<input type='submit' title='Search' />
					</form>
				</div>
				<div>{drinks && <CocktailCards drinks={drinks} type={type} />}</div>
				<div>
					{nullSearch && (
						<p>Oops! There are no drinks with the name {query}.</p>
					)}
				</div>
			</main>
		</div>
	);
};

export default Search;
