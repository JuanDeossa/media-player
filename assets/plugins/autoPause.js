function autoPause() {
    this.threshold=0.25
    this.handleIntersection=this.handleIntersection.bind(this)
    this.handleVisibilityChange=this.handleVisibilityChange.bind(this)
}
autoPause.prototype.run=function(video){
    this.video=video
    const handler = this.handleIntersection
    const config = {
        threshold:this.threshold
    }
    const observer = new IntersectionObserver(handler,config)
    observer.observe(video.media)
    document.addEventListener("visibilitychange",this.handleVisibilityChange)
}
autoPause.prototype.handleIntersection=function(entries) {
    const entry = entries[0]
    const ratio = entry.intersectionRatio.toFixed(6)
    if (ratio>this.threshold) {
        this.video.play()
    }else{
        this.video.pause()
    }
}
autoPause.prototype.handleVisibilityChange=function() {
    const state = document.visibilityState
    if (state==="visible") {
        this.video.play()
    } else {
        this.video.pause()
    }
}
export default autoPause