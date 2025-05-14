"use client";
import styles from "@/app/styles/button.module.css";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, className)}
      {...props}
    >
      {children}
    </button>
  );
}
