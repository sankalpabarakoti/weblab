// var can be redeclared and reupdated.var is a global scoped variable.
if (true)
{
   var n=5;
   console.log("n inside block(local scope)=",n);
}
console.log("n outside block(global scope)=",n);

// redeclaration and reupdation
var n;
n=6;
console.log("New n=",n);

// Using let
let count = 0;
if (true) {
 let count = 1; // Different 'count' variable, block-scoped
 console.log(count); // Output: 1
}
console.log(count); // Output: 0
// Using const
const PI = 3.14159;
// PI = 3.14; // This would cause an error: Assignment to constant variable.
const person = { name: "Alice" };
console.log(person);
person.name = "Bob"; // This is allowed, as the object's properties can be modified
console.log(person);
// person = { name: "Charlie" }; // This would cause an error: Assignment to constant variable



// Normal function
function addNum(a,b)
{
    return a+b;
}
sum=addNum(2,3);
console.log("sum=",sum);

//Arrow function
let arr=[1,2,3,4,5];
const numsquare=(arr) => {
    for (num of arr)
    {
        console.log(num*num);
    }
}

numsquare(arr);


//object
const user={
    name:"KEC",
    age:20,
    greet(){
        console.log("Hi");
    }
};

console.log(user.name);
user.greet();
// Map
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2);

console.log(doubled); 

// Filter
let nums = [1, 2, 3, 4, 5];

let even = nums.filter(num => num % 2 === 0);

console.log(even);

// Spread Operator

const arr1=[1,2];
const arr2=[3,4];
const combinedArr=[...arr1,...arr2,5];
console.log(combinedArr);


const obj1={a:1,b:2};
const obj2={c:4,d:5};
const combinedObj={...obj1,...obj2};
console.log(combinedObj);


function sumnum(a,b,c)
{
    return a+b+c;
}
const numarr=[1,2,3];
const result=sumnum(...numarr);
console.log(result);
