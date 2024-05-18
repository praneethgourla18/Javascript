
console.log("2" == 2); //here it automatically converts the dtype and compares ! 

console.log("2"===2);  //strict check it gives output as false as it also needs the datatypes to be same

console.log(2>2);

console.log("2">2);
console.log("2"==2);
console.log("2">=2);  //functions good until here but when you compare a null with  number

console.log(null>0);
console.log(null==0);

//the above both gives false
console.log(null>=0);  //this one gives true as the equality check and comparision work differently.


console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

//gives false in all cases


//so we should avoid comparision of undefined and null types that will make our code clean as it has inconsistency..