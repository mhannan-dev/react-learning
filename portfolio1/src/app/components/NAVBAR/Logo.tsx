import React from 'react'
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/profile.png"
      alt="Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
  );
}

export default Logo;
