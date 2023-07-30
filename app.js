//alert("hello jihun~!");

// const 는 변하지 않는 값을 지정할때 사용함. 절대로 값을 업데이트 할 수 없다.
// let 은 변수 지정 후 업데이트가 가능하다
// var 는 변수를 재정의 및 업데이트 모두 가능함.(보안 취약할듯)
/*
const myName =  "jihun";
let myName2 = "jihun2";
var myName3 = "jihun3";

console.log(myName, myName2, myName3);

var myName3 = "jihun33";
myName2 = "jihun22";

console.log(myName,myName2,myName3);

console.log(myName +" 은" + " 이걸로 변경 ! : " + myName3);


// boolean
// ture == 1 , false == 0 . true는 켜져있음을 의미하고 false 는 꺼져있음을 의미한다고 보면 된다.
const amIFat = false; 
console.log(amIFat);

// Null 은 아무것도 아님을 나타냄. ( 하지만 변수에 null을 넣을 경우 비어있는 공간(메모리)이 정의된다. )
const exNull = null;
console.log(exNull); //undefined



const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sun;

console.log(daysOfWeek);

// 컴퓨터는 0부터 숫자를 세기때문에 배열 역시 0번째 인덱스 값을 처음으로 가진다.

// Get Item From Array
const nonsence = ["mon", "tue", "wed" , "thu", "fri", "sat", "sun"];
console.log(nonsence[0]);
console.log(nonsence[1]);
console.log(nonsence[2]);
console.log(nonsence[3]);
console.log(nonsence[4]);
console.log(nonsence[5]);
console.log(nonsence[6]);

// Add one more day

nonsence.push("Bang!!");
console.log(nonsence);



const playerName = "jihun";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// player[0] == name
// player[1] == points

//properties 작성 - object
const player = {
    
    name: "Jihun",
    point: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat = false;  // player라는 오브젝트 안의 내용을 바꾸는것이기 때문에 오류가 안남. player 전체를 수정되게 하는 값이라면 player = false 와 같은 것이라면 오류가 발생할것임.
player.lastName = "potato";
player.point = 15
console.log(player);

player.point = player.point + 15;
console.log(player.point);

*/

// function() 만들기.
// 어떠한 코드를 캡슐화해서 여러번 실행이 가능하게 만들어주는 역할.
/*
function sayHello(nameOfPerson, age){  //받는 값은 보내는 값의 순서대로 적용
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

//argument(인수) 란?
//function을 실행하는 동안 어떤 정보를 function에 보내는 역할.
//데이터 function에 보내기.

sayHello("Jihun", 10); //argument
sayHello("dal", 23);
sayHello("lynn", 21);

//값을 보내지 않았기때문에 실행시키면 undefined가 출력. NaN = 숫자가 아니라는 뜻
function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

function divide(a, b){
    console.log(a / b)
}

plus(8, 60);
divide(98, 20);
*/

/*
const player = {
    name: "Jihun",
    sayHello: function(otherPersonsName){
        console.log("Hello " + otherPersonsName + " nice to meet you!")
    },
};

player.sayHello("Sujin");
player.sayHello("Jihun");

function plus(a,b){
    console.log(a + b)
}

plus(5,5);
*/

// const isNicoFat = true;
// isNicoFat = false; 변경 불가능. const는 업데이트가 안됨.

// let isNicoFat = true;
// let은 업데이트가 가능하다.

// var isNicoFat = true;
// var는 업데이트가 가능하지만, 재정의도 가능하기에 쓰면 안된다. 불안정해진다. 안쓰는거 추천!

//let hello;
//console.log(hello); // undefined

/*
function minusFive(potato) {
    console.log(potato -5);
}
// function 에서 생선된 potato 라는 object는 밖에서 사용될 수 없다.
// 오로지 function 안의 body {} 안에서만 사용이 가능하다.
minusFive(5, 10, 12, 34, 4, 5, 6, 7); //0.  첫번째 데이터를 가져왔기 때문에 5-5가된다.

const calculator = {
    add: function(a, b){
        console.log(a + b);
    },
    subtract: function(a, b){
        console.log(a - b);
    },
    multi: function(a, b){
        console.log(a * b);
    },
    devide: function(a,b){
        console.log(a/b);
    },
    power: function(a,b){
        console.log(a ** b);
    },
};

calculator.add(5, 1);
calculator.subtract(5, 2);
calculator.multi(5, 2);
calculator.devide(10,2);
calculator.power(2,2);
*/

//함수는 어떤 기능을 수행하고 결과를 주는 것.
//결과가 필요할때는 return 값이 필수다.

/*
const calculator = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multi: function(a, b){
        return a * b;
    },
    devide: function(a,b){
        return a / b;
    },
    power: function(a,b){
        return a ** b;
    },
};

const plus = calculator.add(2, 3);
const minus = calculator.add(plus, 3);
const multi = calculator.add(minus, 3);
const devide = calculator.add(multi, 3);
const power = calculator.add(devide, 3);

*/

// 콘솔창에 변수명을 입력하면 결과를 가져온다. 
// 굳이 console.log를 사용하지 않아도 결과를 도출하기에 console.log 나 alert를 불필요하게 사용할 필요가 없어졌다.

/*
const age = prompt("How old are you?");

// parseInt() 함수는 String 자료형을 int 자료형으로 바꿔주는 역할
console.log(typeof age, typeof parseInt(age));
console.log(age, parseInt(age)); // NaN 이라는 결과는 Not a Number 라는 뜻이다.
*/

/*
const age = prompt("How old are you?");

if(isNaN(age)){
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}
*/

// if, else if 문은 쉬우니 패스.

















