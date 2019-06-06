import * as React from "react";

export const HREF_DEFAULT = '#'

interface ButtonProps {
  children: JSX.Element | string;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`button${className ? ` ${className}` : ""}`}
      >
        {children}
      </button>
    );
  }


};
