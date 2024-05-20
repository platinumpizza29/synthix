"use client"

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import React from "react";

export default function NavbarComp() {
  const { user, isLoaded } = useUser()

  return (
    <div className="navbar bg-base-100 flex flex-row justify-between items-center">
      <a className="btn btn-ghost text-xl">Synthix</a>
      <div>
        <button className="btn btn-primary">{user && isLoaded ? <UserButton afterSignOutUrl="/" /> : <SignInButton />}</button>
      </div>
    </div>
  );
}
