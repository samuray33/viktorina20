let TestTrueOrFalse = document.getElementById('TestTrueOrFalse');
let TimeOn = document.getElementById('TimeOn');
let CountRight = document.getElementById('CountRight');

let params = window.location.href.split('?')[1].split('&');

let time = params[0].split('=')[1];
let q = params[1].split('=')[1];

let min = 9 - Number(time.split(':')[0]);
let sec = 59 - Number(time.split(':')[1]);

let percent = Number(q) / 20 * 100;

console.log(percent)

let test = "Тест "

if (percent < 60) {
    test += "не пройден!"
} else {
    test += "пройден!"
}

TestTrueOrFalse.innerText = test
TimeOn.innerText = "время: " + min + ":" + sec;
CountRight.innerText = "вопросов: " + q + "/20";