function MediaPlayer(config) {
    this.media=config.el
    this.plugins=config.plugins || []

    this._initPlugins()
}
MediaPlayer.prototype.togglePlay = function () {
    const video = this.media
    if (video.paused) {
        video.play()
    }else{
        video.pause()
    }
}
MediaPlayer.prototype.toggleMute = function () {
    const video = this.media
    if (video.muted) {
        video.muted=false
    }else{
        video.muted=true
    }
}
MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}
MediaPlayer.prototype.mute = function () {
    const video = this.media
    video.muted=true
}
MediaPlayer.prototype.unMute = function () {
    const video = this.media
    video.muted=false
}

export default MediaPlayer
