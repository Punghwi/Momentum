
const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const clickedClass = "clicked";
    // toggle 은 classlist에 classname이 존재하면 삭제, 존재하지 않는다면 classname을 추가해준다.
    // 아래의 if문의 동작을 한줄로 표현.
    h1.classList.toggle("clicked");

    /*
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
*/
}

h1.addEventListener("click", handleTitleClick);
