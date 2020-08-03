var currentDayElement = document.querySelector("#currentDay");
var milTime = parseInt(moment().format("HH"));
var startHour = 9;
var formattedDate = moment().format("dddd, MMMM Do");
var timeArray = ["9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"]

var time;
var input;

//Displays the current date
currentDayElement.textContent = formattedDate;

//Creates the timeblocks with their text according to the objects in timeArray
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


    //gives the data of startHour so that it can be formatted to be compared with milTime
    eventText.attr("data-hour", startHour);

    //increments so that we can get the hour(military time) and create if statements for color coding the planner
    startHour++;

    if (localStorage.getItem(timeArray[i]) !== null) {
        eventText.text(localStorage.getItem(timeArray[i]))
    }
  }

$(".saveBtn").append((`<i class="far fa-save fa-2x"></i>`))

$(".saveBtn").on("click", function (event) {
    //targets the eventRows div without explicitly calling the var
    var parent = $(this).parent();

    var textarea = parent.find("textarea");
    //looks for textarea value and defines it as User input
    input = textarea.val();
    var timeEl = parent.find(".hour");

    time = timeEl.text();

    //sets the User input and saves it to the selected time
    localStorage.setItem(time, input)
});

$.each($("textarea"), function () {

    //compares milTime, which is the current hour of the day to our planner headings and color codes them
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