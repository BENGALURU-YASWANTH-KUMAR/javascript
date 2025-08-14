//date objects=> objects that contain values that represent
// dates and times these date objects can be
// changed and formatted using various methods
// Date objects are created using the Date() constructor

const date=new Date();
console.log(date); // Outputs the current date and time

//Date (year, month, day, hours, minutes, seconds, milliseconds)
const specificDate = new Date(2023, 9, 2, 12, 0, 0); // October is month 9 (0-indexed)
console.log(specificDate); // Outputs: Sat Oct 01 2023 12:

const stringdate=new Date("2023-10-02T12:00:00Z"); // ISO 8601 format
console.log(stringdate); // Outputs: Mon Oct 02 2023 12:00

const daywithsecond=new Date(2700000000000);
console.log(daywithsecond); // Outputs: Thu Jan 01 2050 00:00:00 GMT+0000 (Coordinated Universal Time)

daywithsecond.getFullYear();// Returns the year (e.g., 2050)
daywithsecond.getMonth(); // Returns the month (0-11)
daywithsecond.getDate(); // Returns the day of the month (1-31) 
daywithsecond.getHours(); // Returns the hour (0-23)
daywithsecond.getMinutes(); // Returns the minutes (0-59)
daywithsecond.getSeconds(); // Returns the seconds (0-59)
daywithsecond.getMilliseconds(); // Returns the milliseconds (0-999)
daywithsecond.getDay(); // Returns the day of the week (0-6, where


daywithsecond.setFullYear(2051); // Sets the year to 2051
daywithsecond.setMonth(11); // Sets the month to December (11)
daywithsecond.setDate(25); // Sets the day of the month to 25
daywithsecond.setHours(15); // Sets the hour to 3 PM
daywithsecond.setMinutes(30); // Sets the minutes to 30
daywithsecond.setSeconds(45); // Sets the seconds to 45
daywithsecond.setMilliseconds(500); // Sets the milliseconds to 500
daywithsecond.setTime(1700000000000); // Sets the time in milliseconds since epoch
console.log(daywithsecond); // Outputs the updated date and time
console.log(daywithsecond.toString()); // Outputs the date as a string
console.log(daywithsecond.toISOString()); // Outputs the date in ISO 8601 format
console.log(daywithsecond.toLocaleDateString()); // Outputs the date in local format
console.log(daywithsecond.toLocaleTimeString()); // Outputs the time in local format
console.log(daywithsecond.toUTCString()); // Outputs the date in UTC format

