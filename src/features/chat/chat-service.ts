const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL

interface ChatBody {
    query: string
}

interface ChatResponse {
    content: string
}

export interface ChatMessage {
    sender: 'bot' | 'user'
    content: string
}

class ChatService {
    private messages: ChatMessage[]

    constructor() {
        this.messages = []
    }

    async chat(query: string): Promise<ChatResponse> {
        try {
            this.messages.push({
                sender: 'user',
                content: query,
            })

            const response = await fetch(CHAT_API_URL, {
                method: 'POST',
                body: JSON.stringify({
                    query: query,
                } as ChatBody),
            })
            const chatResponse: ChatResponse = await response.json()

            this.messages.push({
                sender: 'bot',
                content: chatResponse.content,
            })

            return chatResponse
        } catch (error) {
            throw new Error("Failed to chat")
        }
    }

    getMessages() {
        return this.messages
    }
}

const chatService = new ChatService()

export default chatService
