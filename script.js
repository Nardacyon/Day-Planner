var currentDayElement = document.querySelector("#currentDay");
var timeblockHours = 9;
var formattedHours;

var formattedDate = moment().format("dddd, MMMM Do");

getCurrentDate();
createTimeblocks();

function getCurrentDate() {
    currentDayElement.textContent = formattedDate;
}


//This function may have to be edited for moment.js formatting 
function createTimeblocks() {
    for (let i = 0; i < timeblockHours; i++) {
        let hourRows = $("<div>");
        let hourHeader = $("<div>")
        let descriptionCol = $("<div>");
        let textarea = $("<textarea>");

        hourRows.addClass("time-block row future");
        hourHeader.addClass("time-block row hour");
        descriptionCol.addClass("row description");
        textarea.addClass("col-8");

        descriptionCol.append(textarea);

        
        
        let hour = 9 + i;
        console.log(hour);

        if (hour > 12) {
            hourHeader.text(hour - 12 + " p.m.");
            hourRows.append(hourHeader);
            hourRows.append(descriptionCol);
            $(".container").append(hourRows);
        } else {
            hourHeader.text(hour + " a.m.");
            hourRows.append(hourHeader);
            hourRows.append(descriptionCol);
            $(".container").append(hourRows);
        }
        console.log(hourRows);
    }
//append to th, then th to tr, tr to container


}

