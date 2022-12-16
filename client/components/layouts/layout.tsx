import Head from "next/head";
import { LayoutProps } from "../../types/layout";
import Navbar from "./navbar";

export default function Layout({ children }: LayoutProps) {
  return (
    <div data-theme="bumblebee">
      <Head>
        <title>AirDxd</title>
      </Head>
      <Navbar />
      <div className="w-full h-auto flex justify-center flex-col items-center p-4">
        {children}
      </div>
    </div>
  );
}
