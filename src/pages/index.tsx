import Image from "next/image";
import { Inter } from "next/font/google";
import Component from "./component/LoginButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className=" h-full flex w-full  justify-center items-center  ">
      {/* <h1> hllo next js </h1> */}
      <div>
    <Component />
      </div>
    </div>
  );
}
