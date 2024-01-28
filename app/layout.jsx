import "./globals.css";

// metadata


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
