import { Children } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="h-screen bg-red-200 flex flex-col p-5 mt-16">
        <div className="flex-1">{children}</div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};
