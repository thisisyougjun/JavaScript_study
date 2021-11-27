# JavaScript 배운것들

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
**객체 이름에는 공백이 들어가면 문법적 오류 나기때문에 괄호를 사용해줘야한다**
```javascript
cowokers["Back End"] = "Layone"
document.write("Back End : "+cowokers["Back End"])
```
**출력 할때도 대괄호를 사용해야함**

### 데이터 추가
```javascript
cowokers.Frontend="Youngjun";
```

### 객체 반복문
```javascript
for (var key in cowokers){
    document.write(key+':' + cowokers[key]);
}
![]![캡처](https://user-images.githubusercontent.com/75524611/143687009-3ea692ad-9449-44fa-b099-8dacc66cc9bc.PNG)
```
순서대로 모두 출력된다

### Property & Method
```javascript
cowokers.showAll = function (){
    for (var key in this){
        document.write(key+' : ' + cowokers[key]+'<br>');
    }
}
cowokers.showAll();

```
**객체 안에 소속되는 함수는 Method 부르고**
**객체 안에 소속되는 변수는 Property 불린다**

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

![]![캡처](https://user-images.githubusercontent.com/75524611/143687009-3ea692ad-9449-44fa-b099-8dacc66cc9bc.PNG)
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
함수이름과 괄호면 함수 호출하고 함수 안에있는 코드를 실행한다

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
