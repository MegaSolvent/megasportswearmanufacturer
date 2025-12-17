// src/app/page.js
import Head from "next/head";
import Home from "./components/Home";
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  
  return (
    <>
     
      <Home />
    </>
  );
}
