import React from "react";
import { SiSpinrilla } from "react-icons/si";

export default function LoadingScreen() {
  return (
    <div className="top-0 bottom-0 right-0 left-0 fixed w-screen bg-white flex flex-col items-center justify-center gap-10">
      <SiSpinrilla className="animate-spin h-32 w-32 fill-black" />
    </div>
  );
}
