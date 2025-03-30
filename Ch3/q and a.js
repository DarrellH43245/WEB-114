// Darrell Holtz 3-29-2025
'use strict';

let username = prompt('What is your name?');
let proceed = confirm('Do you give your permission to use your name on the webpage?');
let age = prompt('What is your age?');

if (proceed) {
    console.log('Yes, I can use your name on this page. ' + username);
} else {
    console.log('No, you can not use my name on this web page. Privacy Please.');
}

alert('Hi ' + username + '! You are ' + age + ' years old.')

// console.log(username);
// console.log(proceed);
// console.log(age);