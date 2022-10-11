import MediaPlayer from "./media-player.js"

const video = document.querySelector("video")
const button = document.querySelector("button")
const player = new MediaPlayer({el:video})

button.onclick=()=>{player.togglePlay()}   


class makeCounter {
    #count;

    constructor(n) {
      this.#count = n;
    }

    get count() {
      return this.#count;
    }

    increase() {
      this.#count += 1;
    }

    decrease() {
      this.#count -= 1;
    }
  }
