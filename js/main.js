//import items data
import { itemsData } from '../data/data.js';
import { renderItems } from './components/renderItems.js';
//items logic
renderItems(itemsData);

//import snacks items data
import { snacksItems } from '../data/snacksItems.js';
import { renderSnacksItems } from './components/renderSnacksItems.js';
//items logic
renderSnacksItems(snacksItems);

//import desserts items data
import { dessertsItems } from '../data/dessertsItems.js';
import { renderDessertsItems } from './components/renderDessertsItems.js';
//items logic
renderDessertsItems(dessertsItems);

//import drinks items data
import { drinksItems } from '../data/drinksItems.js';
import { renderDrinksItems } from './components/renderDrinksItems.js';
//items logic
renderDrinksItems(drinksItems);

//hero
import heroData from "../data/heroData.js";


//rendering function
import { Hero } from "./components/Hero.js";

//hero
new Hero(heroData);