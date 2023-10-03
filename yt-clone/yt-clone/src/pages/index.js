import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import { Menu } from "@/components/categoryMenu";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <div className="midConatainer">
        <Navbar />
        <div className="lilContainer">
          <Sidebar />
          <div>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
