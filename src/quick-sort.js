'use strict';

function quickSort(input) {
  
    if(input.length>0){
        if(!isNaN(input[0])){
             input = input.sort(function (a, b) {  return a - b;  });       
        }else{
            input = input.sort();
        }
   
    }
    
     return input;
}
module.exports = quickSort;