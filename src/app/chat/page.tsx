import Chat from "@/components/ui/chat";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ChatRightPanel from "@/components/ui/chat-right-panel";

export default function ChatPage() {
  return (
    <ResizablePanelGroup direction="horizontal" className="gap-6">
      <ResizablePanel minSize={50}>
        <Chat />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize={20}>
        <ChatRightPanel />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

