import React from "react";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("@/components/Dashboard/HomePage/page"), {
  ssr: false,
});
import ScrollToTop from "react-scroll-to-top";
function Dashboard() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default Dashboard;
