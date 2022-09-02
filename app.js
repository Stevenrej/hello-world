'use strict';
let usercolor
function askcolor() {

    usercolor = prompt('What is your favorite color').toLowerCase();
    let message;

    if (usercolor == 'green') {
        message = 'YES BEST COLOR'
    } else if (usercolor == 'pink') {
        message = "Oh yeah great choice";
    } else if (usercolor == 'orange') {
        message = "Third best in my book but still a great choice";
    } else {

        usercolor = prompt('Wrong favorite color, try again! Be careful though you only get one more chance to pick!!!').toLowerCase();
    }
    if (usercolor == 'green') {
        message = 'YES BEST COLOR'
    } else if (usercolor == 'pink') {
        message = "Oh yeah great choice";
    } else if (usercolor == 'orange') {
        message = "Third best in my book but still a great choice";
    } else {
        message = 'bad choice but its okay you are still welcome!';
    }
    document.write(message);
}



askcolor();


function guesshall() {
    let answer;

    while (answer != 'Hall and Oates') {
        answer = prompt('Who was objectively and subjectively the best reocrindg artist of the 1980s? Hint, it rhymes with Call and Boats.');
        if (answer != 'Hall and Oates') {
            alert('Try again! Like what were you thinking?');
        } else {
            alert('You are correct! You are so smart and have great taste as well!');
        }
    }
}

guesshall();








function knowthings() {
    document.write('Welcome to my page, I know your favorite color is ' + usercolor);
}



//  document.write('Welcome to my page, I know your favorite color is ' + usercolor);

function myFunction() {
    document.getElementById("demo").innerHTML = "Thanks!";
}



function showrainbow() {

    let output = '';
    let rating = prompt('How many rainbows would you rate my page? 1-5');
    for (let i = 0; i < rating && i < 5; i++) {
        output += "<img class='rainbow' src='images.png'/>";
    }

    return document.write(output);
}