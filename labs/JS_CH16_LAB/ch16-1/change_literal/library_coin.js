"use strict";

const coins= { 
    quarters:0,
    dimes:0,
    nickels:0,
    pennies:0,
    
    makechange:function(cents){
         this.quarters = cents / 25;  // get number of quarters
            this.quarters = Math.floor(this.quarters);
            cents = cents % 25;    

         this.dimes = cents / 10;     // get number of dimes
            this.dimes = Math.floor(this.dimes);
            cents = cents % 10;

         this.nickels = cents / 5;
            this.nickels = Math.floor(this.nickels);
        
         this.pennies = cents % 5;
    }
};