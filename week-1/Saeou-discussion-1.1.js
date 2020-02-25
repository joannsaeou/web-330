var header = require("./Saeou-header");
/*
============================================
; Title:  Saeou-assignment-1.1.js
; Author: Joann Saeou
; Date:   18 February 2020
; Description: assignment 1.1 Javascript week 1
;===========================================
*/
function tvShows(title, releaseDate, episodes) {

    this.title = title;
    this.releaseDate = releaseDate;
    this.episodes = episodes;

    tvShows.prototype.toString = function() {
        return this.title + "The Flame's Daughter " + this.releaseDate + " 2013 " +
            this.episodes + " 50 ";
    };

}

//usage

var shows = new Television("The Flame's Daughter", 2013, "50");

console.log(shows.toString()); //a string instance will now being shared between tv shows Object
