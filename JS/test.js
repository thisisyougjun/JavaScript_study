const a =1;

function out(){
    const a =2;
    function inner(){
        console.log(a)
    }

    return inner();

}
console.log(a);
const b =out();
console.log(b);
