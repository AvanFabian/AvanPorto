import "./globals.css";
import dynamic from "next/dynamic";
// import Left from "@/components/dashboard/Left/page";
const Left = dynamic(() => import("@/components/Dashboard/Left/page"), {
  ssr: false,
});

// metadata
export const metadata = {
  title: "Fabian | Portfolio",
  description: "Web apps | data science projects | by Fabian",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5EFE7]">
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

