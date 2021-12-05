function addNum(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum +=arguments[i]
    }
    console.log(sum)
}

addNum(3,3,3);