const durationInput=document.querySelector("#duration")
const startButton=document.querySelector("#start")
const pauseButton=document.querySelector("#pause")
const circle=document.querySelector("circle")
const perimeter = parseFloat(circle.getAttribute("r")) * 2 * Math.PI
let offset=0

const timer=new Timer(durationInput,startButton,pauseButton,{
    onStart(){
        circle.setAttribute("stroke-dasharray", perimeter)
        circle.setAttribute("stroke-dashoffset", 0)

    },
    onTick(){
        circle.setAttribute("stroke-dashoffset", offset)
        const increment= -(perimeter/this.timeInit)*0.05
        offset += increment
    },
    onComplete(){
    } 
})