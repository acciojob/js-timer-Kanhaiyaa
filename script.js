// write js code here if required
function updateTimer() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Month is zero-based, so we add 1
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if necessary
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timerString = day + '/' + month + '/' + year + ', ' + hours + ':' + minutes + ':' + seconds;
    document.getElementById('timer').textContent = timerString;
}

// Update timer every second
setInterval(updateTimer, 1000);

// Initial call to update timer immediately
updateTimer()