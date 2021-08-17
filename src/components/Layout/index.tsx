import { BottomBar } from "../BottomBar";
import { Sidebar } from "../Sidebar";
import { TopBar } from "../TopBar";

import "./styles.css";

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => (
  <div>
    <TopBar />
    <Sidebar />
    <section className="layout-content">{children}</section>
    <BottomBar />
  </div>
);
