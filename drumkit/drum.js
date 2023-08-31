// function playSong() {
//     let song =  Audio(
//         "gimmelove.mp3"
//     )
//     song.play()
// }

let keysArray = [
    "w",
    "a",
    "s",
    "d",
    "q",
    "e",
    "x",
]

let picsArray = [
    "crash.png",
    "kick.png",
    "snare.png",
    "tom1.png",
    "tom2.png",
    "tom3.png",
    "tom4.png",
    
]
let audioArray = [
    "crash.mp3",
    "kick-bass.mp3",
    "snare.mp3",
    "tom-1.mp3",
    "tom-2.mp3",
    "tom-3.mp3",
    "tom-4.mp3",
    
]

for (let i = 0; i < picsArray.length;i++) {
    if(picsArray[i] === "crash.png"){
    }
    let crashPlay = new Audio (audioArray[i])
let crash = document.createElement("div")
crash.innerHTML = keysArray[i]
crash.style.cssText = 
"width: 100px;background-color:white;background-position:center; height:100px; background-image: url(" + picsArray[i] +"); background-size: 60px 100px; background-repeat: no-repeat; border: 3px solid black; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 32px; color: black"
document.getElementById("div").appendChild(crash)
crash.addEventListener("click", function (){
    crashPlay.play()
    // document.addEventListener("keydown",playByKey)
})
}
document.addEventListener("keydown", function (playByKey) {
    console.log(keysArray.indexOf(playByKey.key))
    playSound(keysArray.indexOf(playByKey.key))
}
)

function playSound(index){
    let audio = new Audio(audioArray[index])
    audio.play()
}

// function playByKey(event){
    
//     console.log(event.key)

//     if(event.key == "w"){
//             crashPlay = new Audio ("crash.mp3")
//             crashPlay.play()
//         }
//     else if(event.key == "a"){
//             crashPlay = new Audio ("kick-bass.mp3")
//             crashPlay.play()
//         }
//     else if(event.key == "s"){
//             crashPlay = new Audio ("snare.mp3")
//             crashPlay.play()
//            }
//     else if(event.key == "d"){
//             crashPlay = new Audio ("tom-1.mp3")
//             crashPlay.play()
//            }
//     else if(event.key == "q"){
//             crashPlay = new Audio ("tom-2.mp3")
//             crashPlay.play()
//            }
//     else if(event.key == "e"){
//             crashPlay = new Audio ("tom-3.mp3")
//             crashPlay.play()
//            }
//     else if(event.key == "x"){
//             crashPlay = new Audio ("tom-4.mp3")
//             crashPlay.play()
//            }

// }


// let crashPlay = new Audio ("crash.mp3")
// let crash = document.createElement("div")
// crash.style.cssText = 
// "width: 60px; height:100px; background-image: url(crash.png); background-size: 60px 100px; background-repeat: no-repeat; border: 3px solid black; border-radius: 10px;"
// document.getElementById("div").appendChild(crash)
// crash.addEventListener("click", function (){
//     crashPlay.play()
// })

// let kickBassPlay = new Audio ("kick-bass.mp3")
// let kickBass = document.createElement("div")
// kickBass.style.cssText = 
// "width: 100px; height: 100px; background-image: url(kick.png); background-size: contain; background-repeat: no-repeat; border: 3px solid black; border-radius: 10px;"
// document.getElementById("div").appendChild(kickBass)
// kickBass.addEventListener("click", function (){
//     kickBassPlay.play()
// })

// let snarePlay = new Audio ("snare.mp3")
// let snare = document.createElement("div")
// snare.style.cssText = 
// "width: 73px; height: 100px; background-image: url(snare.png); background-size: contain; background-repeat: no-repeat; border: 3px solid black; border-radius: 10px;"
// document.getElementById("div").appendChild(snare)
// snare.addEventListener("click", function() {
//     snarePlay.play()
// })
// let tom1Play = new Audio ("tom-1.mp3")
// let tom1 = document.createElement("div")
// tom1.style.cssText = 
// "width: 100px; height: 100px; background-image: url(tom1.png); background-size: contain; background-repeat: no-repeat; border: 3px solid black; border-radius: 10px;"
// document.getElementById("div").appendChild(tom1)
// tom1.addEventListener("click", function(){
//     tom1Play.play()
// })

// let tom2Play = new Audio ("tom-2.mp3")
// let tom2 = document.createElement("div")
// tom2.style.cssText = 
// "width: 100px; height: 100px; background-image: url(tom2.png); background-size: contain; background-repeat: no-repeat; border: 3px solid black; border-radius: 10px;"
// document.getElementById("div").appendChild(tom2)
// tom2.addEventListener("click", function(){
//     tom2Play.play()
// })

// let tom3Play = new Audio ("tom-3.mp3")
// let tom3 = document.createElement("div")
// tom3.style.cssText = 
// "width: 76px; height: 100px; background-image: url(tom3.png); background-size: contain; background-repeat: no-repeat; border: 3px solid black; border-radius: 10px;"
// document.getElementById("div").appendChild(tom3)
// tom3.addEventListener("click", function(){
//     tom3Play.play()
// })

// let tom4Play = new Audio ("tom-4.mp3")
// let tom4 = document.createElement("div")
// tom4.style.cssText = 
// "width: 100px; height: 100px; background-image: url(tom1.png); background-size: contain; background-repeat: no-repeat; border: 3px solid black; border-radius: 10px;"
// document.getElementById("div").appendChild(tom4)
// tom4.addEventListener("click", function(){
//     tom4Play.play()
// })

