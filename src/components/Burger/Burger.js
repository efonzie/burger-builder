import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
        });
    }).reduce((arr, el) => {
        return  arr.concat(el);
    }, []);

    if(ingredients.length === 0){
        ingredients = <p>ALL YOUR INGREDIENTS ARE BELONG TO US</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" ></BurgerIngredient>
            {ingredients}
            <BurgerIngredient type="bread-bottom" ></BurgerIngredient>
        </div>
    );
};

export default burger;