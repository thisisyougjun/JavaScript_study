function sum(a,b,c){
    return a+b+c;
}

var test = [1,2,3]

console.log(sum(...test));

var arr1=[3,4];
var arr2=[5,6];


var result =[1,2,...arr1, ...arr2,7]

console.log(result)

var user ={name : "Mine"};
var mine ={...user, age:30}

console.log(mine)

const arr =[1,2,3,4]
const arr3=[arr,5,6,7]

console.log(arr3); // 1,2,3,4,5,6,7;