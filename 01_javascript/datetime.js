/*  DATE FORMAT */

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date(); // create a date object
console.log(date); // print the universal GMT date and time
console.log(date.toString()); // print the date time in as a string 
console.log(date.toDateString());// print the date as a string 
console.log(date.toUTCString());// print the date time with GMT standards as a string 
console.log(date.toISOString());// print the date time with ISO Standards as a string 
let mili = Date.parse("June 25, 2025"); // get time difference in miliseconds till mention from (1, jan 1970).
console.log(mili); // print time differnce in miliseconds
let dates = new Date(Date.parse("June 25, 2025")); // reconvert the miliseconds time back into date format
console.log(dates);
console.log(date.getFullYear()); // print current year
console.log(date.getMonth()); // print current Month
console.log(date.getDate()); // print the current date of current month
console.log(date.getDay()); // print current day of the week
console.log(date.getTime()); // print time from 1970 to till now in miliseconds

// getHours => for get current Hour as international standard time
// getMinutes => for get current Minute as international standard time
// getSeconds => for get current Second as international standard time
// getMilliseconds => for get current Milli-Seconds as international standard time
// Date.now() => this function provide the date time differnece from 1 january 1970 to till now in miliseconds.. you can Convert this with help of New Date Object

console.log(months[date.getMonth()]); //get the current name of the month from the array according to the match.
console.log(days[date.getDay()]); // get the Current name of the Day from Days of week.


/* function for get differnce between two years */
function get_year_diff(old_date) 
{
    const min = 1000 * 60;
    const hours = min * 60;
    const day = hours * 24;
    const years = day *  365;
   // console.log(years); // we have now current date and time in miliseconds for calculation for get differnce between two years;
    const oldDate = new Date(old_date);// convert old date into miliseconds
    const current = Date.now(); // get current date in form of miliseconds
    let diff = current - oldDate; // get differnce between old date and new date
    return Math.round(diff / years); // calculate (divide the diff with years both are in miliseconds) years and diff and provide a differnce again as result..after that get round of the differnce. after that return the round of value to the call back function.
}

let old_date = "1967-08-15"; // initilize the old date as statically
console.log(get_year_diff(old_date)+ " Years");// call the function for get the result as years differnce between two dates...58 Years


function timezone() {
    // Initialize timezone function to perform operations on system timezone
    let date = new Date();
    console.log(date.getTimezoneOffset()); // Get the difference (in minutes) between UTC/GMT and local system time

    /* 
    ** NOTE **
    
    1. If you receive a **negative value** (e.g., -3, -5, -2), it means your system is **ahead of UTC/GMT**.
       Example: UTC+5:30 (Indian Standard Time)

    2. If you receive **0**, it means your local time is **equal to UTC/GMT** (i.e., UTC+00:00).

    3. If you receive a **positive value** (e.g., +2, +6, 5), it means your system is **behind UTC/GMT**.
       Example: UTC-5 (Eastern Standard Time)

    In our case, we received 0, which means our local timezone is equal to the international time zone (UTC/GMT+00:00).
    */
}

timezone(); // call back function for

/* Date Time Set Methode */

function change_year(){
    let setdate = date.setFullYear(2020, 0, 31); // set the current year, month, date according to the requirement.... here we change the current year(2025-07-01) to (2020-03-31)
    //SetFullYear(2020) for set year
    //setMonth(11) for month **note month of the year in javascript should be between ( 0 for jan - dec for 11) = 12 months
    //setDate(30) for month date

    // suppose you want to change the date as 31 feb 2020, and you put a value like (2020-year, 1-month, 31-date), then you get result as 2020-03-02, because feb month is leap month and its contain (28-29 days) only. then the differnce of the day carry moved to the next month.

    console.log(date);// print the full date after change the year 
}

change_year();//call back function

function get_days_diff()// initilizing the new function for get differnce between the dates
{
    const date = new Date("2025-1-01"); // initialize the new date into the constant variable
    const diff = date.setDate(date.getDate() + 50); //this method genrate a differnce between previous mention date and then sum 50 on previous for get 50 days ago date. if date is 1 january then after reamining dates is 30 so it calculate like (50 -30) = 20 ,so 20th Feb is the next 50th date.
    console.log(date.toString());
}
get_days_diff();