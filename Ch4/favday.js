// Darrell Holtz 4/3/2025
'use strict';

const favDay = prompt("What is your favorite day of the week? (e.g., Monday, Tuesday)");

switch (favDay.toLowerCase()) {

    case "sunday":
        console.log('Sunday');
        break;

    case "monday":
        console.log('Monday');
        break;

    case "tuesday":
        console.log('Tuesday');
        break;

    case "wednesday":
        console.log('Wednesday');
        break;

    case "thursday":
        console.log('Thursday');
        break;

    case "friday":
        console.log('Friday');
        break;
    
    case "saturday":
        console.log('Saturday');
        break;

    default:
        console.log('That is not a day of the week.')
}