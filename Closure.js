var arr = []
for (var i = 0; i<5; i++){
    arr[i] = function (id){//외부 함수
        return function (){//내부 함수
            return id //내부 함수가 외부 함수의 지역변수를 접근
        }
    }(i) //외부 함수의 매개변수의 인자값
}
for (var index in arr) {
    console.log(arr[index]());
}

