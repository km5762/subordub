import { signIn } from "next-auth/react";

export default function FacebookSignInButton() {
  return (
    <button onClick={() => signIn("facebook")}>Sign in with Facebook</button>
  );
}
