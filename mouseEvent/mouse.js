const div = document.querySelector("#myDiv");

div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";

// div.addEventListener("click", e => {
//     console.log("You clicked the mouse!");
//     div.style.backgroundColor = "yellow";
// })

// div.addEventListener("dblclick", e => {
//     console.log("You double clicked!");
//     div.style.backgroundColor = "purple";
// })

// div.addEventListener("mousedown", e => {
//     console.log("You are holding the mouse down!");
//     div.style.backgroundColor = "red";
// })
// div.addEventListener("mouseup", e => {
//     console.log("You let go of the mouse!");
//     div.style.backgroundColor = "blue";
// })

// div.addEventListener("contextmenu", e => {
//     console.log("You opened the context menu");
//     div.style.backgroundColor = "black";
// })

div.addEventListener("mouseover", e => {
    console.log("You entered the square!");
    div.style.backgroundColor = "white";
})
div.addEventListener("mouseleave", e => {
    console.log("You left the square!");
    div.style.backgroundColor = "grey";
})

// div.addEventListener("mousemove", e => {
//     console.log("You are within the square!");
// })
