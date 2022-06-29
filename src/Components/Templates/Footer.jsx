import React from "react";
import { SiGithub } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="h-48 border-t-2 w-full flex items-center justify-center gap-2">
      <p className="text-x font-bold flex gap-1">
        Make by
        <a className="text-red-500 flex items-center" href="https://github.com/iLucasPires">
          Lucas
          <SiGithub />
        </a>
      </p>
    </footer>
  );
}
