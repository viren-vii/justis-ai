import Chat from "@/components/ui/chat";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ChatInstance } from "@/lib/chat.utils";
import { useEffect, useState } from "react";
import { DefaultValues, Thread } from "@langchain/langgraph-sdk";
import { useLocation, useNavigate } from "react-router-dom";

export default function ChatPage() {
  const chat = new ChatInstance();

  const [thread, setThread] = useState<Thread<DefaultValues>>();

  const location = useLocation();
  const threadId = new URLSearchParams(location.search).get("thread_id");
  const navigate = useNavigate();

  useEffect(() => {
    chat.createThread(threadId).then((thread) => {
      setThread(thread);
      navigate(`/chat?thread_id=${thread.thread_id}`);
    });
  }, []);

  return (
    <ResizablePanelGroup direction="horizontal" className="gap-6">
      <ResizablePanel minSize={50}>
        {thread && <Chat chat={chat} thread={thread} />}
      </ResizablePanel>
      <ResizableHandle withHandle />
      {/* <ResizablePanel minSize={20}>
        <ChatRightPanel />
      </ResizablePanel> */}
    </ResizablePanelGroup>
  );
}
