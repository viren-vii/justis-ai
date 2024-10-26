import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
      <SidebarTrigger className="-ml-1" />
      <ModeToggle className="ml-auto" />
    </header>
  );
};

export default Header;
