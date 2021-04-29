import React, { useState } from 'react';
import CocktailCard from './CocktailCard';
import { searchAPI } from '../Utils/index';

const CocktailCards = ({ drinks, type }) => {
	//hook for selecting individual card
	const [cocktail, setCocktail] = useState();
	const [individualCard, showIndividualCard] = useState(false);

	//url for searching cocktail details
	const detailsUrl = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i=';

	//function for sending cocktail information to cocktailCards

	const selectCocktail = (drink) => {
		type === 'Cocktail Name'
			? nameDetailsSearch(drink)
			: ingredientDetailsSearch(drink);
	};
	const nameDetailsSearch = (drink) => {
		setCocktail(drink);
		showIndividualCard(true);
	};
	const ingredientDetailsSearch = (drink) => {
		searchAPI(detailsUrl, drink.idDrink).then((res) => {
			setCocktail(res.data.drinks[0]);
			showIndividualCard(true);
		});
	};

	const cards = drinks.map((drink, id) => {
		return (
			<div key={id} onClick={() => selectCocktail(drink)}>
				<div>
					<img src={drink.strDrinkThumb} alt='cocktail thumbnail' />
					<h3>{drink.strDrink}</h3>
				</div>
			</div>
		);
	});
	return (
		<div>
			{!individualCard && <div>{cards}</div>}
			{individualCard && (
				<div>
					<CocktailCard
						drink={cocktail}
						showIndividualCard={showIndividualCard}
					/>
				</div>
			)}
		</div>
	);
};

export default CocktailCards;
