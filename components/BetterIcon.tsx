import React from 'react';

// A better way to illustrate with icons
// Pass any SVG icon as children (recommended width/height : w-6 h-6)
// By default, it's using your primary color for styling
const BetterIcon = ({children, className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`inline-flex items-center justify-center text-primary ${className}`} {...props}>
      {children}
    </div>
  );
};

export default BetterIcon;
