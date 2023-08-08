const clock = document.querySelector("h2#clock");

// 매 초마다 이벤트 발생 -> interval

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0"); 
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // web이 실행하자마자 바로 보이게 하기 위함.
setInterval(getClock, 1000);

// 지정된 시간이 되면 단 한번만 실행한다.
//setTimeout(sayHello, 5000);

// 1번째 매개변수 - 함수, 2번째 인수 - 지정할 시간
//setInterval(sayHello, 5000);



