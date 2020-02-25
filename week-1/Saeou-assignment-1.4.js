var header = require("./Saeou-header");
/*
============================================
; Title:  Saeou-assignment-1.4.js
; Author: Joann Saeou
; Date:   18 February 2020
; Description: Duck Typing Javascript week 1
;===========================================
*/



function Car(model) {

    this.model = model;

}
Car.prototype.start = function() {
    console.log("Car added to the racetrack!   ");

}


function Truck(model, year) {

    this.model = model;
    this.year = year;

}
Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!   ");

}



function Jeep(mode, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;

}

Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!   ");

}

var racetrack = [];

function driveIt(vehicle) {
    vehicle.start();

    racetrack.push(vehicle);


}

var ram = new Truck("Ram", "2020");
var jaguar = new Car("Jaguar");
var cherokee = new Jeep("Cherokee", "2020", "red");

console.log("");

driveIt("ram");
driveIt("jaguar");
driveIt("cherokee");

console.log("\n-- The following vehicles have been added to the racetrack! --");

for (var x = 0; x < racetrack.length; x++) {
    console.log(racetrack(x).constructor.name + ": " + racetrack(x).model);

}



























/*
 Expected output:

 Joann Saeou
 <Assignment 1.4 duck typing
 <02/18/2020>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program





// end progra