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
	//hook for changing search type and resetting page;
	const [reset, setReset] = useState(false);

	//function that calls axios request and sets drinks
	const searchDrink = (e) => {
		e.preventDefault();
		searchAPI(url, query).then((res) => {
			console.log(res);
			if (res.data.drinks) {
				setNullSearch(false);
				setDrinks(res.data.drinks);
				setReset(false);
			} else {
				setNullSearch(true);
			}
		});
	};
	//function that changes search type ie by ingredient or by name
	const changeSearchType = () => {
		setReset(true);
		if (type === 'Cocktail Name') {
			setUrl(searchIngredientUrl);
			setType('Ingredient');
		} else {
			setUrl(searchNameUrl);
			setType('Cocktail Name');
		}
	};

	return (
		<div className='search-container'>
			<header>
				<h2>Welcome to Cocktail Search</h2>
			</header>
			<main>
				<div className='search-info'>
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
				<div className='search-form'>
					<form onSubmit={searchDrink}>
						<label>
							Search Cocktails
							<input
								className='search-form-input'
								type='text'
								name='search'
								placeholder='cocktails'
								onChange={(e) => setQuery(e.target.value)}
							/>
						</label>
						<input
							className='search-form-button'
							type='submit'
							title='Search'
						/>
					</form>
				</div>
				<div className='cocktail-list'>
					{drinks && !reset && <CocktailCards drinks={drinks} type={type} />}
				</div>
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
