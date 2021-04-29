import React from 'react';
import '../CSS/CocktailCard.css';

const CocktailCard = ({ drink, showIndividualCard }) => {
	return (
		<div className='cocktail-card-container'>
			<div onClick={() => showIndividualCard(false)} className='back-button'>
				<p>Go back to list</p>
			</div>
			<div className='cocktail-info-container'>
				<img src={drink.strDrinkThumb} alt='cocktail thumbnail' />
				<ul>
					<h1>{drink.strDrink}</h1>
					<div className='cocktail-ingredients'>
						<h2>Ingredients</h2>

						{drink.strIngredient1 && (
							<li>
								{drink.strMeasure1} {drink.strIngredient1}
							</li>
						)}
						{drink.strIngredient2 && (
							<li>
								{drink.strMeasure2} {drink.strIngredient2}
							</li>
						)}
						{drink.strIngredient3 && (
							<li>
								{drink.strMeasure1} {drink.strIngredient3}
							</li>
						)}
						{drink.strIngredient4 && (
							<li>
								{drink.strMeasure4} {drink.strIngredient4}
							</li>
						)}
						{drink.strIngredient5 && (
							<li>
								{drink.strMeasure5} {drink.strIngredient5}
							</li>
						)}
						{drink.strIngredient6 && (
							<li>
								{drink.strMeasure6} {drink.strIngredient6}
							</li>
						)}
						{drink.strIngredient7 && (
							<li>
								{drink.strMeasure7} {drink.strIngredient7}
							</li>
						)}
						{drink.strIngredient8 && (
							<li>
								{drink.strMeasure8} {drink.strIngredient8}
							</li>
						)}
						{drink.strIngredient9 && (
							<li>
								{drink.strMeasure9} {drink.strIngredient9}
							</li>
						)}
						{drink.strIngredient10 && (
							<li>
								{drink.strMeasure10} {drink.strIngredient10}
							</li>
						)}
						{drink.strIngredient11 && (
							<li>
								{drink.strMeasure11} {drink.strIngredient11}
							</li>
						)}
						{drink.strIngredient12 && (
							<li>
								{drink.strMeasure12} {drink.strIngredient12}
							</li>
						)}
						{drink.strIngredient13 && (
							<li>
								{drink.strMeasure13} {drink.strIngredient13}
							</li>
						)}
						{drink.strIngredient14 && (
							<li>
								{drink.strMeasure14} {drink.strIngredient14}
							</li>
						)}
						{drink.strIngredient15 && (
							<li>
								{drink.strMeasure15} {drink.strIngredient15}
							</li>
						)}
					</div>

					<div className='cocktail-instructions'>
						<h2>Instructions:</h2>
						<p>{drink.strInstructions}</p>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default CocktailCard;
