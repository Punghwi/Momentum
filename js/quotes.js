const quotes = [
{
    quote: "I'm not here to be perfect, I'm here to be real.", 
    author: "Lady Gaga"
},
{
    quote: "I'm not interested in money. I just want to be wonderful.",
    author: "Marilyn Monroe"
},
{
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney"
},
{
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
},
{
    quote: "The best way to find out what you want in life is to try a lot of things.",
    author: "Oprah Winfrey"
}
];

const quote = document.querySelector("#quote span:first-child"); // 첫번째 span
const author = document.querySelector("#secondQuote span:last-child"); // 마지막 span

//round - 반올림, floor - 내림 , ceil - 올림

//floor - 무조건 내림을 사용하기에 5 이전까지인 4.9999  . . . 의 숫자만 리턴된다.
// 배열의 최대 길이값을 곱해주기 위해 length 사용
// console.log(`${todaysQuote.quote} ${todaysQuote.author}`);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
quote.innerText = todaysQuote.author;

console.log(todaysQuote.quote);
console.log(todaysQuote.author);