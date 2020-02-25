var header = require("./Saeou-header");
/*
============================================
; Title:  Saeou-assignment-1.1.js
; Author: Joann Saeou
; Date:   17 February 2020
; Description: Class refresher Javascript week 1
;===========================================
*/

function cellphone(device) {

    this.manufacturer = "Huawei";

    this.model = "JKM-LX3";

    this.color = "black";

    this.price = "$289";


    this.getPrice = function() {

        return this.price + " $289 ";
    };

    this.getModel = function() {

        return this.model + " JKM-LX3 ";
    };

    this.getDetails = function() {

        return this.manufacturer + "Huawei" + this.model + "JKM-LX3" + this.color + "black" + this.price + "$289";

    }
}



var myCellphone = new cellphone("Huawei", "JKM-LX3", "black", 50);

console.log("Manufacturer: " + "  " + myCellphone.manufacturer + "Model:" + "   " + myCellphone.model + "Color: " + "   " + myCellphone.color + "Price: " + myCellphone.price);

/*
 Expected output:
 Joann Saeou
 <assignment 1.3 class refresher>
 <02/17/2020>


 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

// start program

// end program