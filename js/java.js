const menu=document.querySelector(".menu")
function menutoggle(){
menu.classList.toggle('show')
}
const tl=gsap.timeline()
gsap.registerPlugin(ScrollTrigger)
tl.to('.load',{
    height:0,
    stagger:0.2,
    duration:2,
})
tl.to('#loader',{
    height:0,
})
gsap.to(".media",{
    x:1200,
    duration:4,
    yoyo:true,
    repeat:-1,
    opacity:0,
    scrollTrigger:{
        trigger:".section5",
        scroller:'body',
        start:'15%',
    }
})
gsap.from(".card-p",{
    y:350,
duration:3,
opacity:0,
repeat:-1,
yoyo:true,
scrollTrigger:{
    trigger:".section7",
    scroller:"body",
    start:"15%"
}
})
 gsap.to(".para8",{
    color:'black',
    duration:4,
    repeat:-1,
    opacity:0,
    yoyo:true,
    scrollTrigger:{
        trigger:".section8",
        scroller:"body",
        start: " top 50%",
    } })
    gsap.from(".para8",{
        color:'pink',
        duration:4,
        repeat:-1,
        opacity:0,
        yoyo:true,
        scrollTrigger:{
            trigger:".section8",
            scroller:"body",
            start: " top 50%",
        } })

let course=document.querySelectorAll(".course-card")
// let cardSpreed=()=>{
    for(let i=0;i<course.length;i++){
        course[i].addEventListener('mouseenter',()=>{
           gsap.to(course[i],{
            width:"30%",
            height:"400px",
        })
        })
        course[i].addEventListener('mouseleave',()=>{
            gsap.to(course[i],{
                width:"25%",
                height:"350px",
            })
         })
    }
