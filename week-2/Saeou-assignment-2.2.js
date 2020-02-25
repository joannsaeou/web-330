var header = require("../Saeou-headers");
/*
============================================
; Title:  Saeou-assignment-2.2.js
; Author: Joann Saeou
; Date:   25 February 2020
; Description: prototypes Javascript week 2
;===========================================
*/


var person = {
    getAge: function() {

        return this.age;

    }
};

var joann = Object.create(person, {
    "age": {
        "value": "27"
    },
    "fullName": {
        "value": "Joann Saeou"
    }



});


joann.getAge();

console.log("\n" + "The person's full name is: '%s'", joann.fullName);
console.log("\n" + "The person's age is: '%s'", joann.age);


/*
 Expected output:

 Joann Saeou
 Assignment 2.2
 02/25/20

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program





// end program