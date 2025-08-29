import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Zap, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface AIArchitectChatProps {
  isMinimized?: boolean;
  onToggleMinimize?: () => void;
}

const AIArchitectChat: React.FC<AIArchitectChatProps> = ({ 
  isMinimized = false, 
  onToggleMinimize 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Привет! Я AI-Архитектор. Помогу настроить дизайн вашего шаблона. О каком бизнесе идёт речь?',
      timestamp: new Date(),
      suggestions: ['Косметика', 'Мода', 'Консалтинг', 'Спорт']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiResponses = [
    "Отлично! Для косметического бренда рекомендую светлую палитру с акцентом на чистоте. Хотите минимализм или более яркое решение?",
    "Понимаю. Для модного бренда важна визуальная составляющая. Посмотрите на эти варианты цветовых схем.",
    "Консалтинг требует серьёзности и доверия. Предлагаю использовать темные тона с золотистыми акцентами.",
    "Спортивная тематика! Энергичные цвета, динамичные формы. Какой вид спорта?",
    "Интересно! Давайте подберём подходящую цветовую гамму. Какое настроение должен передавать сайт?"
  ];

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    // Добавляем сообщение пользователя
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Симулируем ответ AI
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
        suggestions: content.toLowerCase().includes('цвет') ? 
          ['Тёмная тема', 'Светлая тема', 'Корпоративные цвета', 'Яркие акценты'] :
          ['Изменить логотип', 'Настроить шрифты', 'Добавить анимации', 'Оптимизировать мобильную версию']
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  if (isMinimized) {
    return (
      <Card className="fixed bottom-4 right-4 w-14 h-14 cursor-pointer hover:scale-105 transition-transform bg-accent">
        <CardContent className="p-0 flex items-center justify-center h-full" onClick={onToggleMinimize}>
          <Bot className="w-6 h-6 text-white" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 h-96 flex flex-col shadow-xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-accent text-white">
                <Bot className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-sm">AI-Архитектор</CardTitle>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-muted-foreground">В сети</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" onClick={onToggleMinimize}>
              <Minimize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 pb-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.type === 'ai' && (
                  <Avatar className="w-6 h-6 mt-1">
                    <AvatarFallback className="bg-accent text-white text-xs">
                      <Bot className="w-3 h-3" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.type === 'user' 
                    ? 'bg-accent text-white' 
                    : 'bg-muted'
                }`}>
                  <p>{message.content}</p>
                  
                  {message.suggestions && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {message.suggestions.map((suggestion, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="text-xs cursor-pointer hover:bg-accent hover:text-white"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {message.type === 'user' && (
                  <Avatar className="w-6 h-6 mt-1">
                    <AvatarFallback className="bg-primary text-white text-xs">
                      <User className="w-3 h-3" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <Avatar className="w-6 h-6 mt-1">
                  <AvatarFallback className="bg-accent text-white text-xs">
                    <Bot className="w-3 h-3" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder="Опишите ваши пожелания..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              className="text-sm"
            />
            <Button 
              size="sm" 
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="bg-accent hover:bg-accent/90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-2 text-center">
            <Zap className="w-3 h-3 inline mr-1" />
            AI помогает с дизайном в реальном времени
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIArchitectChat;