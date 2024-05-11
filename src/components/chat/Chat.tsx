"use client";

import { useChat } from "ai/react";

export default function Chat(props: { agent: string }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: "1",
        role: "system",
        content: props.agent,
      },
    ],
  });

  return (
    <main>
      <section>
        {messages
          .filter((message) => message.role !== "system")
          .map((message) => (
            <div key={message.id}>
              {message.role === "user" ? "User |> " : "AI |> "}
              {message.content}
            </div>
          ))}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
