// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);  //this will print 0

// Array methods

// myArr.push(6)   //pushes an element 6 to myArr end result will be [0,1,2,3,4,5,6]
// myArr.push(7)   //pushes an element 7 to myArr end result will be [0,1,2,3,4,5,6,7]
// myArr.pop()    //removes the last element of the arr result will be [0,1,2,3,4,5,6]

myArr.unshift(9) //this method is used to insert an element in the begining of the array,the result will be [9,0,1,2,3,4,5,6]
myArr.shift()  //this method is used to remove the element from the begining of the array

// console.log(myArr.includes(2));  // this method will return whether the element is in arr or not! result will be false

// console.log(myArr.indexOf(3));  //this will return the index of the given element!

const newArr = myArr.join() //this method returns an arr as string .We can also specify a separator in the join method the default separator is , .

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A = ", myArr);  //prints A = [0,1,2,3,4,5]

// const myn1 = myArr.slice(1, 3)  //the slice operator prints the elements from the given index and ends at given index-1.

// console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 4) //js splice() method is uded to add/remove elem from the array.Unlike slice it changes the contents of the array.
//here the result will be splice array will be=[1,2,3,4,5] and the original arr will be[0] and it is changed.
console.log("C = ", myArr);
console.log(myn2);


