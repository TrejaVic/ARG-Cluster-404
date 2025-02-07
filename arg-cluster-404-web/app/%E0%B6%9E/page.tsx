import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Cluster = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <h1 className="font-semibold text-2xl">YİPPİE</h1>
      <span className="opacity-5">YİPPİEEE</span>
      <div className="flex flex-col items-center justify-center">
        <p>YİPPİEEE</p>
        <Link href={"https://www.youtube.com/watch?v=of4aFbUKjbk"} target="_blank">
          <Button variant="link">YİPPİEE</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cluster;
