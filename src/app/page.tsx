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
      <div className="text-3xl md:text-7xl flex flex-col justify-center items-center py-8 space-y-4">
        <h1>Generate <span className="bg-primary p-2 rounded-2xl text-white">Anything</span></h1>
        <h1>what's in your mind</h1>
        <button className="btn btn-primary rounded-2xl my-8">Get Started</button>
        <div className="p-2 md:p-12 w-full">
          <div className="mockup-window border bg-base-300">
            <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
          </div>
        </div>
      </div>
    </main>
  );
}
