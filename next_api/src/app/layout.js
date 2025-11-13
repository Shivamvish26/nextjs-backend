import { Roboto } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "API with Next js",
  description: "Created by Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
