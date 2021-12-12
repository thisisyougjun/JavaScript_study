# JavaScript 배운것 정리

## 변수
`let` `var` `const`<br>
`var`재선언 가능해서 중복되도 에러가 발생하지 않는다<br>
그 반면`const` `let` 재선언이 불가능하다<br>

`let`과 `const` 차이점은 재할당이다 <br>
`let` 재할당 되지만 `cosnt`는 재할당이 되지않는다

`const` **선언+초기화+할당** 동시한다
### 호이스팅
>호이스팅은 내가 아는 선에서 얘기해보자면 선언된 함수와 변수(?) 실행시에 모두 최상위로 끌어올린다(?)

**이 부분대해서 이해를 못해서 아직 공부중이다**

**함수 스코프**<br>
- `var` <br>
함수내에서만 선언된 변수만 그 지역변수가 된다

**블록 스코프**<br>
- `let`
- `const`
- 함수,`if`, `for`, `while`, `try/catch`등

코드블럭안에서 선언된 변수는 코드블럭에서만 사용할수 있다<br>
즉 지역변수다

## Object(객체)

### 객체 생성
```javascript
var cowokers ={
    "programmer":"Youngjun",
    "designer":"Breadjun"
};
```

### 객체 출력

```javascript
document.write("programmer :" +cowokers.programmer);
document.write("designer :" +cowokers.designer);
```

```javascript
cowokers["Back End"] = "Layone" //객체 이름에는 공백이 들어가면 문법적 오류 나기때문에 괄호를 사용해줘야한다
document.write("Back End : "+cowokers["Back End"]) //출력 할때도 대괄호를 사용해야함
```

### 데이터 추가
```javascript
cowokers.Frontend="Youngjun";
```

### 객체 반복문
```javascript
for (var key in cowokers){
    document.write(key+':' + cowokers[key]);
}

```
![캡처](https://user-images.githubusercontent.com/75524611/143687065-5856a136-b53e-45b6-8f6a-d483b24bfa14.PNG)
<br>
순서대로 출력되는걸 확인 할수있다

### Property & Method
```javascript
cowokers.showAll = function (){
    for (var key in this){
        document.write(key+' : ' + cowokers[key]+'<br>');
    }
}
cowokers.showAll();

```
**객체 안에 소속되는 함수는 Method**<br>

**객체 안에 소속되는 변수는 Property**
#### coupeted property(계산된 프로퍼티)
```javascript
const a='age';

const user ={
    name : 'Mike',
    [a] :30
}
```

```javascript
const user = {
    [1 + 4] : 5,
    ["안녕"+"하세요"] : "Hello"
}
```
>5 : 5,안녕하세요:"Hello"

#### Object methods
```javascript
console.log(Object.keys(user));     //키 배열 반환
console.log(Object.values(user));   //값 배열 반환
console.log(Object.entries(user));  //키/값 배열 변환

const obj =makeObj("성별","male")

let arr = [
    ["mom","월"], //배열 안에 배열
    ["tue","화"]
];

const result =Object.fromEntries(arr); //키/값 배열을 객체로
```
```javascript
const user={
    name : 'test',
    age :'18'
};
```
>~~모르는 나를 위해서~~ `key`는 name,age `값` test, 18 이다
> 
#### 객체의 메소드 참조
객체 메소드 참조 할때 ()를 붙여주지 않으면 메소드 아닌 프로퍼티 그 자체를 참조 하게 된다
```javascript
const test = {
    name: '영준',
    age: '18',
    birthday : "040625",
    pId : "123456",
    fullId:function() {
        return this.birthday + this.pId;
    }
};
console.log(test.fullId);//[Function: fullId]
console.log(test.fullId());//040625123456

```

### 생성자
```javascript
    function Item(title,price){
    this.title =title;
    this.price =price;
    this.showPrice = function (){
        document.write(`가격은 ${price}원 입니다`);
    }
}

const item1 = new Item("PC",40000); //this에 item1들어감
const item2 = new Item("마우스",20000);//this에 item2들어감
const item3 = new Item("키보드",30000);//this에 item3들어감

console.log(item1,item2,item3);

item3.showPrice();
```

### 레퍼런스
```javascript
function test(name,age) {
    this.name=name;
    this.age=age;
    
    var test2 = new test();
    var test3 = new test();
    
   console.log(test2==test3); //false
   
   var test4 = test2;
   
   console.log(test2==test4); //true
}
```

`프로퍼티`의 값이 똑같다 해도 절대로 같다고 말할수 없다 <br>

하지만 `test4`에 `test2`를 대입한 변수는 `object reference` 라고 부르며 객체에 자체를 저장하는게 아니라 <br>
`test4`객체의 주소를 가리키는것이다

## Prototype(프로토타입)

>모든 생성자 의한 생성된 모든 객체의 본질..?

***
## Array (배열)
### 배열 생성
```javascript 
 var bread = ["Young", "Jun"];
```
<br>
bread에 "Young" 과 "Jun" 값이 들어가있다

```javascript
document.write(bread[0]);
```
<br>
배열은 순서대로 0,1,2... 시작 되기때문에
인덱스 값을 0을 넣으면 Young 출력된다

### 배열 길이 

```javascript
bread.length
```
배열의 길이를 알수있다

### 배열 추가, 삭제

```javascript
bread.push('LEE')
```
배열의 마지막에 'LEE' 를 추가한다<br>
추가가 있다면 반대로 삭제도 있다
```javascript
bread.pop()
```
배열의 마지막에 있는 데이터를 삭제한다
### 배열 활용

반복문을 추가해 활용해보면

```javascript
var i =0 
while (i<bread){
 document.write('<li><a href="http://naver.com/'+ test[i]+'">'+test[i]+'</a></li>');
 }
```

![캡처](https://user-images.githubusercontent.com/75524611/143687037-654f7a59-5876-4522-943f-aa97196393ec.PNG)

서로 다른 이름이 다른 링크가 출력 된다

### 다 차원 배열
이해를 아직 다 못했다
```javascript
var arr =new Array(3) //3개의 요소를 가지는 배열 생성

for (var row=0; row <3; row++) {
    arr[row] = new Array(4) //각각의 요소마다 또다시 4개의 요소를 가지는 배열 생성
    for (var colum=0; row<4; colum++){
        arr[row,colum]="["+row+colum+"]"; //각각의 배열 요소를 생성함
        document.write(arr[row,colum]+" "); //각 배열 요소에 접근
    }
}
```

### 연관 배열

```javascript
const arr =[];

arr["하나"] =1;
arr["참"] =true;
arr["자바스크립트"]="javascript";

document.write(arr["참"]);  // 문자열을 인덱스로 배열 요소에 접근할 수 있음
document.write(arr.length); // 연관 배열은 Array 객체가 아니므로 length 프로퍼티의 값이 0
document.write(arr[0]);     // undefined

```

***

## Function (함수)


#### 지역 변수
>함수 내에서 선언된 변수, 메모리 종료시 사라진다

#### 전역 변수
>함수 외부에서 선언된 변수, 웹 페이지를 닫아야 메모리에서 사라진다

### 함수 호이스팅

>함수안에 선언된 모든 변수는 함수 전체에 유효한다
```javascript
var globalNum = 10;     // globalNum을 전역 변수로 선언함.

function printNum() {

    document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>"); 
    //지역 변수 globalNum 선언 전의 globalNum의 값은 undefined입니다.

    var globalNum = 20; // globalNum을 지역 변수로 선언함.

    document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");
    
    //지역 변수 globalNum 선언 후의 globalNum의 값은 20입니다.

}
printNum();
```
`함수 호이스팅` 적용이 되기 되고 함수내에서 맨위에 선언만 되고 초기화가 되지 않은 상태가 되기 때문에 undefined 값을 반환하게 된다
>`함수 호이스팅`은 자동으로 되지만, 항상 함수 블록의 첫 부분에 변수를 선언하는것이 좋다

### 함수 생성
```javascript
   function two(){
         document.write('<li>2-1</li>');
         document.write('<li>2-1</li>');
        }
```

### 함수 호출
```javascript
two();
```

### 함수 파라미터
```javascript
    function sum(a,b){
            document.write(a+b);
        }
```
이때 sum(a,b) a,b는 매개변수라고 한다


### 함수 파라미터 호출
```javascript
sum(1,2);
```
1과2 인수 라고 하고 a,b에 넘겨지게 되고 sum함수가 실행되면서 a+b 값을 반환한다

### arguments 객체
```javascript
    
function test1(){
    console.log(arguments[0]);
    console.log(arguments[1]);
}

test1(1,2)//1,2
```
`Array(배열)`형태를 가지는 객체 <br>
그렇다고 arguments 객체는 배열아니다 length 말고는 pop()과 같은 아무런 속성도 없다<br>
>함수의 정의보다 많은 인수가 전달되면 대입되지 못한 매개변수들은 참조 할 방법이 없게된다<br>
이럴때 arguments 객체를 활용할수있다

```javascript
function addNum(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum +=arguments[i]
    }
    console.log(sum)
}

addNum(3,3,3);
```
### 디폴트 매개변수

```javascript

function test(a, b =1){
    a * b;
}


console.log(test(3)); //3

console.log(test(3,2)); //6

```
인수가 입력 되지 않았다면 기본값을 대신 들어간다

### 나머지 매개변수
접두사(...)를 사용하여 특정 위치의 인수부터 마지막 인수 까지 한번에 저장할수 있다<br>
배열 형태로 저장이 된다

```javascript
function test(a, ...c){
    console.log(a);       //1
    console.log(c.length);//5
    console.log(c)        //[2,3,4,5,6]
}
test(1,2,3,4,5,6,) 
```
****

## this
this는 아직 제대로 이해하지 못했다
```javascript
function Programmer(name, age) {
    this.name = name;
    this.age = age;
}

// 생성자를 사용하지 않은 경우 - 단순 호출
const covy = Programmer('Covy', 20); // covy 변수는 undefined
console.log(window.name, window.age); // Covy 20

// 생성자를 통한 객체 생성
const tony = new Programmer('Tony', 25);
console.log(tony.name, tony.age); // Tony 25 - this가 해당 객체에 바인딩됨
```

****
## Symbol
>변경이 불가능한 원시 타입의 값이며, 유일성을 보장한다, 고유한 식별자를 의미한다
```javascript
const test1 =Symbol("test")
const test2 =Symbol("test")

test1 === test2
// -> false
```
값이 같아도 `false` 출력된다

```javascript
const id =Symbol('id');
const user={
    name:"Mike",
    age : 30,
    [id]:'myid'
};
console.log(Object.keys(user));
// -> [ 'name', 'age' ]
```
`Object.keys(user)`
`Object.values(user)`
`Object.entries(user)`
`for(let a in user){}`<br>
사용하면 `symbol`은 건너뛴다.

```javascript
Object.getOwnPropertySymbols(user)
// ->[Symbol(id)] Symbol값만 볼수있다
Reflect.ownKeys(user);
// ->["name","age",Symbol(id)] Symbol을 포함해서 볼수있다
```

~~symbol.for 도 있지만 추후에 다루고 싶다~~
***

##Math Methods

```javascript
console.log(Math.ceil(5.1));
// ->6
// 올림
console.log(Math.floor(5.1));
// ->5
//내림
console.log(Math.round(5.6));
// ->6
// 반올림
const test =3.14213123
console.log(test.toFixed(2)); //문자로 반환됨
// ->3.14
//소수점 부터 원하는 자릿수만큼 짤라서 출력함
const x =Number('x');
console.log(+isNaN(x));
// ->true
// NaN 체크
//NaN === NaN 자기 자신을 false로 출력된다
let num = 10;
console.log(num.toString(16));
// -> a
//문자열로 바꾸고 원하는 진수로 변환한다

console.log(Math.floor(Math.random()*100)+1);
// 랜덤값을 출력한다
//0.0123 나올수 있기 때문에 최소값 1을 더한다

console.log(Math.max(1,2,11,4,8));
// -> 11
// 최대값을 출력
console.log(Math.min(1,2,11,4,8));
//-> 1
//-> 최소값을 출력
console.log(Math.abs(-10));
// -> 10
// 절대값 
console.log(Math.pow(2,10));
// ->1024
// a의 b 제곱 구함
console.log(Math.sqrt(16));
// ->4
// 제곱근 구함
```