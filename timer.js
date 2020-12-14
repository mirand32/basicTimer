class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        this.timeInit=durationInput.value
        if (callbacks) {
            console.log(true)
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
        this.durationInput.addEventListener("click", this.onChangeTimer)
        this.startButton.addEventListener("click", this.start)
        this.pauseButton.addEventListener("click", this.pause)
    }
    start = () => {
        if (this.onStart) {
            this.onStart()
        }
        this.tick()
        this.interval = setInterval(this.tick, 50)
    }
    pause = () => {
        clearInterval(this.interval)
    }

    onChangeTimer = () => {

    }
    tick = () => {
        if (this.timeRemaining <= 0) {
            if (this.onComplete) {
                this.onComplete()
            }
            this.pause()
        } else {
            this.timeRemaining = this.timeRemaining - 0.05
            if (this.onTick) {
                this.onTick()
            }
        }
    }
    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2)
    }
}