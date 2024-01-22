import "./globals.css";
// import Dashboard from "@/app/dashboard/layout";

export default function RootLayout({ children }) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className="bg-[#F0F5F9]">
            {/* <Dashboard /> */}
            {children}
        </body>
      </html>
  );
}
