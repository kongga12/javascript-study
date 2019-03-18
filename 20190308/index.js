// const title = document.getElementById("title")
const title = document.querySelector("#title")
// title.innerHTML = "Hi! From JS"
// title.style.color = "red"
// document.title = "Hi1";

// function clickTitle() {
//     let titColor = title.style.color
//     console.log(titColor)
//     if (titColor == "red") {
//         title.style.color = "blue"
//     }else if (titColor == "blue") {
//         title.style.color = "red"
//     }
// }

const CLICKED_CLASS = "clicked"

function clickTitle() {
    /*
    // const currentClass = title.className // className 가져옴
    const hasClass = title.classList.contains(CLICKED_CLASS)//true | false
    // if(currentClass !== CLICKED_CLASS) { //가져온 className으로 CLICKED_CLASS값과 비교
    if(!hasClass) {
        // 동일한 역할을 함
        // title.className = CLICKED_CLASS
        title.classList.add(CLICKED_CLASS)
    }else {
        // title.className = ""
        title.classList.remove(CLICKED_CLASS)
    }
    */
   // toggle함수가 위의 주석되있는 로직과 동일한 역할을 처리해줌 
    title.classList.toggle(CLICKED_CLASS)
}

function init() {
    // title.style.color = "red"
    window.addEventListener("click", clickTitle)
}

init()

// window.addEventListener("offline", function(){console.log("bye bye!")})
// window.addEventListener("online", function() {console.log("Welcome back!")})
