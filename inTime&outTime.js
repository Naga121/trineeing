
let inTimeHours;
let inTimeMinutes;
let outTimeHours;
let outTimeMinutes;

function getInTime() {
    var inTime = document.getElementById('inTime').value;
    var onlyTime = inTime.split('T')[1];
    var hours = parseInt(onlyTime.split(':')[0]);
    inTimeHours = hours;
    var minutes = parseInt(onlyTime.split(':')[1]);
    inTimeMinutes = minutes;
    if (hours < 9) {
        document.getElementById('timeIn1').innerHTML = 'Good Employee';
    } else {
        document.getElementById('timeOut1').innerHTML = 'You came late by ' + (hours - 9) + "hours and " + minutes + 'minutes';
    }
}
function getOutTime() {
    var outTime = document.getElementById('outTime').value;
    var onlyTime = outTime.split('T')[1];
    var hours = parseInt(onlyTime.split(':')[0]);
    outTimeHours = hours;
    var minutes = parseInt(onlyTime.split(':')[1]);
    outTimeMinutes = minutes
    if (hours < 18) {
        document.getElementById('timeIn2').innerHTML = 'Do you take permisson?';
    } else {
        document.getElementById('timeOut2').innerHTML = 'have a nice day';
    }
}

function totalWork() {
    let error = ""
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    console.log(inTimeHours, outTimeHours);
    if (id.trim().length == 0) {
        error = error + "<h5>Enter your id</h5>"
    }
    if (name.trim().length == 0) {
        error = error + "<h5>Enter your name</h5>"
    }
    if (inTimeHours == undefined) {
        error = error + "<h5>Enter your In time</h5>"
    }
    if (outTimeHours == undefined) {
        error = error + "<h5>Enter your Out time</h5>"
    }
    document.getElementById('totalWorkingHours').innerHTML = error;
    if (error == "") {
        if (outTimeHours - inTimeHours >= 0) {
            let totalMinutes = outTimeMinutes - inTimeMinutes;
            let totalHours = outTimeHours - inTimeHours;
            if (totalMinutes < 0) {
                totalHours = totalHours - 1;
                totalMinutes = 60 + totalMinutes;
            }
            document.getElementById('totalWorkingHours').innerHTML = `<h5> ${document.getElementById('id').value} your total workng hours are : </h5>`
                + `<h5>${totalHours} hours and ${totalMinutes} minutes.</h5>`
        }
        else {
            document.getElementById('totalWorkingHours').innerHTML = "Please enter time logically"
        }
    }


}