import Image from "next/image";
import Hero from "@/components/main/Hero";
import StarBackground from "@/components/main/StarBackground";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-ful w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
