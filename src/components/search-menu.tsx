import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Search } from "lucide-react";

const searchList = [
  {
    name: "Project Management & Task Tracking",
    url: "#",
    emoji: "📊",
  },
  {
    name: "Family Recipe Collection & Meal Planning",
    url: "#",
    emoji: "🍳",
  },
  {
    name: "Fitness Tracker & Workout Routines",
    url: "#",
    emoji: "💪",
  },
  {
    name: "Book Notes & Reading List",
    url: "#",
    emoji: "📚",
  },
  {
    name: "Sustainable Gardening Tips & Plant Care",
    url: "#",
    emoji: "🌱",
  },
  {
    name: "Project Management & Task Tracking",
    url: "#",
    emoji: "📊",
  },
  {
    name: "Family Recipe Collection & Meal Planning",
    url: "#",
    emoji: "🍳",
  },
  {
    name: "Fitness Tracker & Workout Routines",
    url: "#",
    emoji: "💪",
  },
  {
    name: "Book Notes & Reading List",
    url: "#",
    emoji: "📚",
  },
  {
    name: "Sustainable Gardening Tips & Plant Care",
    url: "#",
    emoji: "🌱",
  },
  {
    name: "Project Management & Task Tracking",
    url: "#",
    emoji: "📊",
  },
  {
    name: "Family Recipe Collection & Meal Planning",
    url: "#",
    emoji: "🍳",
  },
  {
    name: "Fitness Tracker & Workout Routines",
    url: "#",
    emoji: "💪",
  },
  {
    name: "Book Notes & Reading List",
    url: "#",
    emoji: "📚",
  },
  {
    name: "Sustainable Gardening Tips & Plant Care",
    url: "#",
    emoji: "🌱",
  },
  {
    name: "Project Management & Task Tracking",
    url: "#",
    emoji: "📊",
  },
  {
    name: "Family Recipe Collection & Meal Planning",
    url: "#",
    emoji: "🍳",
  },
  {
    name: "Fitness Tracker & Workout Routines",
    url: "#",
    emoji: "💪",
  },
  {
    name: "Book Notes & Reading List",
    url: "#",
    emoji: "📚",
  },
  {
    name: "Sustainable Gardening Tips & Plant Care",
    url: "#",
    emoji: "🌱",
  },
];

const SearchMenu = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const paramValue = searchParams.get("search");

  const [open, setOpen] = React.useState(paramValue === "true");

  const [searchValue, setSearchValue] = React.useState("");

  return (
    <Drawer
      open={open}
      onOpenChange={(status) => {
        console.log(status);
        setOpen(status);
      }}>
      <DrawerContent>
        {/* <DrawerHeader>
          <DrawerTitle>Search for your Chats</DrawerTitle>
          <DrawerDescription>This will only search titles</DrawerDescription>
        </DrawerHeader> */}
        <div className="flex flex-col gap-4 p-4 ">
          <Input
            startIcon={Search}
            placeholder="Search for your chats"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <ScrollArea className="flex flex-col max-h-[300px]">
            {searchList
              .filter((chat) =>
                chat.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((chat) => (
                <Link to={chat.url} key={chat.url}>
                  <p className="p-2 hover: ">
                    {chat.emoji} {chat.name}
                  </p>
                </Link>
              ))}
          </ScrollArea>
        </div>
        <DrawerFooter>
          <Button asChild>
            <DrawerClose>Close</DrawerClose>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchMenu;
