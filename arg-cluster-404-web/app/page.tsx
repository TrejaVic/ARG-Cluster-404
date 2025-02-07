import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex justify-center items-center">
      <div className="flex flex-col">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-bold text-5xl">Cluster.404</h1>
          <span className="opacity-5">Kolay gelsin.</span>
        </div>
        <div className="text-center">
          <Link href="/cluster.404">
            <Button variant={"ghost"} className="mt-5" size={"lg"}>
              Başla
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
