# JavaScript 배운것 정리

##변수
`let`

`var`<br>
1. 한번 선언된 변수를 다시 사용할수 있다<br>
2. 선언되기전에 사용할수 있다<br>
3. 호이스팅 된다<br>

`const`
**선언+초기화+할당** 동시한다

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

###생성자
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

서로 다른 이름이 다른 링크가 출력 되는걸 볼수가 있다
***
##Function (함수)

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
1과2 는 a,b에 매개변수에 전달이 되고 sum함수가 실행되면서 a+b 값을 출력된다

****

##this
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
