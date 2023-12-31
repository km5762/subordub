import React, { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={
        "bg-zinc-800/75 border-zinc-700 border-solid border rounded-xl p-4 " +
        className
      }
    >
      {children}
    </div>
  );
}
