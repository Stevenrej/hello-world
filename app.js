 'use strict';


 let usercolor = prompt('What is your favorite color');
 let message ;

 if (usercolor == 'Green'){
     message = 'YES BEST COLOR'
 } else if (usercolor == 'Pink') {
     message = "Oh yeah great choice";
 } else if (usercolor == 'Orange'){
     message = "Third best in my book but still a great choice";
 } else {
     message = 'bad choice but its okay you are still welcome!';
     
 }
 document.write(message);

//  document.write('Welcome to my page, I know your favorite color is ' + usercolor);

function myFunction() {
    document.getElementById("demo").innerHTML = "Thanks!";
}