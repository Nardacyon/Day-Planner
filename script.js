var currentDayElement = document.querySelector("#currentDay");
var formattedHours;

var milTime = parseInt(moment().format("HH"));
var startHour = 9;

var index = 0;

var formattedDate = moment().format("dddd, MMMM Do");

var timeArray = ["9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"]

getCurrentDate();

function getCurrentDate() {
    currentDayElement.textContent = formattedDate;
}

//This function may have to be edited for moment.js formatting 
  for (let i = 0; i < timeArray.length; i++) {
    let eventRows = $("<div>");
    eventRows.addClass("row time-block");

    let hourCol = $("<div>");
    hourCol.addClass("col-md-2 hour");
    hourCol.text(timeArray[i]);

    let eventDesc = $("<div>");
    let eventText = $("<textarea>");
    eventText.addClass("description");

    eventDesc.append(eventText);
    
    eventDesc.addClass("col-md-8");

    let saveBtn = $("<button>");
    saveBtn.attr("type", "submit");
    saveBtn.addClass("col-md-2 saveBtn");

    eventRows.append(hourCol);
    eventRows.append(eventDesc);
    eventRows.append(saveBtn);
    $(".container").append(eventRows);

    eventText.attr("data-hour", startHour);

    startHour++;
  }

$.each($("textarea"), function () {
    if (milTime === $(this).data("hour")) {
        $(this).addClass("present")
    }

    if (milTime > $(this).data("hour")) {
        $(this).addClass("past")
    }

    if (milTime < $(this).data("hour")) {
        $(this).addClass("future")
    }
});