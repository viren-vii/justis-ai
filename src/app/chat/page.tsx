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
import ChatRightPanel from "@/components/ui/chat-right-panel";

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

  const [pdfList, setPdfList] = useState<string[]>([]);

  const setPdfs = (pdfs: string[]) => {
    setPdfList(pdfs);
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="gap-6">
      <ResizablePanel minSize={50}>
        {thread && <Chat chat={chat} thread={thread} setPdfs={setPdfs} />}
      </ResizablePanel>
      <ResizableHandle withHandle />
      {pdfList.length > 0 && (
        <ResizablePanel minSize={20}>
          <ChatRightPanel pdfList={pdfList} />
        </ResizablePanel>
      )}
    </ResizablePanelGroup>
  );
}
