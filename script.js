var currentDayElement = document.querySelector("#currentDay");
var timeblockHours = 9;

var formattedDate = moment().format("dddd, MMMM Do");

getCurrentDate();

function getCurrentDate() {
    currentDayElement.textContent = formattedDate;
}

function createTimeblocks() {
    for (let i = 0; i < timeblockHours; i++) {
        
    }
}