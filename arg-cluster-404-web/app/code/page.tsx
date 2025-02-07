import React from "react";

const Cluster = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <h1 className="font-semibold text-2xl">Üçüncü Aşama:</h1>
      <span className="opacity-5">Mail</span>
      <div className="flex flex-col items-center justify-center">
        <p>Seed, bir byte&apos;ın alabileceği değerlerin tümünün toplamıdır.</p>
        <img
          src="/encodeobfuscated.png"
          alt="Encoded Image"
          className="max-w-xs rounded-lg shadow-md"
        />

      </div>
    </div>
  );
};

export default Cluster;
