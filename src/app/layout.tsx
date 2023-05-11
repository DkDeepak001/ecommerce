import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Basic Eommerce",
  description: "created to test nextjs 13  and tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-16 items-center border-b-[1px] border-slate-300/50 bg-black">
          <h2 className="ml-5 text-2xl font-semibold text-slate-100">
            {metadata.title}
          </h2>
        </div>
        <div className="bg-black">{children}</div>
      </body>
    </html>
  );
}
