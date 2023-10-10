import React, { useRef, useEffect, createElement } from "react";
import './Hero.css'
import Navbar from "./Navbar";

function Hero() {
  const bgRef = useRef();
  const startAnimation = () => {
    const lineNumber = 20;
    const heightOffset = 5;
    const xOffset = 100;
    for(let i = 0;i<lineNumber;i++) {
        const newLine = document.createElement('span')
        newLine.classList.add('line')
        newLine.style.top = `${i*5+(heightOffset+Math.floor(Math.random()*2))}%`
        newLine.style.left = `${90+(Math.floor(Math.random()* (xOffset - 2)))}%`
        newLine.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random(1)*255)},${Math.floor(Math.random(1)*255)})`
        newLine.style.animationDelay = `${Math.random()* (1.2)}s`
        bgRef.current.appendChild(newLine);
        setTimeout(()=> {

          bgRef.current.removeChild(newLine)
        },"4500")
    }
  };
  useEffect(() => {
    startAnimation();
    setInterval(()=> {
      startAnimation();

    },"4500")
  }, []);
  return (
    <div
    
      className="hero-wrapper flex flex-col items-center justify-center h-[100%] bg-[#100F15] gap-5 text-white font-neon z-20"
      ref={bgRef}
      id='navbar'
    >
          <Navbar/>

      <h1 className="hero-title text-8xl z-20 max-sm:text-6xl max-[420px]:text-2xl">Daniel Cohen</h1>
      <h2 className="hero-subtext text-4xl z-20  max-sm:text-2xl max-[420px]:text-base">Front-end developer</h2>
    </div>
  );
}

export default Hero;
