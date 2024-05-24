const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //here the element is being added to the marvel_heros array. the element will be added at index 3.

// console.log(marvel_heros); //so in the result ==>  ["superman", "flash", "batman",["superman", "flash", "batman"]] 

// console.log(marvel_heros[3][1]); //result will be flash as at index 3 we have another array and in that index 1 is flash.

const allHeros = marvel_heros.concat(dc_heros)  //unlike push method concat method adds the element into array as separate elements not like an array of elements..!  so in the result ["thor", "Ironman", "spiderman","superman", "flash", "batman"];
// console.log(allHeros);

// const all_new_heros = [...marvel_heros,... dc_heros] //elements of both arrays are added with the use of spread operator .And the elemts are added separately not as an array .

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)  //the flat method concatenates sub arrays
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh")) //returns whether the passed element is array or not

// console.log(Array.from("Hitesh"))  //creates an array from the passed elements

// console.log(Array.from({name: "hitesh"})) // interesting

//  // Array.from() is designed to convert array-like or iterable objects to arrays. The object {name: "hitesh"} is neither array-like nor iterable.



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// The Array.of() method is used to create an array from a variable number of arguments, regardless of the number or types of the arguments.


// let arr=[3,4,5,6];
// let arr2=arr;

// arr2.push(7);
 //here the original arr is being modified as reference is passed

// console.log(arr);

//so to avoid the above problem we can use spread method

// let arr=[1,2,3,4,5]
// let arr2 =[...arr]

// arr2.push(8);
// console.log(arr); //so here the original arr is not being modifiedd here