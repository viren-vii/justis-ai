import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, File, FullscreenIcon, ScrollText } from "lucide-react";
import { Button } from "./button";
import { useSidebar } from "./sidebar";

const ChatRightPanel = () => {
  const { isMobile } = useSidebar();

  return (
    <div className="p-6 flex flex-col gap-6 h-[calc(100vh-80px)] overflow-y-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <File className="mr-2 h-4 w-4" />
            File Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[50vh]">
            <iframe src="/sample-pdf.pdf" className="w-full h-full" />
          </div>
        </CardContent>
        <CardFooter className="flex">
          <div className="ml-auto flex gap-2 items-center">
            <Button size={"icon"} variant={"outline"}>
              <FullscreenIcon className="h-4 w-4" />
            </Button>
            <Button size={"icon"} variant={"outline"}>
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ScrollText className="mr-2 h-4 w-4" />
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            porttitor mollis purus sit amet lobortis. Integer id metus nibh.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Vestibulum eu consequat quam. Nullam sit amet sem cursus, iaculis
            lacus eget, tincidunt leo. Donec scelerisque, ipsum sed pellentesque
            volutpat, tellus lectus semper augue, eget scelerisque libero lectus
            a massa. Nullam in commodo nibh. Sed pretium lacus ut sollicitudin
            semper. Nulla tempus metus vehicula congue mollis. Nulla faucibus
            pretium arcu id malesuada. Nunc vehicula nunc vitae magna dictum
            lobortis. Vivamus ipsum turpis, pretium nec odio ac, suscipit
            facilisis risus. Suspendisse dapibus congue dolor, vitae porta
            libero blandit in.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatRightPanel;
