const durationInput=document.querySelector("#duration")
const startButton=document.querySelector("#start")
const pauseButton=document.querySelector("#pause")
const circle=document.querySelector("circle")
let offset
let perimeter

const timer=new Timer(durationInput,startButton,pauseButton,{
    onStart(duration){
        perimeter = parseFloat(circle.getAttribute("r")) * 2 * Math.PI
        this.timeInit=duration
        offset=0
        circle.setAttribute("stroke-dasharray", perimeter)
        circle.setAttribute("stroke-dashoffset", 0)

    },
    onTick(){
        circle.setAttribute("stroke-dashoffset", offset)
        const increment= -(perimeter/this.timeInit)*0.02
        offset += increment
    },
    onComplete(){
    } 
})