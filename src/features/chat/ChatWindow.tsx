import chatService, { ChatMessage } from '@/features/chat/chat-service'
import { useEffect, useRef, useState } from 'react'

const ChatWindow = () => {
    const [input, setInput] = useState('')
    const messagesEndRef = useRef<HTMLDivElement | null>(null)

    const [messages, setMessages] = useState<ChatMessage[]>([])

    const sendMessage = async () => {
        const trimmedMessage = input.trim()

        if (!trimmedMessage) return

        setMessages([...messages, { content: trimmedMessage, sender: 'user' }])
        setInput('')

        const response = await chatService.chat(trimmedMessage)

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { content: response.content, sender: 'bot' },
            ])
        }, 500)
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <div className="flex h-[420px] w-full flex-col rounded-xl border bg-white shadow-lg">
            <div className="rounded-t-xl bg-indigo-600 p-4 text-lg font-semibold text-white">
                Chat
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto p-4 text-sm">
                {messages.map((cEl, index) => (
                    <div
                        key={index}
                        className={`max-w-xs rounded-md p-2 ${
                            cEl.sender === 'user'
                                ? 'ml-auto self-end bg-blue-100'
                                : 'mr-auto self-start bg-gray-100'
                        }`}
                    >
                        {cEl.content}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center border-t p-3">
                <input
                    type="text"
                    className="flex-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                    onClick={sendMessage}
                    className="ml-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatWindow
