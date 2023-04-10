import React, { HtmlHTMLAttributes, ReactElement } from "react";
import Link from "next/link";
import style from "./Button.module.scss" ;
type ButtonProps = HtmlHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactElement | string ;
  href: string;
  width?:'fullwidth'|'inline'
};
const Button: React.FC<ButtonProps> = ({ width = 'inline', children, ...props }) => {
  return <Link className={`${style.button} ${style[width]}`} {...props}>{children && children}</Link>;
};
export default Button ;