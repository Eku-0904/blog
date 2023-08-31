
let youtubeArray = ["https://www.youtube.com/watch?v=y17RuWkWdn8","https://www.youtube.com/watch?v=E5VdSJyg1y4&list=RDK3AxYP2G2c8&index=3"]
function show_me() {
    let myPlaylist = ["Never gonna give up", "Take on me", "I will survive", "Little dark age", "Superman", "Columbia", "Nike", "Adidas", "Apple", "Amazon", "G-Shock", "Barbie" ];
      document.getElementById('show_me1').remove();
      document.getElementById("border").style.display = "flex"
      // document.getElementById("border").style.cssText = "flex-wrap:wrap"

      
      for(let i = 0 ; i < myPlaylist.length ; i++) {

          let number = document.createElement("span")
        number.innerHTML = "#"+(i+1)
        number.style.cssText = "background-color: purple; padding-left: 3px; padding-right: 3px"
        let songs = document.createElement("div");
        songs.style.cssText = "width:120px; "
        songs.innerHTML = myPlaylist[i];
        document.getElementById("border").appendChild(songs);
        songs.prepend(number);
        songs.addEventListener("click",function(){
          print(i)
        })
    }
}

function print(id){
  window.open(youtubeArray[id],"","")
}




































































// let border = document.createElement("div")
    //    console.log(myPlaylist[0]);
    //    console.log(myPlaylist[1]);
    //    console.log(myPlaylist[2]);
    //    console.log(myPlaylist[3]);