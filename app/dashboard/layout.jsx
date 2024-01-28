'use client'
import dynamic from "next/dynamic";
// import Left from "@/components/dashboard/Left/page";
const Left = dynamic(() => import("@/components/Dashboard/Left/page"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F0F5F9]">
          <div className="max-w-[78rem] md:mx-3 md:my-3 ">
            <div className=" gap-4 flex flex-col md:flex-row  ">
              <Left />
              {children}
              {/* <Right /> */}
            </div>
          </div>
      </body>
    </html>
  );
}
