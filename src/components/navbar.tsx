"use client"

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import React from "react";

export default function NavbarComp() {
  const { user, isLoaded } = useUser()

  return (
    <div className="navbar bg-base-100 flex flex-row justify-between items-center">
      <a className="btn btn-ghost text-xl">Synthix</a>
      <div>
        {user && isLoaded ? <UserButton /> : <SignInButton />}
      </div>
    </div>
  );
}
