

// setInterval(function () {
//     console.log("HELLO WORLD")
// }, 3000)

// console.log("HELLO 1")

// setTimeout(function(){
//     console.log("HELLO WORLD 2 timeout")
// } , 3000)

// console.log("HELLO 3")

var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")
var startBtn = document.getElementById("startBtn")

var min = 0
var sec = 0
var msec = 0

function timer() {
    msec++
    // console.log("timer", msec)
    msecHeading.innerHTML = msec

    if (msec === 100) {
        console.log("1 sec complete")
        msec = 0
        sec++
        secHeading.innerHTML = sec
    }

    if (sec > 59) {
        sec = 0
        console.log("1 min complete")
        min++
        minHeading.innerHTML = min
    }


}


var interval

function startTimer(ele) {
    interval = setInterval(timer, 10)
    startBtn.disabled = true
}

function stopTimer() {
    clearInterval(interval)
    startBtn.disabled = false
}


function resetTimer() {
    clearInterval(interval)
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = 0
    secHeading.innerHTML = 0
    msecHeading.innerHTML = 0

    startBtn.disabled = false

}