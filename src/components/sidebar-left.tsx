"use client";

import * as React from "react";
import {
  //Blocks,
  //Home,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { AccountHandler } from "@/components/account-handler";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavInbox } from "./nav-inbox";
import { getLocalStorageValue } from "@/lib/localstorage.utils";
import { LOCAL_STORAGE_ACTIVE_THREAD_IDS } from "@/lib/chat.utils";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Ask AI",
      url: "/chat",
      icon: Sparkles,
    },
    {
      title: "Search",
      url: "?search=true",
      icon: Search,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "settings",
      icon: Settings2,
    },
    {
      title: "Trash",
      url: "trash",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "help",
      icon: MessageCircleQuestion,
    },
  ],
};

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const inbox = React.useMemo(() => {
    const thread_ids =
      getLocalStorageValue(LOCAL_STORAGE_ACTIVE_THREAD_IDS) || [];
    return thread_ids.map((thread_id: string) => ({
      url: `/chat?thread_id=${thread_id}`,
      name: thread_id,
    }));
  }, [localStorage]);

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <AccountHandler />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavInbox inbox={inbox} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
