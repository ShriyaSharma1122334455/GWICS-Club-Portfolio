import React from "react";

const GwicsLogo: React.FC<{ className?: string }> = ({ className }) => (
  <img src="/gwics.png" alt="GWICS Logo" className={className || "h-12 w-12"} />
);

export default GwicsLogo;
