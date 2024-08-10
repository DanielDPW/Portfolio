import Link from 'next/link';
import React from 'react';
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export default function Projects() {
    const projects = [
        {
            title: "Simple Platformer Game",
            link: "https://github.com/DanielDPW/Hands-On-GIM",
            cover: "/assets/platformer.png",
            background: "bg-red-500"
        },
        {
            title: "Simple Top-Down Shooter Game",
            link: "https://github.com/DanielDPW/Tucil-Clan-Programmer-GIM-ITB",
            cover: "/assets/shoot.png",
            background: "bg-green-500"
        },
        {
            title: "Monster Taming Game in Python",
            link: "https://github.com/DanielDPW/Tugas-Besar-Daspro-IF1210-K10-G",
            cover: "/assets/cligame.png",
            background: "bg-blue-500"
        },
    ];

    return (
        <div className="py-10 p-5 sm:p-0">
            <div className="group flex flex-col items-center justify-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-red-500 transition-all mb-1">
                    Projects
                </h1>
                <div className="w-28 md:w-36 lg:w-44 h-1 bg-red-700 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 pt-20 gap-4">
                {projects.map((project, index) => (
                    <Link href={project.link} key={index}>
                        <div className={cn("p-5 rounded-md", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className="relative w-full h-60 md:h-96">
                                <h1 className="text-white text-lg md:text-xl">{project.title}</h1>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
