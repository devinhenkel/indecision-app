//import './utils.js';
import { utils } from './utils.js';
import person from './person.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running! woot! blart!!!');
console.log(utils.square(9));

const age = 77;
const email = "test@test.org";
console.log('Adult: ' + person.isAdult(age));
console.log('Can drink: ' + person.canDrink(age));
console.log('Is Senior: ' + person.isSenior(age));
console.log('Is email: ' + validator.isEmail(email));

const template = (
    <div>
        <h1>This is JSX from Webpack!</h1>
        <p>{email} is an email: {validator.isEmail(email)?'true':'false'}</p>
    </div>
);

const approot = document.getElementById('app');

ReactDOM.render(template, approot);