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



function knowthings() {
    document.write('Welcome to my page, I know your favorite color is ' + usercolor);
}



//  document.write('Welcome to my page, I know your favorite color is ' + usercolor);

function myFunction() {
    document.getElementById("demo").innerHTML = "Thanks!";
}
