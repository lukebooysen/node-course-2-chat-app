var moment = require('moment');



// var date = new Date();

// console.log(date.getMonth());

// var date  = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY '));

new Date().getTime()
var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 1234;
var date  = moment(createdAt);
console.log(date.format('h:mm a'));