import {  poppings } from '@/lib/font';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import React from 'react'

const GradientText = ({text,className} : {text : string,className ?: ClassValue}) => {
  return (
     <h1 className={cn(
      "bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl text-transparent md:text-7xl",
      poppings.className,
      className
     )}>
            {text}
    </h1>
  )
}

export default GradientText;