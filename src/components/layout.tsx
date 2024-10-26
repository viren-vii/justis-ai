"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { SidebarLeft } from "./sidebar-left";
import Header from "./header";
import SearchMenu from "./search-menu";

export default function Layout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }>
      <SearchMenu />
      <SidebarLeft />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col overflow-hidden pl-10">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
