import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "./ui/SkillDataProvider";
import SkillText from "./ui/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <SkillDataProvider
          src="/html.jpg"
          width={80}
          height={80}
          index={0}
        />
        <SkillDataProvider
          src="/css.jpg"
          width={80}
          height={80}
          index={1}
        />
        <SkillDataProvider
          src="/js.jpg"
          width={65}
          height={65}
          index={2}
        />
        <SkillDataProvider
          src="/tailwind.jpg"
          width={80}
          height={80}
          index={3}
        />
        <SkillDataProvider
          src="/react.jpg"
          width={80}
          height={80}
          index={4}
        />
        <SkillDataProvider
          src="/redux.jpg"
          width={80}
          height={80}
          index={5}
        />
        <SkillDataProvider
          src="/reactquery.jpg"
          width={80}
          height={80}
          index={6}
        />
       
      </div>

      

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      <SkillDataProvider
          src="/next.jpg"
          width={80}
          height={80}
          index={8}
        />
        <SkillDataProvider
          src="/node-js.jpg"
          width={80}
          height={80}
          index={0}
        />
        <SkillDataProvider
          src="/express.jpg"
          width={80}
          height={80}
          index={1}
        />
        
        <SkillDataProvider
          src="/Firebase.jpg"
          width={55}
          height={55}
          index={3}
        />
        
        <SkillDataProvider
          src="/mysql.jpg"
          width={70}
          height={70}
          index={5}
        />
        <SkillDataProvider
          src="/graphql.jpg"
          width={80}
          height={80}
          index={6}
        />
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      <SkillDataProvider
          src="/ts.jpg"
          width={80}
          height={80}
          index={7}
        />
       
        
        
        <SkillDataProvider
          src="/mongodb.jpg"
          width={40}
          height={40}
          index={11}
        />
        <SkillDataProvider
          src="/ReactNative.jpg"
          width={70}
          height={70}
          index={0}
        />
        <SkillDataProvider
          src="/docker.jpg"
          width={70}
          height={70}
          index={1}
        />
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <SkillDataProvider
          src="/flutter.jpg"
          width={60}
          height={60}
          index={0}
        />
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
