import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { LayoutProps } from "../../types/layout";
import Navbar from "./navbar";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: LayoutProps) {
  return (
    <div data-theme="bumblebee">
      <Head>
        <title>AirDxd</title>
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <div className="w-full h-auto flex justify-center flex-col items-center p-4">
        {children}
      </div>
    </div>
  );
}
