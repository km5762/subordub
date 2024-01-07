"use client";

import { useRouter } from "next/navigation";

export default function FacebookSignInButton() {
  const router = useRouter();
  return <button>Sign in with Facebook</button>;
}
