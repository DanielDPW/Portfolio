import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react';
import { GiThink } from "react-icons/gi";
import { BiMath } from "react-icons/bi";
import { SiGodotengine } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiC } from "react-icons/si";
import { SiHaskell } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "Problem-Solving",
      Icon: GiThink,
    },
    {
      text: "Mathematics",
      Icon: BiMath,
    },
    {
      text: "Godot",
      Icon: SiGodotengine,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "C",
      Icon: SiC,
    },
    {
      text: "Haskell",
      Icon: SiHaskell,
    }
  ];

  return (
    <div className= "max-w-5xl mx-auto px-8">
      <div className="group flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-red-500 transition-all mb-1">
          Skills
        </h1>
        <div className="w-28 md:w-36 lg:w-44 h-1 bg-red-700 rounded-full"></div>
      </div>
      <HoverEffect items={skills} />
    </div>
  );
}
