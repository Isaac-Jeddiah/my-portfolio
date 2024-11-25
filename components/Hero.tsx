import { FaLocationArrow } from "react-icons/fa6";
import { FaCopy, FaFlag } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Typewriter from 'typewriter-effect';
const Hero = () => {

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard`);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="pb-20 pt-36 relative">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col items-center relative my-20 z-10 max-w-7xl mx-auto p-6 border-2 border-dashed rounded-lg animate-border">
        <div className="flex justify-between w-full mb-6">
          <div className="flex items-center space-x-2">
         
            <p className="text-white">+917397610139</p>
            <button onClick={() => copyToClipboard('+91123456789')} className="bg-teal-500 text-white px-2 py-1 rounded flex items-center">
              <FaCopy className="mr-1" /> 
            </button>
          </div>
          <div><a href="https://docs.google.com/document/d/1ufKSQi_XR4etywh_fUA9KLgnf5yco86-chziBcy_CLI/edit?usp=sharing">My Resume</a></div>
          <div className="flex items-center space-x-2">
            <p className="text-white">isaacjeddiah@gmail.com</p>
            <button onClick={() => copyToClipboard('isaac@gmail.com')} className="bg-teal-500 text-white px-2 py-1 rounded flex items-center">
              <FaCopy className="mr-1" /> 
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="max-w-xl">
            {/* {<p className="uppercase tracking-widest text-xs text-blue-100 mb-2">
              Dynamic Web Magic with Next.js
            </p>} */}

            {/**
             *  Typewriter effect for the introduction
             */}
            <div className="text-3xl md:text-4xl lg:text-5xl text-white">
              Hi! I am Isaac Jeddiah, <br />
              I am a
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-teal-500">
              <Typewriter
                options={{
                  strings: ['Full Stack developer','ML enthusiastic'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <a href="#about" className="mt-4 inline-block">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-blue-600 absolute -top-15 -right-15"></div>
            <img 
              src="/profileimg.png" // Replace with your actual image path
              alt="My Photo"
              className="w-48 h-48 rounded-full relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
