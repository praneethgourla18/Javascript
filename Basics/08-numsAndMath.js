 let score = 400

 let marks=new Number(100)

 console.log(score);
 console.log(marks);

 console.log(marks.valueOf())
 console.log(marks.__proto__)
 console.log(marks.toFixed(2))

 let otherNum = 123.449

console.log(otherNum.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++ MATHS ++++++++++++++++++

// console.log(Math.PI);
// console.log(Math.SQRT1_2);

// console.log(Math.max(20,25))
// console.log(Math.round(4.5))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.5))
console.log(Math.random())
console.log(Math.random())  //gives values from 0 to 1
console.log(Math.floor((Math.random()*10) +1)) 
// so if we need a random vlaue which should be definitelly greater than 1 we can use this type.. Here that +1 is used to make sure the number is greater than 1 like in such cases where random number is 0.04899 here when it is multiplied by 10 it still gives 0.4899so adding 1 will be 1.4899 !!

const min = 10
const max = 20

//Here now you need to generate a random number in the range of min and max

console.log(Math.floor(Math.random() *(max- min +1 ))+min)