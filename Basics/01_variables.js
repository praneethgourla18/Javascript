const accountId = 144553;

let accountEmail = "hitesh@google.com";

var accountPassword = "12345";

let accountState; //gives output-> Undefined

 accountCity="Jaipur"
// accountId = 123 Not allowed as const value cannot be changed !

accountEmail="praneeth@gmail.com"  //let and var things can be changed

accountPassword = 2351

accountCity="bglr"  //possible but not a good practice

console.log(accountId);
console.log(accountCity);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountState);

/*
prefer not to use var because of issue in block scope and functional scope !!
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);  //gives a table type of output