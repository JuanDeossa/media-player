import MediaPlayer from "./media-player.js"
import autoPlay from "./plugins/autoplay.js"

const video = document.querySelector("video")
const button = document.querySelector("button")
const player = new MediaPlayer({
    el:video,
    plugins:[new autoPlay()]
})

button.onclick=()=>{player.togglePlay()}   

