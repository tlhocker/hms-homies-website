'use client';

import { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, MessageCircle, X } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false); // Start closed
  const [messages, setMessages] = useState<Array<{id: string, role: string, content: string}>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
    console.log('Messages updated:', messages);
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <div 
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 50
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            border: 'none',
            background: isOpen 
              ? 'linear-gradient(to right, #ef4444, #dc2626)' 
              : 'linear-gradient(to right, #2563eb, #06b6d4)',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => (e.target as HTMLButtonElement).style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => (e.target as HTMLButtonElement).style.transform = 'scale(1)'}
          aria-label="Toggle AI Medical Mentor"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            bottom: '96px',
            right: '24px',
            width: '384px',
            height: '500px',
            maxWidth: 'calc(100vw - 3rem)',
            maxHeight: 'calc(100vh - 8rem)',
            zIndex: 40
          }}
        >
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div 
              style={{
                padding: '16px',
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'between'
              }}
            >
              <div>
                <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1f2937', margin: '0 0 4px 0' }}>
                  AI Medical Mentor
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: '0' }}>
                  Your guide to AI in medicine
                </p>
              </div>
            </div>
            
            {/* Messages */}
            <div 
              ref={messagesContainerRef} 
              style={{
                flex: '1',
                padding: '16px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: '#f9fafb'
              }}
            >
              {messages.length > 0 ? (
                messages.map(m => (
                  <div key={m.id} style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' 
                  }}>
                    {m.role !== 'user' && (
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        flexShrink: 0
                      }}>
                        AI
                      </div>
                    )}
                    <div
                      style={{
                        maxWidth: '280px',
                        padding: '12px 16px',
                        borderRadius: '16px',
                        whiteSpace: 'pre-wrap',
                        backgroundColor: m.role === 'user' ? '#2563eb' : 'white',
                        color: m.role === 'user' ? 'white' : '#374151',
                        border: m.role === 'user' ? 'none' : '1px solid #e5e7eb',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        borderBottomRightRadius: m.role === 'user' ? '4px' : '16px',
                        borderBottomLeftRadius: m.role === 'user' ? '16px' : '4px'
                      }}
                    >
                      {m.content}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{
                  textAlign: 'center',
                  color: '#6b7280',
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  padding: '24px'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(to right, #2563eb, #06b6d4)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <MessageCircle size={32} color="white" />
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
                    Welcome to AI Medical Mentor!
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    I'm your digital resident here to help you learn how to use AI tools like ChatGPT effectively in your medical practice. What would you like to know?
                  </p>
                </div>
              )}
              
              {/* Loading indicator */}
              {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}>
                      AI
                    </div>
                    <div style={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '16px',
                      borderBottomLeftRadius: '4px',
                      padding: '12px 16px'
                    }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1.4s ease-in-out infinite both' }}></div>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1.4s ease-in-out infinite both', animationDelay: '-0.32s' }}></div>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1.4s ease-in-out infinite both', animationDelay: '-0.16s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Input Form */}
            <form 
              onSubmit={handleSubmit} 
              style={{
                padding: '16px',
                borderTop: '1px solid #e5e7eb',
                backgroundColor: 'white'
              }}
            >
              <div style={{ position: 'relative' }}>
                <textarea
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about using AI in your practice..."
                  rows={1}
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '12px 48px 12px 16px',
                    fontSize: '14px',
                    color: '#111827',
                    resize: 'none',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      if (!isLoading && input.trim()) {
                        handleSubmit(e);
                      }
                    }
                  }}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    padding: '8px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: isLoading || !input.trim() ? '#9ca3af' : '#2563eb',
                    cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid #2563eb',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                  ) : (
                    <CornerDownLeft size={16} />
                  )}
                </button>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '8px',
                fontSize: '12px',
                color: '#6b7280'
              }}>
                <span>Press Enter to send, Shift+Enter for new line</span>
                <span style={{ color: '#4285f4' }}>Powered by Google Gemini</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 