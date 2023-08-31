let myPlaylist = ["Never gonna give up", "Take on me", "I will survive", "Little dark age" ];
console.log(myPlaylist[0]);
console.log(myPlaylist[1]);
console.log(myPlaylist[2]);
console.log(myPlaylist[3]);
for (i = 0; i < myPlaylist.length; i++) {
  let number = i + 1;
  console.log("My favorite song number " + number + " is " + myPlaylist[i]);
}