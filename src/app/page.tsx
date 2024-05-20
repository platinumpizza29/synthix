import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavbarComp from "~/components/navbar";

export default function HomePage() {

  const { userId } = auth()

  if (userId) {
    redirect("/home")
  }

  return (
    <main className="h-screen w-screen">
      <NavbarComp />
      <div className="text-3xl md:text-7xl flex flex-col justify-center items-center py-8">
        <h1>Generate anything</h1>
        <h1>what's in your mind</h1>
        <button className="btn btn-primary rounded-2xl">Get Started</button>
      </div>
    </main>
  );
}
