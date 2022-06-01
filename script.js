$("#currentDay").text(moment().format("ddd, MMM, Qo, YYYY"));

var currentTime = moment().hour();

function hourlyPlanner() {
    $(".time-block").each(function() {
       var chosenTime = parseInt($(this).attr("id").split("hour")[1]);

       if (currentTime > chosenTime) {
           $(this).addClass("future")
       }
       if (currentTime == chosenTime) {
           $(this).addClass("present")
       }
       if (currentTime < chosenTime) {
           $(this).addClass("past")
       }
    })
}