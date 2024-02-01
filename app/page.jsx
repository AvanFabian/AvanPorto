import React from "react";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("@/components/Dashboard/HomePage/page"), {
  ssr: false,
});

function Dashboard() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default Dashboard;
