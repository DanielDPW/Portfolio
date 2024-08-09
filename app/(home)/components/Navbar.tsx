import Link from 'next/link';
import React from 'react';

import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      link: "https://github.com/DanielDPW",
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/daniel-pedrosa-wu-248107314/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    }
  ];

  return (
    <nav className="py-6 md:py-10 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold underline underline-offset-8 decoration-red-700 -rotate-2 hover:scale-110">
        Daniel Pedrosa Wu
      </h1>
      <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
        {socials.map((social, index) => {
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <social.Icon className="w-4 h-4 md:w-5 md:h-5 hover:scale-150 transition-transform" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
