import React, { useState, useEffect } from 'react';
import Products from './products';
import Navigation from './nav';
import HeroSection from './hero';




const App = () => {

    const [cocktails, setCocktails] = useState([]);
    const [selectedCocktails, setSelectedCocktails] = useState([]);
  
    useEffect(() => {
      const fetchCocktails = async () => {
        try {
          const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
          const data = await response.json();
          setCocktails(data.drinks);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCocktails();
    }, []);
  
    const addToCart = (cocktailId) => {
      const selectedCocktail = cocktails.find((cocktail) => cocktail.idDrink === cocktailId);
      setSelectedCocktails((prevSelectedCocktails) => [
        ...prevSelectedCocktails,
        { ...selectedCocktail, key: `selectedCocktail_${selectedCocktail.idDrink}` }
      ]);
    };

    const removeFromCart = (cocktailId) => {
      setSelectedCocktails((prevSelectedCocktails) => prevSelectedCocktails.filter((cocktail) => cocktail.idDrink !== cocktailId));
    };
    
  
  return (
    <div>
          <Navigation selectedCocktails={selectedCocktails} cocktails={cocktails} addToCart={addToCart} removeFromCart={removeFromCart} />
        <HeroSection />
      <Products cocktails={cocktails} addToCart={addToCart} />

      <div>
        <h2 className="text-white font-bold text-lg mb-4">Selected Cocktails:</h2>
        <ul className="text-white">
          {selectedCocktails.map((cocktail) => (
            <li key={cocktail.key}>{cocktail.strDrink}
            <button onClick={() => removeFromCart(cocktail.idDrink)}>Remove from cart</button>
            <button>({selectedCocktails.length})</button>
            </li>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;