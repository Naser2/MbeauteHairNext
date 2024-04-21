'use client'
import React, { useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { classNames } from "@/utils";

const WelcomeScreen = () => {
  const [color, setColor] = useState("#000000");
  const [xy, setXy]=useState({x:"100vw", y:"0vw"});

  let ref = useRef()

  useEffect(() => {
    setTimeout(() => {setXy(  {x:"0vw", y:"100vw"})}, 5000)
  }, [xy])
 

  const handleAnimation = (color) => {
    setColor(color);
  };
  // const [triangleColor, setTriangleColor]= useState("text-indigo-400")
  // const [heroCircleTop, setheroCircleTop]= useState('-ml-[63%] w-[100%] top-[-46%]  lg:top-0  h-[202%] lg:top-[-70%] lg:w-[83%] lg:h-[230%] !animatedCss !slide bg-[#de8358c9]')
  // const [topCircleColor, setTopCircleColor]=useState('bg-[#cfe6ee]')

  // useEffect(() => {
  //   setTimeout(() => {setTriangleColor("bg-gradient-to-b from-[#c34f64] to-indigo-500")}, 4000)
  // }, [triangleColor])
  // // let id = useId()

  useEffect(() => { 
  //  const nextColor = `${'#927f72'}`
  //  const nextColor = `${'#211e24'}`
  //  const nextColor = `${'#e3e3e312'}`
  //  const nextColor = `${'#58555512'}`
  //  const nextColor = `${'#585555a6'}`
      const nextColor = `${'#585555db'}`
   //  const nextColor= `${'linear-gradient(133deg,#e3e3e312 5%,#625f5f4f 35%,#211e24)'}`
   if (xy.x ==="0vw"){
    console.log("SETTING-COLOR: " + nextColor)
    handleAnimation (nextColor)
    // setTimeout(() => { handleAnimation (nextColor)},10)
   } 

  }, [xy])

  // useEffect(() => {
  //   setTimeout(() => {setTopCircleColor("bg-[#cd5c5c]")}, 18000)
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {setTopCircleColor("bg-[#b8e2ff]")}, 28000)
  // }, [topCircleColor])

  // useEffect(() => {
  //   setTimeout(() => {setTopCircleColor("bg-[#f3c14f]")}, 38000)
  // }, [topCircleColor])


  //  const dangerouslySetXYStyle = <div
  //   initial={{
  //   x: -200,
  //   }}
  //   transition={{ duration: 1.3 }}
  //   whileInView={{ opacity: 1, x: 0 }}
  //   viewport={{ once: false }}
  //   className={classNames(heroCircleTop,topCircleColor,"absolute   -z-10 rounded-full")} 
  //   style={{
  //     'transform': 'rotateX(45deg) !important',
  //    'opacity': 1
  // }}
  // />
  return (
    <motion.div ref={ref}
      className={classNames(`b-${color} animated-background max-w-screen`)}
      initial={{
        backgroundColor: color,
        x: xy.x,
      }}
      animate={{
        backgroundColor: color,
        x: xy.y,
      }}
      transition={{
        duration: 1,
      }}
    >
      <p className={classNames(`flex text-center mx-auto py-[45%] text-4xl h-full`)} onClick={handleAnimation}>
      {/* <div id="welcome-screen" className="welcome-screen-state-logo-intro">
            <div id="welcome-screen-background"></div>
             <div id="welcome-screen-foreground">
                <div id="welcome-screen-logo">
                    <img id="welcome-screen-logo-image" src="https://static.wixstatic.com/media/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png/v1/fill/w_240,h_175,al_c,usm_0.66_1.00_0.01/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png" alt=""/>
                    <div id="welcome-screen-logo-cover"></div>
                </div>    
            </div>
        </div>   */}
        </p>
    </motion.div>
  );
};

export default WelcomeScreen ;
