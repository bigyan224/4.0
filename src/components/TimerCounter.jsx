import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
const Timer3 = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  const timeCounter = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const t1= gsap.timeline();
  useGSAP(()=>{
    t1.to(".heading",{width:0,scrollTrigger:{
      trigger:".heading",
      start:"top 80%",
      end:"bottom center",
      scrub:2.5,
    }}).to(".revealBox",{height:0,ease:Power4.easeInOut,stagger:.12,scrollTrigger:{
      trigger:".revealBox",
      start:"top 70%",
      end:"center center",
      scrub:2.5,
    }})
  },{scope:timeCounter});
  return (
    <div ref={timeCounter} className="flex flex-col items-center justify-center h-screen gap-8 sm:gap-16">
      <span className="text-2xl relative sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
        Registration Starts Dexterix 4.0
        <h1 className="absolute heading w-full h-full bg-cyan-400 top-0 right-0"></h1>
      </span>
      <div className="flex justify-center gap-3 sm:gap-8 font-Orbitron">
        {/* Day Box */}
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
              {countDownTime?.days}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
          </div>
          <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.days == 1 ? "Day" : "Days"}
          </span>
          <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-cyan-400 revealBox"></div>
        </div>
        {/* Hour Box */}
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
              {countDownTime?.hours}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
          </div>
          <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
          </span>
          <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-cyan-400 revealBox"></div>
        </div>
        {/* Minute Box */}
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
              {countDownTime?.minutes}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
          </div>
          <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
          <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-cyan-400 revealBox"></div>
        </div>
        {/* Second Box */}
        <div className="flex flex-col gap-5 relative">
          <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
            <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
              {countDownTime?.seconds}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
          </div>
          <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
          </span>
          <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-cyan-400 revealBox"></div>
        </div>
      </div>
    </div>
  );
};
export default Timer3;