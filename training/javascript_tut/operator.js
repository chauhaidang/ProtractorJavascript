let num1 = 100;
let num2 = 50;
// + * / % - ++ -- !
// 
console.log(`modulus is ${num1%num2}`);

let i = 10;
console.log(i++); //print 10 then inc 11
console.log(++i); //print 12 then nothing
console.log(++i); //print 13 then nothing
console.log(i);  //print 13
console.log(i++); //Print 13 then inc 14

//same for minus

i = 10;
i = i++;
console.log(i); // -> will be 10 

//equality operator

i = 10;
let j = 20;
console.log(i!==j); //Recommend not to use ==

let s1 = 'dang';
let s2 = 'dang2';
console.log(s1==s2); //== Just compare the value. See example below to see the different

var s3 = new String("dang"); //String object
var s4 = 'dang'; //String value
console.log(s3 === s4); //-> failed due to comparison between object and value

var s5 = new String("dang"); //String object
var s6 = new String("dang"); //String object

console.log(s5 === s6); // still failed due to both objects have different address

//Comparison and logical operator
// > < >= <= && ||

