import React from "react";
import Link from "next/link";

interface VentaButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function VentaButton({ 
  children, 
  variant = "default", 
  className = "", 
  href,
  ...props 
}: VentaButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  let variantStyles = "";
  if (variant === "outline") {
    variantStyles = "bg-transparent border-2 border-[#fac938] text-[#fac938] hover:bg-[#fac938] hover:text-white";
  } else if (variant === "secondary") {
    variantStyles = "bg-white hover:bg-gray-100 text-[#3b2f0d]";
  } else {
    variantStyles = "bg-[#fac938] text-white hover:bg-[#e0b530]";
  }

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}
