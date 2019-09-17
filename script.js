var countVal = 0;
var d = new Date();;
var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
var month = d.getMonth();;
var year = d.getFullYear();;
var first_date = month_name[month] + " " + 1 + " " + year;
var table;
var tr;
var td;
var slider;
var output;
var rowIndex;
var colIndex;
var sliderYear;
var sliderDay;
var outputYear;
var outputDay;
var seldate1;
var count;
var currentDayCount;
var pageLoadCompleted = false;
var tmp = new Date(first_date).toDateString();;
var first_day = tmp.substring(0, 3);;
var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];;
var day_no = day_name.indexOf(first_day);
var days = new Date(year, month + 1, 0).getDate();;
var calendar;
var rIndex, cIndex;
var isClickOnDate = false;
var clickCount = 0;
var mouseOverCount = 0;
var fromDate;
var fromYear;
var fromMonth;
var toDate;


function calLoad() {
    calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    document.getElementById("calendar-dates").appendChild(calendar);
    slider = document.getElementById("myRange");
    output = document.getElementById("demo");
    sliderDay = document.getElementById("myRangeDay");
    outputDay = document.getElementById("day_val")
    outputYear = document.getElementById("year_val")
    sliderYear = document.getElementById("myRangeYear");
    var realMonth = month + 1;
    slider.value = realMonth;
    sliderDay.value = currentDayCount;
    sliderDay.max = count - 1;
    outputDay.innerHTML = sliderDay.value;
    output.innerHTML = month_name[slider.value - 1];
    outputYear.innerHTML = year;
    sliderYear.max = year + 50;
    sliderYear.min = year - 50;
    sliderYear.value = year;
    pageLoadCompleted = true;

}

function sliderChange() {

    output.innerHTML = month_name[slider.value - 1];
    outputDay.innerHTML = sliderDay.value;
    outputYear.innerHTML = sliderYear.value;
    year = sliderYear.value;
    month = slider.value - 1;
    first_date = month_name[month] + " " + 1 + " " + year;
    tmp = new Date(first_date).toDateString();
    first_day = tmp.substring(0, 3);
    day_no = day_name.indexOf(first_day);
    days = new Date(year, month + 1, 0).getDate();
    calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    let tbl = document.getElementById("calendar-dates");
    tbl.innerHTML = "";
    document.getElementById("calendar-dates").appendChild(calendar);

}

window.onload = function() {

    calLoad();

}

function over() {

    var x = document.getElementById("dataValue").rows.length;
    document.getElementById("event-happnd").innerHTML = "mouse moved " + x;

}



function nextYear() {

    year = parseInt(year) + 1;
    sliderYear.value = year;

    outputYear.innerHTML = sliderYear.value;
    first_date = month_name[month] + " " + 1 + " " + year;
    tmp = new Date(first_date).toDateString();
    first_day = tmp.substring(0, 3);
    day_no = day_name.indexOf(first_day);
    days = new Date(year, month + 1, 0).getDate();
    calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    let tbl = document.getElementById("calendar-dates");
    tbl.innerHTML = "";
    document.getElementById("calendar-dates").appendChild(calendar);
    sliderDay.max = count - 1;
}

function previousYear() {

    year = year - 1;
    sliderYear.value = year;
    outputYear.innerHTML = sliderYear.value;
    first_date = month_name[month] + " " + 1 + " " + year;
    tmp = new Date(first_date).toDateString();
    first_day = tmp.substring(0, 3);
    day_no = day_name.indexOf(first_day);
    days = new Date(year, month + 1, 0).getDate();
    calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    let tbl = document.getElementById("calendar-dates");
    tbl.innerHTML = "";
    document.getElementById("calendar-dates").appendChild(calendar);
    sliderDay.max = count - 1;
}



function previous() {

    year = (month === 0) ? year - 1 : year;
    sliderYear.value = year;
    outputYear.innerHTML = sliderYear.value;
    month = (month === 0) ? 11 : month - 1;
    slider.value = month + 1;
    output.innerHTML = month_name[slider.value - 1];
    first_date = month_name[month] + " " + 1 + " " + year;
    tmp = new Date(first_date).toDateString();
    first_day = tmp.substring(0, 3);
    day_no = day_name.indexOf(first_day);
    days = new Date(year, month + 1, 0).getDate();
    calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    let tbl = document.getElementById("calendar-dates");
    tbl.innerHTML = "";
    document.getElementById("calendar-dates").appendChild(calendar);
    sliderDay.max = count - 1;

}

function clickedTable() {

    table = document.getElementById("dataValue");
    size = document.getElementById("dataValue").rows.length;
    clickCount++;
    var clickDate; //= table.rows[rIndex].cells[cIndex - 1].innerHTML;
    for (var i = 1; i < size; i++) {

        // row cells
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].onclick = function() {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex + 1;
                rowIndex = rIndex;
                colIndex = cIndex;
                clickDate = table.rows[rIndex].cells[cIndex - 1].innerHTML;
                console.log("mouse down  " + fromDate + " " + month + " " + year);
                console.log("click on " + fromDate);
                sliderDay.value = fromDate;
                outputDay.innerHTML = sliderDay.value;

            };
        }
    }



    if (clickCount % 2 == 0) {

        tmp = new Date(first_date).toDateString();
        first_day = tmp.substring(0, 3);
        day_no = day_name.indexOf(first_day);
        days = new Date(year, month + 1, 0).getDate();
        calendar = get_calendar_ontouch(day_no, days);
        document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
        let tbl = document.getElementById("calendar-dates");
        tbl.innerHTML = "";
        document.getElementById("calendar-dates").appendChild(calendar);


    }





}

function mouseOverFun() {

    table = document.getElementById("dataValue");
    size = document.getElementById("dataValue").rows.length;


    for (var i = 1; i < size; i++) {

        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].onclick = function() {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex + 1;
                rowIndex = rIndex;
                colIndex = cIndex;

            };
        }
    }
}

function mouseDown() {


    table = document.getElementById("dataValue");
    size = document.getElementById("dataValue").rows.length;


    for (var i = 0; i < size; i++) {
        // row cells
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].onmousedown = function() {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex + 1;
                fromDate = table.rows[rIndex].cells[cIndex - 1].innerHTML;
                console.log("mouse down  " + fromDate + " " + month + " " + year);
                // alert(table.rows[rIndex].cells[cIndex - 1].innerHTML)

            };
        }
    }

}



function mouseUp() {


    table = document.getElementById("dataValue");
    size = document.getElementById("dataValue").rows.length;
    seldate1 = document.getElementById("seldate")
    var msup = true;


    for (var i = 0; i < size; i++) {
        // row cells
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].onmouseup = function() {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex + 1;
                toDate = table.rows[rIndex].cells[cIndex - 1].innerHTML;
                console.log("mouse up " + toDate + " " + month + " " + year)
                    // alert(table.rows[rIndex].cells[cIndex - 1].innerHTML)

            };
        }
    }

    console.log(fromDate + "  " + toDate + "   oustside");

    if (parseInt(toDate) == parseInt(fromDate)) {
        toDate = 0;
        fromDate = 0;
        console.log(toDate + "  " + fromDate + "  equal");
        // seldate1.innerHTML = 1;
        seldate1.innerHTML = "please choose dates";
    } else if (parseInt(toDate) != 0 && parseInt(fromDate) != 0 && parseInt(toDate) > parseInt(fromDate)) {
        //  rangeDateFun();

        // seldate1.innerHTML = 1;
        seldate1.innerHTML = fromDate + " " + month_name[month] + " " + year + "  To  " + toDate + " " + month_name[month] + " " + year;
        console.log(toDate + "  " + fromDate);
        tmp = new Date(first_date).toDateString();
        first_day = tmp.substring(0, 3);
        day_no = day_name.indexOf(first_day);
        days = new Date(year, month + 1, 0).getDate();
        calendar = rangeDateFun(day_no, days);
        document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
        let tbl = document.getElementById("calendar-dates");
        tbl.innerHTML = "";
        document.getElementById("calendar-dates").appendChild(calendar);
        toDate = 0;
        fromDate = 0;
    }
}

function myFunction() {

}


function next() {

    year = (month === 11) ? parseInt(year) + 1 : year;
    sliderYear.value = year;
    outputYear.innerHTML = sliderYear.value;
    month = (month + 1) % 12;
    slider.value = month + 1;
    output.innerHTML = month_name[slider.value - 1];
    first_date = month_name[month] + " " + 1 + " " + year;
    tmp = new Date(first_date).toDateString();
    first_day = tmp.substring(0, 3);
    day_no = day_name.indexOf(first_day);
    days = new Date(year, month + 1, 0).getDate();
    calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    let tbl = document.getElementById("calendar-dates");
    tbl.innerHTML = "";
    document.getElementById("calendar-dates").appendChild(calendar);
    sliderDay.max = count - 1;

}

function get_calendar(day_no, days) {
    table = document.createElement('table');
    table.setAttribute('id', 'dataValue');
    tr = document.createElement('tr');
    for (var c = 0; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS" [c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    tr = document.createElement('tr');
    var c;
    for (c = 0; c <= 6; c++) {
        if (c == day_no) {
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    count = 1;
    for (; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = count;
        tr.appendChild(td);
        if (pageLoadCompleted && sliderDay.value == count) {
            td.classList.add("day-highlight");
            currentDayCount = count;
            td.backgroundColor = "red"
        }

        if (isClickOnDate && c == cIndex - 1) {
            td.classList.add("day-highlight");
            currentDayCount = count;
            td.backgroundColor = "red"
        }
        count++;
    }
    table.appendChild(tr);
    var moreCount = 0;
    for (var r = 0; r <= 4; r++) {
        tr = document.createElement('tr');
        for (var c = 0; c <= 6; c++) {
            if (count > days) {
                table.appendChild(tr);
                for (; c != 0 && c <= 6; c++) {
                    var td = document.createElement('td');
                    td.innerHTML = "";
                    tr.appendChild(td);
                }


                return table;
            }
            td = document.createElement('td');
            td.innerHTML = count;


            if (count === d.getDate() && year === d.getFullYear() && month === d.getMonth()) {
                td.classList.add("day-highlight");
                currentDayCount = count;
                td.backgroundColor = "red"
            } else if (pageLoadCompleted && sliderDay.value == count) {
                td.classList.add("day-highlight");
                currentDayCount = count;
                td.backgroundColor = "red"
            }
            count++;
            tr.appendChild(td);

        }
        table.appendChild(tr);
    }

    return table;
}

function rangeDateFun() {
    console.log("date found ");
    table = document.createElement('table');
    table.setAttribute('id', 'dataValue');
    tr = document.createElement('tr');
    for (var c = 0; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS" [c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    tr = document.createElement('tr');
    var c;
    for (c = 0; c <= 6; c++) {
        if (c == day_no) {
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    count = 1;
    for (; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = count;
        tr.appendChild(td);

        if (fromDate <= count && toDate >= count) {
            td.classList.add("day-highlight");
            currentDayCount = count;
            td.backgroundColor = "red"
        }
        count++;
    }
    table.appendChild(tr);
    for (var r = 0; r <= 7; r++) {
        tr = document.createElement('tr');
        for (var c = 0; c <= 6; c++) {
            if (count > days) {
                table.appendChild(tr);
                for (; c != 0 && c <= 6; c++) {
                    var td = document.createElement('td');
                    td.innerHTML = "";
                    tr.appendChild(td);
                }
                return table;
            }
            td = document.createElement('td');
            td.innerHTML = count;
            if (fromDate <= count && toDate >= count) {
                td.classList.add("day-highlight");
                currentDayCount = count;
                td.backgroundColor = "red"
            }
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    return table;

}

function get_calendar_ontouch(day_no, days) {
    table = document.createElement('table');
    table.setAttribute('id', 'dataValue');
    tr = document.createElement('tr');
    for (var c = 0; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS" [c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    tr = document.createElement('tr');

    var c;
    for (c = 0; c <= 6; c++) {
        if (c == day_no) {
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    count = 1;
    for (; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = count;
        tr.appendChild(td);
        if (cIndex - 1 == c || rIndex == 1) {

            td.classList.add("day-highlight");
            currentDayCount = count;
            td.backgroundColor = "red"

        }

        if (isClickOnDate && c == cIndex - 1) {
            td.classList.add("day-highlight");
            currentDayCount = count;
            td.backgroundColor = "red"
        }
        count++;
    }
    table.appendChild(tr);
    for (var r = 0; r <= 7; r++) {
        tr = document.createElement('tr');
        for (var c = 0; c <= 6; c++) {
            if (count > days && c == 6) {
                table.appendChild(tr);
                for (; c != 0 && c <= 6; c++) {
                    var td = document.createElement('td');
                    td.innerHTML = "";
                    tr.appendChild(td);
                }
                return table;
            }
            if (count < days) {
                td = document.createElement('td');
                td.innerHTML = count;
            }
            if (cIndex - 1 == c || rIndex - 2 == r) {
                td.classList.add("day-highlight");
                currentDayCount = count;
                td.backgroundColor = "red"
            }
            count++;
            tr.appendChild(td);

        }
        table.appendChild(tr);
    }

    sliderDay.max = count - 1;
    console.log(slider.max);

    return table;
}