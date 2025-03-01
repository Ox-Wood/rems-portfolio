import { Lexend } from "next/font/google";
import { Anton } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  weight: ['100', '200', '300','400','900'],
  subsets: ['latin'],
})

const anton = Anton({
  weight: "400",
  subsets: ['latin']
})


export const metadata = {
  title: "Rem's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
