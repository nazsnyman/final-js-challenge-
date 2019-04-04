
// Current Date (Question 1 )

var today = new Date();  
var day = today.getDay();  
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
// document.write("Today is : " + daylist[day] + " . ");   

//Current Time  (Question 1 )

var hour = today.getHours();  
// returns the hour from 0-23 of the specific date and time
var minute = today.getMinutes();  
// returns the minute from 0-59 pf the specific date and time
var second = today.getSeconds();  
// returns seconds from 0-59
var prepand = (hour >= 12)? " PM ":" AM ";  
// Convert from 24 hour time to 12 hour time
hour = (hour > 12)? hour - 12: hour;  
if (hour===0 && prepand===' PM ')   
{   
  // it's not midnight or midday on a 12 hour clock
  //both midnight and midday will be 12:00:00
if (minute===0 && second===0)  
{   
hour=12;  
prepand=' Noon';  
}   
else  
{   
hour=12;  
prepand=' PM';  // 12:00:00 on 12hr clock and 24hr clock
}   
}   
if (hour===0 && prepand===' AM ')   
{   

if (minute===0 && second===0)  
{   
hour=12;  
prepand=' Midnight';  
}   
else  
{   
hour=12;  
prepand=' AM';  
// document.writeln('<div id="innertext">' +"Current Time : "+hour + prepand + " : " + minute + " : " + second + '</div>');  
}   
}   

// If a string starts with Java (Question 3 )

function startsWith (str)
{
  if (str.length < 4) // the string must have 4 letters otherwise it returns false
  {
    return false;
  }
  front = str.substring(0, 4); // this is telling the function to grab the first letter of the string and the length is 4
  if (front == 'Java') 
  {
    return true;
  }
   else 
   {
    return false;
    // document.writeln('<div id="innertext">' + startsWith ("Java") + '</div>');
    // document.writeln('<div id="innertext">' + startsWith ("Worry") + '</div>');
    // document.writeln('<div id="innertext">' + startsWith("Java") +'</div>' );
  }
}

// The largest of 3 Integers 

function biggest_of_three(x, y, z) 
 {
  max_val = 0; 
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
  //document.writeln('<div id="innertext">' + biggest_of_three(2,40,20) +'</div>');
  //document.writeln('<div id="innertext">' + biggest_of_three(7,30,83) +'</div>');
  //document.writeln('<div id="innertext">' + biggest_of_three(3500,5000,4000) +'</div>');
}


// Capitilize the first letter of every word in a given string 

function capital_letter(str) 
{
    str = str.split(" "); //splits a string into an array of substrings, and returns the new array.

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);// tells it to make the first letter of every word uppercase
    }

    return str.join(" "); // joins substings back to a normal string
    //document.write('<div id="innertext">' + capital_letter("the first letter of each word in my string should be a capital letter")+'</div>');
}

// Covert a given number to minutes and hours 
function convert_time (num)
 { 
  var hours = Math.floor(num / 60); // rounds num to nearest integer then devides than num by 60
  var minutes = num % 60; //division remainder
  return hours + ":" + minutes;     
  //document.writeln('<div id="innertext">' + convert_time(60) +'</div>');
  //document.writeln('<div id="innertext">' + convert_time(71)+'</div>');
  //document.writeln('<div id="innertext">' + convert_time(180)+'</div>');    
}

