import Image from "next/image";
import Hero from "@/components/main/Hero";
import StarBackground from "@/components/main/StarBackground";

export default function Home() {
  return (
    <main className="h-ful w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
      </div>
    </main>
  );
}