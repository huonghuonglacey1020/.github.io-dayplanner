$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss a"));

let m = moment()
console.log(`toString() => ${m.toString()}`);
console.log(`toISOString() => ${m.toISOString()}`);







function getTime() {
    var now = moment().format('h');
    $(".row").each(function () {
        var timeRow = parseInt($(this).attr("id").split("-")[1]);
        if (timeRow < now) {
            $(this).addClass("done");
            $('#text' + 1).css('background-color', 'lightgray')
        }
        else if (timeRow === now) {
            $(this).removeClass("done");
            $(this).addClass("now");
            $('#text' +1).css('background-color', 'red')
        }
        else {
            $(this).removeClass("done");
            $(this).removeClass("now");
            $(this).addClass("future");
        }
    });
}



$("#9h .text").val(localStorage.getItem("9h"));
$("#10h .text").val(localStorage.getItem("10h"));
$("#11h .text").val(localStorage.getItem("11h"));
$("#12h .text").val(localStorage.getItem("12h"));
$("#1h .text").val(localStorage.getItem("1h"));
$("#2h .text").val(localStorage.getItem("2h"));
$("#3h .text").val(localStorage.getItem("3h"));
$("#4h .text").val(localStorage.getItem("4h"));
$("#5h .text").val(localStorage.getItem("5h"));



$(document).ready(function () {
    $(".fas fa-save").on("click", function () {
        var value = $(this).siblings(".text").val();
        var now = $(this).parent().attr("id");
        localStorage.setItem(now, value);
    });

    getTime();
    var interval = setInterval(getTime, 60000);

});
getTime();