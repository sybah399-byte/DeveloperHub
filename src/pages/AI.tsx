import { useState } from "react";
import "../styles/ai.css";

interface ChatMessage {

    role: "user" | "assistant";

    content: string;

}

export default function AI() {

    const [prompt, setPrompt] = useState("");

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "assistant",
            content:
                "Welcome to DeveloperHub AI.\n\nThis panel will become your project-aware coding assistant."
        }
    ]);

    function sendPrompt() {

        if (!prompt.trim()) return;

        const text = prompt.trim();

        setMessages(prev => [

            ...prev,

            {
                role: "user",
                content: text
            },

            {
                role: "assistant",
                content:
                    "AI integration isn't connected yet.\n\nYour prompt has been recorded and this panel is ready for OpenAI or another provider."
            }

        ]);

        setPrompt("");

    }

    function quickPrompt(text: string) {

        setPrompt(text);

    }

    function clearChat() {

        setMessages([
            {
                role: "assistant",
                content:
                    "Conversation cleared."
            }
        ]);

    }

    return (

        <div className="ai-page">

            <div className="ai-header">

                <h1>AI Assistant</h1>

                <button
                    onClick={clearChat}
                >
                    Clear Chat
                </button>

            </div>

            <div className="quick-prompts">

                <button onClick={() => quickPrompt("Explain this code")}>
                    Explain
                </button>

                <button onClick={() => quickPrompt("Find bugs in this code")}>
                    Debug
                </button>

                <button onClick={() => quickPrompt("Refactor this code")}>
                    Refactor
                </button>

                <button onClick={() => quickPrompt("Generate React component")}>
                    Generate
                </button>

            </div>

            <div className="chat-window">

                {messages.map((message, index) => (

                    <div
                        key={index}
                        className={`chat-message ${message.role}`}
                    >

                        <strong>

                            {message.role === "user"
                                ? "You"
                                : "AI"}

                        </strong>

                        <pre>

                            {message.content}

                        </pre>

                    </div>

                ))}

            </div>

            <div className="chat-input">

                <textarea

                    value={prompt}

                    placeholder="Ask anything..."

                    onChange={(e) =>
                        setPrompt(e.target.value)
                    }

                />

                <button
                    onClick={sendPrompt}
                >
                    Send
                </button>

            </div>

        </div>

    );

}