import { FaLocationArrow, FaCopy } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`${text} copied to clipboard`);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div className="relative z-10">
      <div></div>
      <div className="flex flex-col items-center relative my-10 md:my-20 z-10 max-w-7xl mx-auto p-4 md:p-6 border-2 border-dashed rounded-lg animate-border">
        <div className="pb-10 md:pb-20 pt-20 md:pt-36 relative">
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight
              className="left-80 top-28 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>

          <div className="flex flex-col items-center relative my-10 md:my-20 z-10 max-w-7xl mx-auto p-4 md:p-6 border-2 border-dashed rounded-lg animate-border">
            <div className="flex flex-col md:flex-row w-full mb-6 space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <p className="text-white text-sm md:text-base">
                    +917397610139
                  </p>
                  <button
                    onClick={() => copyToClipboard("+917397610139")}
                    className="bg-teal-500 text-white px-2 py-1 rounded flex items-center"
                  >
                    <FaCopy className="mr-1" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-white text-sm md:text-base">
                    isaacjeddiah@gmail.com
                  </p>
                  <button
                    onClick={() => copyToClipboard("isaacjeddiah@gmail.com")}
                    className="bg-teal-500 text-white px-2 py-1 rounded flex items-center"
                  >
                    <FaCopy className="mr-1" />
                  </button>
                </div>
              </div>
              <div className="text-center md:text-right">
                <a
                  href="https://docs.google.com/document/d/1ufKSQi_XR4etywh_fUA9KLgnf5yco86-chziBcy_CLI/edit?usp=sharing"
                  className="text-teal-500 hover:underline"
                >
                  My Resume
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full mt-8 md:mt-0">
              <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
                <div className="text-2xl md:text-4xl lg:text-5xl text-white">
                  Hi! I am Isaac Jeddiah, <br />I am a
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl text-teal-500">
                  <Typewriter
                    options={{
                      strings: ["Full Stack developer", "ML enthusiastic"],
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

              <div className="relative w-32 h-32 md:w-48 md:h-48">
                <div className="w-full h-full rounded-full bg-blue-600 absolute -top-15 -right-15"></div>
                <img
                  src="/profileimg.png" // Replace with your actual image path
                  alt="My Photo"
                  className="w-full h-full rounded-full relative z-10 object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
