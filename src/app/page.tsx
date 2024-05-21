import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import BenefitsComp from "~/components/benefits";
import HowItWorks from "~/components/howItWorks";
import NavbarComp from "~/components/navbar";

export default function HomePage() {

  const { userId } = auth()

  if (userId) {
    redirect("/home")
  }

  return (
    <main className="h-screen w-screen overflow-auto overflow-x-hidden">
      <NavbarComp />
      <div className="text-3xl md:text-7xl flex flex-col justify-center items-center py-8 space-y-4 h-full">
        <div className="relative p-20 ">
          <div className="absolute top-10 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute top-10 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-20 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70i animate-blob"></div>
        </div>
        <div className="space-y-4 h-full">
          <h1>Data You<span className="bg-primary p-2 rounded-2xl text-white">Need</span></h1>
          <h1>Generated on Demand</h1>
          <button className="btn btn-primary rounded-2xl my-8">Get Started</button>
        </div>
      </div>
      <section className="w-full p-10">
        <h1 className="text-7xl text-center">How it Works</h1>
        <div className="w-full">
          <HowItWorks />
        </div>
      </section>
      <section className="h-2/4 w-full p-10 space-y-4">
        <h1 className="text-7xl text-center">Benefits</h1>
        <BenefitsComp />
      </section>
    </main>
  );
}
