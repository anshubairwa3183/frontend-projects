function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all!
        // So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile.
        // We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

// Ensure the DOM is fully loaded before initializing
document.addEventListener(".main", locomotive);


function videoPlay(){
    var video = document.querySelector(".video")
var play = document.querySelector(".play")

video.addEventListener("mouseenter",function(){
    gsap.to(play,{
        scale:1,
        opacity:1
    })
})

video.addEventListener("mouseleave",function(){
    gsap.to(play,{
        scale:0,
        opacity:0
    })
})

video.addEventListener("mousemove",function(dets){
    gsap.to(play,{
        left:dets.x-55,
        top:dets.y-65
    })
})
}

function title(){
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.5
    })

    gsap.from(".page1 .video",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.3,
    })
}

function bgCursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            x:dets.x,
            y:dets.y
        })
    })
    
    document.querySelector("#child1").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(1)',
            backgroundColor:'#E5E4E2'
        })
    })
    
    document.querySelector("#child1").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(0)'
        })
    })
    
    document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(1)',
            backgroundColor:'#C0C0C0'
        })
    })
    
    document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(0)'
        })
    })
    
    document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(1)',
            backgroundColor:'#FFE4E1'
        })
    })
    
    document.querySelector("#child3").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(0)'
        })
    })
    
    document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(1)',
            backgroundColor:'#B9D9EB'
        })
    })
    
    document.querySelector("#child4").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(0)'
        })
    })    
}

gsap.to(".nav .navright .links",{
    transform:"translateY(-100%)",
    opacity:0,
    delay:2
})

locomotive()
bgCursor()
title()
videoPlay()

