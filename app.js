// Get DOM Elements
const durationInput=document.querySelector("#duration")
const startButton=document.querySelector("#start")
const pauseButton=document.querySelector("#pause")
const circle=document.querySelector("circle")
// Create vars for offset and perimeter to update animation
let offset
let perimeter
// Use timer class to construct new timer
const timer=new Timer(durationInput,startButton,pauseButton,{
    onStart(duration){
        // get perimeter of circle
        perimeter = parseFloat(circle.getAttribute("r")) * 2 * Math.PI
        // update timeInit to current duration in input
        this.timeInit=duration
        // set offset to zero
        offset=0
        // initialize circle svg stroke to cover full perimeter of circle
        circle.setAttribute("stroke-dasharray", perimeter)
        circle.setAttribute("stroke-dashoffset", 0)

    },
    onTick(){
        // update circle's stroke-offset on on each tick() to animate countdown
        circle.setAttribute("stroke-dashoffset", offset)
        // calc amount dashoffset should update each tick 
        const incrementCircle= -(perimeter/this.timeInit)*this.increment
        offset += incrementCircle
    }
})