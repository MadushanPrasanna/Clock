var diallines = document.getElementsByClassName("diallines");
var clke1 = document.getElementsByClassName("clock")[0];

for (var i = 0; i < 60; i++) {
    clke1.innerHTML += "<div class='diallines'></div>";
    diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
    var weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday", 
        "Friday",
        "Saturday",
    ];

    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var date = d.getDate();
    var month = d.getMonth() + 1; 
    var year = d.getFullYear();
    var hdeg = h * 30 + m * (360 / 720);
    var mdeg = m * 6 + 6 * (360 / 3600); 
    var sdeg = s * 6;
    var hE1 = document.querySelector(".hour-hand"); 
    var mE1 = document.querySelector(".minute-hand");
    var sE1 = document.querySelector(".second-hand"); 
    var dateE1 = document.querySelector(".date"); 
    var dayE1 = document.querySelector(".day"); 

    var day = weekDay[d.getDay()];
    if (month < 10) { // Corrected the condition
        month = "0" + month;
    }

    hE1.style.transform = "rotate(" + hdeg + "deg)";
    mE1.style.transform = "rotate(" + mdeg + "deg)";
    sE1.style.transform = "rotate(" + sdeg + "deg)";

    dateE1.innerHTML = date + "/" + month + "/" + year;
    dayE1.innerHTML = day;
}

// Call the clock function to update the clock initially
clock();

// You may want to call the clock function periodically to keep the clock updated
setInterval(clock, 1000); // Update every second
