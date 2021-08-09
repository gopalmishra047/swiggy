import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const AvailableMeals = () => {

  const [availableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  
  useEffect(() => {
    const fetchMeals = async () => {
     const response = await fetch("http://localhost:8080/order/getAllMeals");
     if(!response.ok){
       throw new Error("Something went wrong !");
     }
     const responseData = await response.json();
     const loadedMeals = [];

     for(const meal in responseData){
       loadedMeals.push({
         id: responseData[meal].id,
         name: responseData[meal].name,
         description: responseData[meal].description,
         price: responseData[meal].price
       });
       setIsLoading(false);
     }
     setAvailableMeals(loadedMeals);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    }) 
  },[]);

   if(httpError){
    return (
      <section className = {classes.mealsLoadingError}>
        <p>{httpError}</p>
      </section>
    );
  }

  if(isLoading){
    return (
      <section className = {classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealItem = availableMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItem}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
