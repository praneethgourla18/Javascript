let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN but gives type as number
//true => 1 and false=> 0
// null => 0 and gives type as number
//undefined => Nan but gives number as type

//same like number we can convert to string and boolean that can be done using String() and Boolean()