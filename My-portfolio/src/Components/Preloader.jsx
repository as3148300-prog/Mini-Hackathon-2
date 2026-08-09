import React, { useRef, useState,useEffect } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)



const Preloader = () => {
    const wrapperRef = useRef(null)
    const headingRef = useRef(null)
   const [count , setCount] =  useState(0)
  const barRef = useRef(null)
 useEffect(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(wrapperRef.current, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          wrapperRef.current.style.display = "none"
        }
      })
    }
  })

  const counter = { val: 0 }

  tl.to(counter, {
    val: 100,
    duration: 3,
    onUpdate: () => {
      setCount(Math.round(counter.val))
    }
  }, 0)

  tl.to(barRef.current, {
    width: "100vw",
    duration: 3,
  }, 0)

  const split = new SplitText(headingRef.current, {
    type: "chars",
    mask: "chars",
  })

  gsap.set(split.chars, { yPercent: 120, opacity: 0 })

  tl.to(split.chars, {
    yPercent: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.04,
    ease: "expo.out",
  }, 0)

}, [])
  return (
    <div ref={wrapperRef} className="h-screen w-screen relative flex items-end  ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1  ref={headingRef} className='text-7xl   tracking-[3px] font-[550] font-[font] overflow-hidden'>AREEB SHEIKH</h1>
      </div>

      <div className='flex flex-col gap-1'>
        <h3 className='text-[40px] ml-4 font-[font] '>
            {count}%
        </h3>
         <div ref={barRef} className="h-2 w-[50px] bg-black"></div>
      </div>
    </div>
  )
}

export default Preloader