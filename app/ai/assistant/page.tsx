'use client';

import { FormEvent, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type Message = {
  id: number;
  from: 'user' | 'assistant';
  text: string;
};

const starterMessages: Message[] = [
  {
    id: 1,
    from: 'assistant',
    text: 'Hi Jordan! I reviewed your contract portfolio — two agreements need attention this week.',
  },
  {
    id: 2,
    from: 'user',
    text: 'Which agreements are at risk?',
  },
  {
    id: 3,
    from: 'assistant',
    text: 'Contract #1771 is over budget by 12%. Contract #2045 renews in 30 days and is missing a vendor certificate.',
  },
];

export default function AssistantConversation() {
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [input, setInput] = useState('Can you draft a note for the vendor?');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }

    const userMessage: Message = {
      id: messages.length + 1,
      from: 'user',
      text: input.trim(),
    };

    const assistantMessage: Message = {
      id: messages.length + 2,
      from: 'assistant',
      text: 'Drafted email to the vendor including renewal steps and compliance reminders. Sent it to your inbox.',
    };

    setMessages((previous) => [...previous, userMessage, assistantMessage]);
    setInput('');
  };

  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">ContractPlan assistant</h1>
        <p className="text-sm text-slate-200/80">
          Ask for summaries, draft communications, or escalate risks — the assistant understands your contract data instantly.
        </p>
      </header>

      <Card className="bg-white text-slate-900">
        <CardContent className="flex h-[420px] flex-col gap-4 overflow-y-auto p-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.from === 'assistant' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.from === 'assistant'
                    ? 'bg-slate-100 text-slate-800'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-white text-slate-900">
        <CardContent className="space-y-4 p-6">
          <form className="flex flex-col gap-3 md:flex-row" onSubmit={handleSubmit}>
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask ContractPlan AI..."
              className="bg-white text-slate-900"
            />
            <Button type="submit" className="md:w-40">
              Send
            </Button>
          </form>
          <p className="text-xs text-slate-500">
            <Badge variant="secondary">Tip</Badge> Ask for risk summaries, renewal prep checklists, or draft outreach emails.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
