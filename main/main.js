"use strict";
module.exports = function main(inputs) {
    // write your code here...
    let distances = inputs.distance;
    let parkTime = inputs.parkTime;
    let mile_money = 0;
    let time_money = parkTime * 0.25;
    if(distances <= 2 ){
    	mile_money = 6;
    }else if(distances <= 8){
    	mile_money = 6 + 0.8 * (distances - 2);
    }else if(distances > 8){
    	mile_money = 6 + 4.8 + 1.2 * (distances - 8);
    }
    return Math.round(mile_money + time_money);

};
