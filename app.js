// event listen하기

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color = "blue";
}
function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!");
}
function handleWindowPaste(){
    alert("pasted!");
}
function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}

// h1.addEventLister("click", handleTitleClick);
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;

//window, document 는 기본적으로 제공해주는 함수
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("paste", handleWindowPaste);
window.addEventListener("offline", handleWindowOffline); // wifi 껐을때.
window.addEventListener("offline", handleWindowOnline); // wifi 켰을떄.






















