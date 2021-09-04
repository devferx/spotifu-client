import { BottomBar } from "../BottomBar";
import { Sidebar } from "../Sidebar";
import { TopBar } from "../TopBar";

import "./styles.css";

export const Layout = ({ children }) => (
  <div>
    <TopBar />
    <Sidebar />
    <section className="layout-content">{children}</section>
    <BottomBar />
  </div>
);
