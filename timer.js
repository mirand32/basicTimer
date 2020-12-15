class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        // get DOM Elements
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        this.timeInit=durationInput.value
        this.increment=0.02
        // Check for callbacks and add to Timer Object if given
        if (callbacks) {
            console.log(true)
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
        // Event listeners 
        this.durationInput.addEventListener("change", this.onChangeTimer)
        this.startButton.addEventListener("click", this.start)
        this.pauseButton.addEventListener("click", this.pause)
    }
    start = () => {
        // run onStart callback if given and pass in current time remaining
        if (this.onStart) {
            this.onStart(this.timeRemaining)
        }
        // run tick function every x milliseconds
        this.interval = setInterval(this.tick, this.increment*1000)
    }
    // clear interval to stop running tick
    pause = () => {
        clearInterval(this.interval)
    }
    // on change of time input change initTime
    onChangeTimer = (e) => {
        this.timeInit=parseFloat(e.target.innerHTML).toFixed(2)
    }
    tick = () => {
        // check if timer reached zero
        if (this.timeRemaining <= 0) {
            // if onComplete callback is given call it
            if (this.onComplete) {
                this.onComplete()
            }
            // stop timer
            this.pause()
        } else {
            //adjust time remaining and run onTick callback if given
            this.timeRemaining = this.timeRemaining - this.increment
            if (this.onTick) {
                this.onTick()
            }
        }
    }
    // getter for time remaining in duration input
    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }
    // setter for time remaining in duration input
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2)
    }
}