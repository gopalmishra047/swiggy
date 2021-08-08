import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const AvailableMeals = () => {

  const [availableMeals, setAvailableMeals] = useState([]);
  
  useEffect(() => {
    const fetchMeals = async () => {
     const response = await fetch("http://localhost:8080/order/getAllMeals");
     const responseData = await response.json();
     const loadedMeals = [];

     for(const meal in responseData){
       loadedMeals.push({
         id: responseData[meal].id,
         name: responseData[meal].name,
         description: responseData[meal].description,
         price: responseData[meal].price
       });
     }
     setAvailableMeals(loadedMeals);
    };
    fetchMeals();
  },[]);


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
