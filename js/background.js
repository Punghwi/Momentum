const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

//console.log(choosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

console.log(bgImage);

//append 는 가장 뒤에, prepend는 가장 위에 오게 하는것.
document.body.appendChild(bgImage);

