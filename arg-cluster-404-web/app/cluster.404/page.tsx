import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Cluster = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <h1 className="font-semibold text-2xl">Birinci Aşama:</h1>
      <span className="opacity-5">Alet toplama</span>
      <div>
        <Link href={"https://youtu.be/_uXHVty8QzI"} target="_blank">
          <Button variant="link">https://youtu.be/_uXHVty8QzI</Button>
        </Link>
        <p>Kurallara uy. Adımları takip et.</p>
      </div>
    </div>
  );
};

export default Cluster;
