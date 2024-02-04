import "./globals.css";


// metadata
export const metadata = {
  title: "Fabian | Portfolio",
  description: "Web apps | data science projects | by Fabian",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5EFE7]">
          <div className="max-w-[78rem] ml-2 my-2 mr-1 lg:mx-2 lg:my-3 ">
            <div className="flex flex-col lg:gap-x-2 gap-y-2 lg:gap-y-0 lg:flex-row  ">
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}

