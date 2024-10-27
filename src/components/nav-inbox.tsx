import {
  ArrowUpRight,
  Link,
  MoreHorizontal,
  StarOff,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { LOCAL_STORAGE_ACTIVE_THREAD_IDS } from "@/lib/chat.utils";
import {
  getLocalStorageValue,
  storeLocalStorageValue,
} from "@/lib/localstorage.utils";

export function NavInbox({
  inbox,
}: {
  inbox: {
    name: string;
    url: string;
  }[];
}) {
  const { isMobile } = useSidebar();

  const deleteThread = (thread_id: string) => {
    const thread_ids = getLocalStorageValue(LOCAL_STORAGE_ACTIVE_THREAD_IDS);

    storeLocalStorageValue(
      LOCAL_STORAGE_ACTIVE_THREAD_IDS,
      thread_ids.filter((id: string) => id !== thread_id)
    );
  };

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Inbox</SidebarGroupLabel>
      <SidebarMenu>
        {inbox.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url} title={item.name}>
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}>
                <DropdownMenuItem
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${location.href}chat?thread_id=${item.name}`
                    );
                  }}>
                  <Link className="text-muted-foreground" />
                  <span>Copy Link</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => deleteThread(item.name)}>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
