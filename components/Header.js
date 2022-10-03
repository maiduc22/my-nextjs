import { Logo } from "../public/images/employee_logo.jpg";
import { Down } from "../public/favicon.ico";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="h-16 w-100 p-3 text-3xl font-bold flex justify-between bg-indigo-500 text-white">
      <div className="tracking-wide">Employee Management</div>
    </header>
  );
};
