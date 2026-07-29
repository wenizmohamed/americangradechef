import React, { useState } from 'react';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Ask me for a quick American Garden serving idea.' },
  ]);
  const [draft, setDraft] = useState('');

  const sendMessage = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((current) => [
      ...current,
      { role: 'user', text },
      {
        role: 'model',
        text: 'Try pairing roasted sesame dressing with crunchy vegetables, protein, and a bright garnish like lime or herbs.',
      },
    ]);
    setDraft('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-3xl bg-white border border-stone-200 shadow-2xl overflow-hidden">
          <div className="bg-amber-700 text-white px-5 py-4 font-bold">AI Chef Chat</div>
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl px-4 py-3 text-sm ${message.role === 'user' ? 'bg-amber-100 ml-8' : 'bg-stone-100 mr-8'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-stone-200 flex gap-2">
            <input
              className="flex-1 rounded-full border border-stone-300 px-4 py-2 text-sm"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') sendMessage();
              }}
              placeholder="Ask for an idea..."
            />
            <button className="rounded-full bg-stone-900 text-white px-4 text-sm" onClick={sendMessage} type="button">
              Send
            </button>
          </div>
        </div>
      )}
      <button
        className="rounded-full bg-amber-700 hover:bg-amber-800 text-white shadow-xl px-5 py-3 font-bold"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? 'Close chat' : 'Ask AI Chef'}
      </button>
    </div>
  );
};

export default ChatBot;
