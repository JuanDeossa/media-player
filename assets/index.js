import MediaPlayer from "./media-player.js"
import autoPlay from "./plugins/autoplay.js"

const video = document.querySelector("video")
const playButton = document.querySelector(".playPause")
const muteButton = document.querySelector(".muteUnmute")
const player = new MediaPlayer({
    el:video,
    plugins:[
        // new autoPlay()
    ]
})

playButton.onclick=()=>{player.togglePlay()}   
muteButton.onclick=()=>{player.toggleMute()}   

