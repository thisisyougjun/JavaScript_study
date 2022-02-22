let target =document.querySelector("#dynamic");

function randomString(){
    let stringArr=["안녕하세요!","반갑습니다!","환영합니다!",]
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("")//글자 하나하나씩 쪼개져 배열이 됨

    return selectStringArr;
}

function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}

//한글자씩 출력 함수
function dynamic(randomArr){
    if (randomArr.length >0){
        target.textContent +=randomArr.shift();
        setTimeout(function (){
            dynamic(randomArr);
        },80);
    }else {
        setTimeout(resetTyping,1000)
    }
}

dynamic(randomString());

//깜빡임 함수
function blink(){
    target.classList.toggle("active");
}

setInterval(blink,500);//반복함수

console.log()