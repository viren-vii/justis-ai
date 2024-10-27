export interface ChatInstanceConfig {
  apiUrl: string;
}

// ChatInstance.ts
import { Client, DefaultValues, Thread } from "@langchain/langgraph-sdk";
import {
  getLocalStorageValue,
  storeLocalStorageValue,
} from "./localstorage.utils";

// types.ts
export interface TMessage {
  role: "human" | "ai";
  content: string;
}

export interface StreamEvent {
  event: "metadata" | "messages/partial";
  data: {
    run_id?: string;
    role?: string;
    content?: {
      text: string;
    };
  }[];
}

export const LOCAL_STORAGE_ACTIVE_THREAD_IDS = "ACTIVE_THREAD_IDS";

export class ChatInstance {
  private client: Client;
  private activeThreadIds: string[];
  private readonly assistantId: string = "agent";

  constructor() {
    this.client = new Client({ apiUrl: import.meta.env.VITE_SERVER_URL });
    this.activeThreadIds =
      getLocalStorageValue(LOCAL_STORAGE_ACTIVE_THREAD_IDS) || [];
  }

  async createThread(thread_id: string | null): Promise<Thread<DefaultValues>> {
    if (thread_id && this.activeThreadIds.includes(thread_id)) {
      return this.client.threads.get(thread_id);
    }

    const thread = await this.client.threads.create();
    const newThreadIds = [...this.activeThreadIds, thread.thread_id];

    storeLocalStorageValue(LOCAL_STORAGE_ACTIVE_THREAD_IDS, newThreadIds);
    this.activeThreadIds = newThreadIds;

    return thread;
  }

  getStreamResponse(messages: TMessage, threadId: string) {
    return this.client.runs.stream(threadId, this.assistantId, {
      input: { messages, chat_control: "ai", pdf_returned: false },
      config: { configurable: { thread_id: threadId } },
      streamMode: "messages",
    });
  }
}
