import React, { useState } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Привет! Я здесь, чтобы помочь вам с любыми вопросами об Edestory. Как дела?',
      time: new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      text: message,
      time: new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: 'Спасибо за ваше сообщение! Наш специалист свяжется с вами в ближайшее время.',
        time: new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary-dark rounded-full shadow-lg flex items-center justify-center transition-all duration-normal z-40 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-80 h-96 bg-background border border-border rounded-xl shadow-xl z-50 flex flex-col transition-all duration-normal ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-primary rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-primary-foreground">Поддержка Edestory</h4>
              <p className="text-xs text-primary-foreground/80">Онлайн</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md hover:bg-primary-foreground/10 transition-colors duration-normal"
          >
            <X className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] p-3 rounded-lg text-sm ${
                msg.type === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${
                  msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground/70'
                }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex space-x-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Напишите сообщение..."
              className="flex-1 p-2 border border-input rounded-md resize-none text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              rows={1}
            />
            <Button
              onClick={handleSend}
              size="sm"
              className="px-3 py-2 h-auto"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;