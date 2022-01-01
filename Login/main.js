const loginFrom =document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");

const greeting =document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnClick(event){
    event.preventDefault(); //브라우저의 기본 동작 막음 ②
    loginFrom.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username)
}

loginFrom.addEventListener("submit",onLoginBtnClick); //()사용하지 않으면 즉시 호출 되지 않고 필요할때만 호출된다①
//onLoginBtnClick 함수는 내가 호출 한게 아니라 브라우저에서 호출 해주는것이고
//나는 자리만 마련해준것이다

function  paintGreetings(username){
    greeting.innerText =`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null){
    loginFrom.classList.remove(HIDDEN_CLASSNAME)
    loginFrom.addEventListener("submit",onLoginBtnClick);
}else {
   paintGreetings(savedUsername);
}







