import React from "react";

const Cluster = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <h1 className="font-semibold text-2xl">Dördüncü Aşama:</h1>
      <span className="opacity-5">Password</span>
      <div className="flex flex-col items-center justify-center">
        <p>
          Unutmadığını düşünüyorum. Koddaki harflerin alfabedeki sayı
          karşılığının toplamı.
        </p>
        <img
          src="/password.png"
          alt="Encoded Image"
          className="max-w-xs rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Cluster;
