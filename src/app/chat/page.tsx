import Chat from "@/components/ui/chat";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ChatRightPanel from "@/components/ui/chat-right-panel";

import { Client } from "@langchain/langgraph-sdk";

const DEPLOYMENT_URL = import.meta.env.VITE_SERVER_URL;

export default function ChatPage() {
  const client = new Client({ apiUrl: DEPLOYMENT_URL });
  // Using the graph deployed with the name "agent"
  const assistantID = "agent";
  // create thread

  const createThread = async () => {
    const thread = await client.threads.create();
    console.log(thread);
  };

  createThread();

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
