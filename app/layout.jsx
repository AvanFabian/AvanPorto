import "./globals.css";

// metadata
export const metadata = {
  title: "Fabian | Portfolio",
  description: "Web apps | data science projects | by Fabian",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className="bg-[#F5EFE7]">
            {/* <Dashboard /> */}
            {children}
        </body>
      </html>
  );
}
