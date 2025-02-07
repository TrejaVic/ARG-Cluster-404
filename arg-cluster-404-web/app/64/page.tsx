import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Cluster = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <h1 className="font-semibold text-2xl">İkinci Aşama:</h1>
      <span className="opacity-5">Deneme</span>
      <div className="flex flex-col items-center justify-center">
        <p>Tebrikler. Yeni oyuncağını dene.</p>
        <p>"Seed" videonun saniyesinde gizli.</p>
        <img
          src="/encoded.png"
          alt="Encoded Image"
          className="max-w-xs rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Cluster;
