import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import { ClassValue } from "clsx";

export function SpotlightBackground({children, className} : {
    children : ReactNode
    className ?: ClassValue
}) {
  return (
    <div className="relative flex h-[100svh] w-full overflow-auto no-scrollbar bg-black/[0.96] antialiased md:pt-[6svw] justify-center will-change-transform">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className={cn(
            "-top-40 left-0 md:-top-20 md:left-60"
        )}
        fill="white"
      />
      <div className={cn("min-w-3xl")}>
        {children}
      </div>
    </div>
  );
}
