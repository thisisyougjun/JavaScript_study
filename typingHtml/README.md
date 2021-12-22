## 자바스크립트를 활용한 타이핑 효과 구현

![](sourse/ezgif.com-gif-maker.gif)

### 사용 기술🔨

-HTML/CSS <br>
-Javascript

### 코드 분석🔍

```javascript
let target =document.querySelector("#dynamic");
```
`target`이라는 변수에 `dynamic`속성값을 가지고 있는 문서객체를 선택 할수있게한다

```javascript
    function randomString() {
    let stringArr = ["안녕하세요!", "반갑습니다!", "환영합니다!",]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("")//글자 하나하나씩 쪼개져 배열이 됨

    return selectStringArr;
}
```
`stringArr`배열에 출력할 텍스트를 넣어준다<br>
`selectString`랜덤으로 텍스트가 출력 되어야 해서 `Math.random`함수에 배열의 길이 만큼 반환되게 한다<br>
`selectStringArr` `split`함수를 이용해 랜덤하게 반환된 텍스트를 글자 하나씩 쪼개서 반환되게끔 한다<br>

### 출력 함수
```javascript
function dynamic(randomArr){
    if (randomArr.length > 0){
        target.textContent +=randomArr.shift();
        setTimeout(function (){
            dynamic(randomArr);
        },80);
    }else {
        setTimeout(resetTyping,1000)
    }
}

dynamic(randomString());
```
`ramdomArr`80ms초 간격으로 배열에서 맨앞에 있는 값을 추출 하고 출력합한다<br>
`setTimeout`함수안에서 재귀함수를 호출 하여 모든 값을 추출 할때까지 반복한다<br>
1초 후에 `resetTyping` 함수를 호출 한다

```javascript
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}
```
텍스트를 빈칸으로 바꾼후 `dynamic`함수를 호출한다;

## 새로 알게 된점😎
대부분 알고 있던 내용이였지만 어떻게 활용 할줄 몰랐는데 이렇게 따라 만들어보면서 이해력을 점차 높일수 있을거 같다

####css
css에서는 ::after 추가하면 가상의 블럭? 추가할수있다