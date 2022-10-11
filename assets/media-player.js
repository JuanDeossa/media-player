function MediaPlayer(config) {
    this.media=config.el
}
MediaPlayer.prototype.togglePlay = function () {
    const video = this.media
    if (video.paused) {
        video.play()
    }else{
        video.pause()
    }
}

export default MediaPlayer
