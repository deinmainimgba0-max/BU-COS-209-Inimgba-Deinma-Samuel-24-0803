//push function adds from the back
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log('push():', fruits); 


let lastFruit = fruits.pop();
console.log('pop():', lastFruit, fruits); 

let firstFruit = fruits.shift();
console.log('shift():', firstFruit, fruits);


fruits.unshift('mango', 'grape');
console.log('unshift():', fruits); 


console.log('length:', fruits.length); 