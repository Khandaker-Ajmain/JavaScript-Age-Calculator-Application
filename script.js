// variables for get input date
var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('choseDate');

// variables for printing results
var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDay = document.getElementById('ageDay');
var ageHour = document.getElementById('ageHour');
var ageValue = document.getElementById('ageValue');
var ageMiliSeconds = document.getElementById('ageMiliSeconds');

datePicker.addEventListener('change', function () {
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    var selectedDate = new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-US', options); 

    choseDate.innerHTML = "DOB" + " : " +  DOB;

    var miliSeconds_Btw_DOB = Date.parse(DOB);
    var miliSeconds_Btw_NOW = Date.now();  

    var age_In_MiliSeconds = miliSeconds_Btw_NOW - miliSeconds_Btw_DOB;

    var mili_seconds = age_In_MiliSeconds;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = day * 365;

    var years = Math.round(mili_seconds / year);
    var months = years * 12;
    var days = years * 365;
    var hours = Math.round(mili_seconds / hour);
    var seconds = Math.round(mili_seconds / second);

    ageYear.innerHTML = years;
    ageMonth.innerHTML = months;
    ageDay.innerHTML = days;
    ageHour.innerHTML = hours;
    ageValue.innerHTML = seconds;
    ageMiliSeconds.innerHTML = mili_seconds;

    document.querySelector('.age-calc').classList.add('expand');
})

