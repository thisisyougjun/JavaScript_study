//유일성 보장
const id =Symbol('id');
const user={
    name:"Mike",
    age : 30,
    [id]:'myid'
};
console.log(Object.keys(user));

// const showName =Symbol('show name');
// user[showName]=function (){
//     console.log(this.name);
// };
//
// user[showName]();
//
// //사용자가 접속하면 보는 메시지
// for (const key in user) {
//     console.log(`His ${key} is ${user[key]}.`);
// }