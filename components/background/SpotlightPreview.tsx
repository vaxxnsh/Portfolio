'use client';
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import { ClassValue } from "clsx";


export function SpotlightBackground({children, className} : {
    children : ReactNode
    className ?: ClassValue
}) {
  return (
    <div className="flex fixed h-[100svh] w-full no-scrollbar bg-black/[0.96] antialiased justify-center will-change-transform no-scrollbar">
      <div
        className={cn(
          "pointer-events-none inset-0 [background-size:40px_40px] select-none absolute",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className={cn(
            "-top-40 left-0 md:-top-20 md:left-60 fixed"
        )}
        fill="white"
      />
      <div className={cn(
        "flex justify-center  w-full overflow-y-auto no-scrollbar",
        className
      )}>
        <div className={cn("max-w-3xl")}>
        {children}
      </div>
      </div>
    </div>
 
  );
}
