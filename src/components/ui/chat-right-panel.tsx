import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, File, FullscreenIcon } from "lucide-react";
import { Button } from "./button";

const ChatRightPanel = ({ pdfList }: { pdfList: string[] }) => {
  return (
    <div className="p-6 flex flex-col gap-6 h-[calc(100vh-80px)] overflow-y-auto">
      {pdfList.length > 0 &&
        pdfList.map((pdf, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <File className="mr-2 h-4 w-4" />
                File Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[75vh]">
                <iframe
                  frameBorder="0"
                  style={{ border: "none" }}
                  src={pdf}
                  className="w-full h-full"
                />
              </div>
            </CardContent>
            {/* <CardFooter className="flex">
              <div className="ml-auto flex gap-2 items-center">
                <Button size={"icon"} variant={"outline"}>
                  <FullscreenIcon className="h-4 w-4" />
                </Button>
                <Button size={"icon"} variant={"outline"}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter> */}
          </Card>
        ))}
    </div>
  );
};

export default ChatRightPanel;
