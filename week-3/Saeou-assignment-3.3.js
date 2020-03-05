/*
============================================
; Title:  Saeou-assignment-3.3.js
; Author: Joann Saeou
; Date:   05 March 2020
; Description: singleton pattern  Javascript week 3
;===========================================
*/

const header = require('../Saeou-headers');

console.log(header.display("Joann", "Saeou", "3.3 header"));




/*
 Expected output:

 Joann Saeou
 Saeou-assignment-3.3.js
 03/05/2020

 Same database instance? true

*/

// start program




var DatabaseSingleton = (function() {
    var instance;

    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database Instance? %s ", oracle === postgres);

    databaseSingletonTest();
}




// end program