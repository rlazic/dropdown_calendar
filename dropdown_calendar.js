window.addEventListener("DOMContentLoaded", function() {
    var dateInput = document.getElementById("dateInput");
    var dropdownContent = document.querySelector(".dropdown-content");
    var calendar = document.getElementById("calendar");

    // Show/hide dropdown calendar
    dateInput.addEventListener("click", function() {
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    });

    // Populate the calendar with days
    function populateCalendar() {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();
        var selectedDate = new Date(currentYear, currentMonth, 1);

        var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        var firstDayOfWeek = selectedDate.getDay();

        var calendarHTML = "<table>";
        calendarHTML += "<tr><th colspan='7'>" + currentYear + ", " + (currentMonth + 1) + "</th></tr>";
        calendarHTML += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
        calendarHTML += "<tr>";

        for (var i = 0; i < firstDayOfWeek; i++) {
            calendarHTML += "<td></td>";
        }

        for (var day = 1; day <= daysInMonth; day++) {
            calendarHTML += "<td>" + day + "</td>";

            if ((day + firstDayOfWeek) % 7 === 0) {
                calendarHTML += "</tr><tr>";
            }
        }

        calendarHTML += "</tr>";
        calendarHTML += "</table>";

        calendar.innerHTML = calendarHTML;

        // Add click event listener to each day
        var days = calendar.getElementsByTagName("td");
        for (var j = 0; j < days.length; j++) {
            days[j].addEventListener("click", function() {
                var selectedDay = this.innerHTML;
                var selectedDate = new Date(currentYear, currentMonth, selectedDay);
                var formattedDate = selectedDate.toDateString();

                dateInput.value = formattedDate;
                dropdownContent.style.display = "none";
            });
        }
    }

    populateCalendar();
});