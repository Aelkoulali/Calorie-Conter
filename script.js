// Get Element by Id
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumber = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
// Declare Variable IsError and Set it to False
let isError = false; 
// functions
function cleanInputString(){
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function InInvalidInput(){
    const regex = /\d+e\d+/i;
    return str.match(regex);
}