
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");

//submit을 하게되면 브라우저는 새로고침이 되는데 그걸 방지하기위해 preventDefualt()함수를 사용함. (브라우저의 기본 동작 제어)
//Submit은 엔터를 누르거나 버튼을 클릭할 때 발생하며, form 안에서 동작한다.

//일반적으로, string값만 저장된 변수명은 대문자로 사용한다.
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) { 
    event.preventDefault(); //기본동작 실행 제어
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username} keep going!`;
    // "" , '' 쌍따옴표나 따옴표가 아닌 백틱(``)을 사용한다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//함수를 만들 때 뒤의 () 를 붙힌다면 호출과 동시에 바로 실행됨.
// # addEventListner를 실행할때는 절대 () 를 사용한 함수를 이용하지 않는다.
loginForm.addEventListener("submit", onLoginSubmit);






