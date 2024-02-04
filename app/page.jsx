'use client'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ClockLoader } from "react-spinners";

const HomePage = dynamic(() => import("@/components/Dashboard/HomePage/page"), {
  ssr: false,
});
const Left = dynamic(() => import("@/components/Dashboard/Left/page"), {
  ssr: false,
});

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Clean up on component unmount
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <ClockLoader
            color="#473616"
            size={250}
            speedMultiplier={2.95}
          />
        </div>
      ) : (
        <>
          <Left />
          <HomePage />
        </>
      )}
    </>
  );
}

export default Dashboard;