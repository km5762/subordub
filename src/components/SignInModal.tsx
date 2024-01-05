"use client";

import React, { useRef, useState } from "react";
import Container from "./Container";
import GoogleSignInButton from "./GoogleSignInButton";
import FacebookSignInButton from "./FacebookSignInButton";

export default function SignInModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const modalRef = useRef(null);

  function handleClick(event: React.MouseEvent) {
    if (event.target === modalRef.current) {
      setOpen(false);
    }
  }

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      onClick={handleClick}
      ref={modalRef}
      className={
        "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center flex w-full h-full bg-zinc-800/90 " +
        (!open && "hidden")
      }
    >
      <Container>
        <h2>Sign in to continue</h2>
        <div className="flex flex-col gap-4">
          <GoogleSignInButton />
          <FacebookSignInButton />
        </div>
      </Container>
    </div>
  );
}
