'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSend, FiMessageSquare } from 'react-icons/fi';
import Linkify from 'react-linkify';
import { queryOpenRouter } from '@/lib/openrouter';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChatWidget() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      setIsOpen(!window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await queryOpenRouter(inputValue);
      // 마크다운 특수문자 제거
      const cleanResponse = response
        .replace(/\*\*(.*?)\*\*/g, '$1') // **bold** 제거
        .replace(/```[\s\S]*?```/g, '') // ```code block``` 제거
        .replace(/`(.*?)`/g, '$1') // `inline code` 제거
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // [link](url) 제거
        .replace(/^#{1,6}\s*/gm, ''); // #, ##, ### 제거
        
      const botMessage: Message = {
        role: 'assistant',
        content: cleanResponse
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: '죄송합니다. 요청을 처리하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
          <div className="bg-primary text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">오피스아트 AI 상담</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              &times;
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-500">
                오피스아트에 대해 무엇이든 물어보세요!
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block max-w-[80%] p-2 rounded-lg break-words ${msg.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800'}`}
                  >
                    <Linkify componentDecorator={(decoratedHref, decoratedText, key) => {
                      // 전화번호인 경우 tel: 링크로 변환
                      if (decoratedText.match(/^010-\d{4}-\d{4}$/)) {
                        return (
                          <a href={`tel:${decoratedText.replace(/-/g, '')}`} key={key} className="text-blue-600 hover:underline">
                            {decoratedText}
                          </a>
                        );
                      }
                      // 일반 URL인 경우
                      return (
                        <a href={decoratedHref} key={key} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {decoratedText}
                        </a>
                      );
                    }}>
                      {msg.content}
                    </Linkify>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="text-left mb-3">
                <div className="inline-block p-2 rounded-lg bg-gray-100 text-gray-800">
                  <span className="inline-flex space-x-1">
                    <span className="animate-[bounce_1s_infinite_100ms]">.</span>
                    <span className="animate-[bounce_1s_infinite_300ms]">.</span>
                    <span className="animate-[bounce_1s_infinite_500ms]">.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-200 overflow-x-hidden">
            <div className="flex w-full min-w-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="w-[calc(100%-3rem)] border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary box-border"
                placeholder="메시지를 입력하세요..."
                style={{
                  WebkitAppearance: 'none',
                  borderRadius: '0.5rem 0 0 0.5rem'
                }}
              />
              <button
                onClick={handleSendMessage}
                className="w-12 bg-primary text-white rounded-r-lg hover:bg-primary-dark flex items-center justify-center"
              >
                <FiSend size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        >
          <FiMessageSquare size={24} />
        </button>
      )}
    </div>
  );
}