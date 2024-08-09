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
    <nav className= "py-10  flex justify-between items-center">
      <h1 className= "text-2xl font-bold underline underline-offset-8 decoration-red-700 -rotate-2 hover:scale-110 translate-x-0">
        Daniel Pedrosa Wu</h1>
      <div className= "flex items-center gap-5">
        {socials.map((social, index) => {
          return (
              <Link href={social.link} key={index} aria-label={social.label}>
                <social.Icon className= "w-5 h-5 hover:scale-150 translate-x-0"/>
              </Link>
            );
          }
        )}
      </div>
    </nav>
  );
}
