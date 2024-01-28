"use client";

import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/app/components/ui/button";

export function Social() {

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: '/timer'
    })
  }

  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Button
        variant="outline"
        className="w-full"
        size="lg"
        onClick={() => onClick('google')}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        className="w-full"
        size="lg"
        onClick={() => onClick('github')}
      >
        <FaGithub className="h-5 w-5"/>
      </Button>
    </div>
  );
}
