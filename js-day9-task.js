// logic tasks

//1.i/p: var arr = [3,5,10,15,23,22,25,35,56];
    // o/p: [ 5, 10, 15, 25, 35 ]

// answer

var arr = [3,5,10,15,23,22,25,35,56]
var op = [];
for(i in arr){
  if(arr[i]%5==0){
    op.push(arr[i])
  }
}

console.log(op)        //output--- [ 5, 10, 15, 25, 35 ]
// ------------------------------------------------------------------------------ 

// 2nd task 

// 2. i/p: var arr1 =  ["htmL","csS","javascripT","react","angulaR","nodE"];
//     o/p:  [ 'htmL', 'csS', 'javascripT', 'angulaR', 'nodE' ]

//Answer

var arr1= ["htmL","csS","javascripT","react","angulaR","nodE"]
var op1 = [];

for(i in arr1){
  if(arr1[i].at(-1)==arr1[i].at(-1).toUpperCase()){
    op1.push(arr1[i])
  }
}

console.log(op1)        //output--- [ 'htmL', 'csS', 'javascripT', 'angulaR', 'nodE' ]
// -------------------------------------------------------------------------------------------------------- 

// 3rd task 

// 3. i/p:   var arr3 = ["html", "css", "js", "react", "angular"];
//    o/p:  [ 'HTML', 'JS', 'ANGULAR' ]

// Answer: 

var arr3 = ["html", "css", "js", "react", "angular"];
var op3 = [];
for (i in arr3) {
  if (i % 2 == 0) {
    op3.push(arr3[i].toUpperCase());
  }
}

console.log(op3);     //output: [ 'HTML', 'JS', 'ANGULAR' ]
// ----------------------------------------------------------------------------------------- 