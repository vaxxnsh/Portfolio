import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"
import { ReactNode } from "react"

const CardWrapper = ({children,className} : {children : ReactNode,className ?: ClassValue}) => {
  return (
    <div className={cn(
      "bg-white/5 w-full inline-block backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-xl transition",
      className
    )}>
        {children}
    </div>
  )
}

export default CardWrapper