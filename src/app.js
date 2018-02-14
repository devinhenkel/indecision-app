//import './utils.js';
import { utils } from './utils.js';
import person from './person.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running! woot! blart!!!');
console.log(utils.square(9));

const age = 77;
console.log('Adult: ' + person.isAdult(age));
console.log('Can drink: ' + person.canDrink(age));
console.log('Is Senior: ' + person.isSenior(age));

const template = <h1>This is JSX from Webpack!</h1>;

const approot = document.getElementById('app');

ReactDOM.render(template, approot);