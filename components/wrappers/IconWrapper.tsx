import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"
import { ReactNode } from "react"

const IconWrapper = ({children,className} : {children : ReactNode,className ?: ClassValue}) => {
  return (
    <div className={cn(
      "bg-white/5 inline-block backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-xl hover:bg-white/20 transition cursor-pointer",
      className
    )}>
        {children}
    </div>
  )
}

export default IconWrapper