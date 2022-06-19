console.log("Wecome to Groove");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myPGB = document.getElementById("myPGB");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Udd Gaya - B Praak",
    filepath: "songs/1.mp3",
    coverpath: "covers/cover1.jpg",
  },
  {
    songName: "Gani - Akhil",
    filepath: "songs/2.mp3",
    coverpath: "covers/cover2.jpg",
  },
  {
    songName: "Blue Eyes - Honey Singh",
    filepath: "songs/3.mp3",
    coverpath: "covers/cover3.jpg",
  },
  {
    songName: "Brown Munde - A P Dhillon",
    filepath: "songs/4.mp3",
    coverpath: "covers/cover4.jpg",
  },
  {
    songName: "Khabbi Seat - Amy Virk",
    filepath: "songs/5.mp3",
    coverpath: "covers/cover5.jpg",
  },
  {
    songName: "Taare - Aatish",
    filepath: "songs/6.mp3",
    coverpath: "covers/cover6.jpg",
  },
  {
    songName: "Born to Shine - Diljit Dosanjh",
    filepath: "songs/7.mp3",
    coverpath: "covers/cover7.jpg",
  },
  {
    songName: "Do you Know - Diljit Dosanjh",
    filepath: "songs/8.mp3",
    coverpath: "covers/cover8.jpg",
  },
  {
    songName: "Viah di Khabar - Kaka",
    filepath: "songs/9.mp3",
    coverpath: "covers/cover9.jpg",
  },
  {
    songName: "Mera Yaar - Gurnam Bhullar",
    filepath: "songs/10.mp3",
    coverpath: "covers/cover10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle Play/Pause Click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myPGB.value = progress;
});

myPGB.addEventListener("change", () => {
  audioElement.currentTime = (myPGB.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity= 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
      songIndex=0
  }
  else{
      songIndex +=1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
      
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
      songIndex=0
  }
  else{
      songIndex -=1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");

})