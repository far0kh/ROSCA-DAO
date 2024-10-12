import React, { useState } from 'react';

const HoverLogo: React.FC<{}> = () => {
  const defaultSrc = "/images/logo-b.webp"
  const hoverSrc = "/images/logo-o.webp"
  const alt = "Piltonet Logo"

  const defaultTextColor = "text-gray-700"
  const hoverTextColor = "text-orange-500"

  const [src, setSrc] = useState(defaultSrc);
  const [textColor, setTextColor] = useState(defaultTextColor);

  const defaultAction = () => {
    setSrc(defaultSrc)
    // setTextColor(defaultTextColor)
  }

  const hoverAction = () => {
    setSrc(hoverSrc)
    // setTextColor(hoverTextColor)
  }

  return (
    <div
      onMouseEnter={() => hoverAction()}
      onMouseLeave={() => defaultAction()}
      className='flex gap-2 items-center'
    >
      <img
        src={src}
        alt={alt}
        width={40}
        height={40}
      />
      <p className={`hidden md:block font-normal text-xl tracking-wider text-gray-700 ${textColor}`}>
        PILTONET
      </p>
    </div>
  );
};

export default HoverLogo;