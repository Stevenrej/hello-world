 'use strict';


 let username = prompt('What is your favorite color');
 

 if (username == 'Green'){
     message = 'YES BEST COLOR'
 } else if (username == 'Pink') {
     message = "Oh yeah great choice";
 } else if (username == 'Orange'){
     message = "Third best in my book but still a great choice";
 } else {
     message = 'bad choice but its okay you are still welcome!';
     
 }
 document.write(message);