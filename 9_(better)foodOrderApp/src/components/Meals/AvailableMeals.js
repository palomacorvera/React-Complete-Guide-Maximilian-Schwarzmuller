import React, {useState, useEffect} from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async() => {
      setIsLoading(true);

      const response = await fetch('https://meals-7a4c0-default-rtdb.firebaseio.com/Meals.json');
      
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    }

    fetchMeals().catch(err => {
      setIsLoading(false);
      setError(err.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let returnState = <ul>{mealsList}</ul>;

  if (isLoading) {
    returnState = <p className={classes.loading}>Loading...</p>
  }

  if (error) {
    returnState = <p className={classes.error}>{error}</p>
  }

  return (
    <section className={classes.meals}>
      <Card>
        {returnState}
      </Card>
    </section>
  );
};

export default AvailableMeals;