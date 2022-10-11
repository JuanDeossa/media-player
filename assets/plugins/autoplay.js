function autoPlay() {
    
}
autoPlay.prototype.run=function(video){
    if (!video.muted) {
        video.muted=true
    }
    video.mute()
    video.togglePlay()
}
export default autoPlay