import React from "react";
import dynamic from "next/dynamic";
// import HomePage from "@/components/dashboard/HomePage/page";
const HomePage = dynamic(() => import("@/components/Dashboard/HomePage/page"), {
  ssr: false,
});

function Dashboard() {
  return (
    <div className="w-full">
      <HomePage />
    </div>
  );
}

export default Dashboard;
