/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const char = [...s];
    var num =0;
        for(var i=0; i <= char.length; i++){

            if(char[i]==="I" 
            && char[i+1] !== "X" && char[i+1] !== "V"){
                num += 1;
            }
            if(char[i] === "M" && char[i-1] !== "C"){
                num += 1000;
            }
            if(char[i] === "M" && char[i-1] === "C"){
                num += 900;
            }
            if(char[i]=== "D"&& char[i-1] !== "C"){
                num += 500;
            }
            if(char[i]=== "D"&& char[i-1] === "C"){
                num += 400;
            }
            if(char[i]==="C" && char[i-1] !== "X" 
            && char[i+1] !== "M" && char[i+1] !== "D"){
                num += 100;
            }
            if(char[i]==="C" && char[i-1] === "X" ){
                num += 90;
            }
            if(char[i]==="L" && char[i-1] !== "X"){
                num += 50;
            }
            if(char[i]==="L" && char[i-1] === "X"){
                num += 40;
            }
            if(char[i]==="X" && char[i-1] !== "I"
            && char[i+1] !== "L" && char[i+1] !== "C"){
                num += 10;
            }
            if(char[i]==="X" && char[i-1] === "I"){
                num += 9;
            }
            if(char[i]==="V" && char[i-1] !== "I"){
                num += 5;
            }
            if(char[i]==="V" && char[i-1] === "I"){
                num += 4;
            }     
           
        }
        return num;
};
