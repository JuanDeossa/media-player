function autoPlay() {
    
}
autoPlay.prototype.run=function(video){
    video.mute()
    video.togglePlay()
}
export default autoPlay