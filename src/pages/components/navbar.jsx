import { useState } from 'react';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Olá! Como posso te ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: input },
      { role: 'bot', content: `Você disse: "${input}"` }
    ]);
    setInput('');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar fixa à esquerda */}
      <Sidebar />

      {/* Conteúdo da página */}
      <div className="flex-1 bg-gray-50 flex flex-col">
        {/* Área de mensagens */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xl px-4 py-2 rounded-xl ${
                msg.role === 'user'
                  ? 'ml-auto bg-blue-500 text-white'
                  : 'mr-auto bg-gray-200 text-black'
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        {/* Campo de entrada fixo no rodapé */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 border-t bg-white flex gap-2"
        >
          <Input
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">
            <Send size={16} className="mr-1" />
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}
