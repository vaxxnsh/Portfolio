"use client";
import { ReactNode } from "react";

const GridBackground = ({ children } : {
    children : ReactNode
}) => {
  return (
    <div className="grid-background">
      {children}
      
      <style jsx>{`
        .grid-background {
          min-height: 100vh;
          background-color: #04090f;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default GridBackground