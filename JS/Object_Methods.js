const user={
    name : 'test',
    age :'18'
};
console.log(Object.keys(user)); //키 배열 반환
console.log(Object.values(user)); //값 배열 반환
console.log(Object.entries(user));//키/값 배열 변환


console.log(user)

function makeObj(key,val){
    return{
        [key] : val,
    };
}

const obj =makeObj("성별","male")
console.log(obj);

let arr = [
    ["mom","월"],
    ["tue","화"]
];

const result =Object.fromEntries(arr);

console.log(result);