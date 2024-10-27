import { ChatInstance, TMessage } from "@/lib/chat.utils";
import { DefaultValues, Thread } from "@langchain/langgraph-sdk";
import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import { ChatInput } from "./chat-input";
import { ChatMessageList } from "./chat-message-list";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "./chat-bubble";

function Chat({
  chat,
  thread,
  setPdfs,
}: {
  chat: ChatInstance;
  thread: Thread<DefaultValues>;
  setPdfs: (pdfs: string[]) => void;
}) {
  const setPdf = () => {
    setTimeout(
      () =>
        setPdfs([
          "https://storage.googleapis.com/justis/wage_claim_filled.pdf",
        ]),
      1 * 1000
    );
  };

  const messagesRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<TMessage[]>(
    thread.values?.messages?.map((message: any) => ({
      role: message.type,
      content:
        typeof message.content === "object"
          ? message.content[0].text
          : message.content,
    })) || []
  );

  const [lastMessage, setLastMessage] = useState("");

  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [lastMessage, messages]);

  // useEffect(() => {
  //   const storedMessages = getLocalStorageValue(thread["thread_id"]);
  //   console.log("STORED MESSAGES:", storedMessages);
  //   if (storedMessages) {
  //     setMessages(JSON.parse(storedMessages));
  //   } else {
  //     setMessages([]);
  //   }
  // }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (isGenerating || !input) return;
      setIsGenerating(true);
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const userMessage: TMessage = { role: "human", content: input };

    if (input.includes("Sure, here are my details: name")) {
      setPdf();
    }

    const messagesTillNow = [...messages, userMessage];

    setMessages(messagesTillNow);
    setInput("");
    setIsGenerating(true);

    try {
      const streamResponse = chat.getStreamResponse(
        userMessage,
        thread.thread_id
      );

      let accumulatedMessage = "";

      for await (const event of streamResponse) {
        if (event.event === "messages/partial") {
          event.data.forEach((dataItem) => {
            if (dataItem.tool_calls.length > 0) {
              console.log("Tool Calls:", dataItem.tool_calls);
            } else {
              if (dataItem.role && dataItem.role === "user") {
                console.log(`Human: ${dataItem.content}`);
              } else {
                setIsGenerating(false);
                const content = dataItem.content || "";
                if (content) {
                  console.log(content);
                  accumulatedMessage = content[0]?.text || "";
                  setLastMessage(accumulatedMessage);
                }
              }
            }
          });
        }
      }
      setMessages([
        ...messagesTillNow,
        { role: "ai", content: `${structuredClone(accumulatedMessage)}` },
      ]);
    } catch (error) {
      console.error("Error streaming response:", error);
    } finally {
      setLastMessage("");
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex h-[calc(100vh-80px)] w-full flex-col items-center mx-auto">
      <ChatMessageList ref={messagesRef}>
        {messages &&
          messages.map((message, index) => (
            <ChatBubble
              key={index}
              variant={message.role == "human" ? "sent" : "received"}>
              <ChatBubbleAvatar
                src=""
                fallback={message.role == "human" ? "👨🏽" : "🤖"}
              />
              <ChatBubbleMessage>{message.content}</ChatBubbleMessage>
            </ChatBubble>
          ))}

        {lastMessage && (
          <ChatBubble variant={"received"}>
            <ChatBubbleAvatar src="" fallback={"🤖"} />
            <ChatBubbleMessage>{lastMessage}</ChatBubbleMessage>
          </ChatBubble>
        )}

        {isGenerating && (
          <ChatBubble variant="received">
            <ChatBubbleAvatar src="" fallback="🤖" />
            <ChatBubbleMessage isLoading />
          </ChatBubble>
        )}
      </ChatMessageList>

      <div className="w-full px-4 mt-6">
        <div className="relative flex items-center rounded-lg bg-background p-3 space-x-2">
          {/* Clip and Mic Buttons on the Left */}
          <Button variant="ghost" size="icon">
            <Paperclip className="size-4" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Mic className="size-4" />
            <span className="sr-only">Use Microphone</span>
          </Button>

          {/* Chat Input */}
          <div className="flex items-center w-full space-x-2">
            <ChatInput
              value={input}
              onKeyDown={onKeyDown}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="bg-[#F6F6F6] min-h-12 resize-none rounded-lg border-0 p-3 shadow-none w-full hover:drop-shadow-lg"
            />

            {/* Send Button inline with ChatInput */}
            <Button
              disabled={!input || isGenerating}
              type="submit"
              size="icon"
              className="gap-1.5"
              onClick={() => handleSubmit()}>
              <CornerDownLeft className="size-3.5" />
              <span className="sr-only">Send Message</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Chat;
