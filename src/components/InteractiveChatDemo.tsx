import { useState, useRef, useEffect, ReactElement } from 'react';
import { MessageCircle, ExternalLink, Send, Sparkles, Bot, User, ChevronRight, Loader2, Plus, Image, Paperclip, Mic } from 'lucide-react';
import Link from 'next/link';

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
  isTyping?: boolean;
  timestamp?: Date;
}

interface SuggestedQuestion {
  text: string;
  icon: ReactElement;
}

export default function InteractiveChatDemo() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { 
      type: 'bot', 
      message: 'Hi! I\'m your AI career counselor. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const suggestedQuestions: SuggestedQuestion[] = [
    { 
      text: "How can I switch to a tech career?",
      icon: <Sparkles className="w-4 h-4 text-purple-400" />
    },
    { 
      text: "What skills are in demand?",
      icon: <Bot className="w-4 h-4 text-cyan-400" />
    },
    { 
      text: "Help me with my career path",
      icon: <ChevronRight className="w-4 h-4 text-green-400" />
    }
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      setShowScrollButton(scrollHeight > clientHeight);
      scrollToBottom();
    }
  }, [chatMessages]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const simulateTyping = async (message: string) => {
    setIsThinking(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsThinking(false);
    
    setChatMessages(prev => [...prev, { type: 'bot', message: '', isTyping: true, timestamp: new Date() }]);
    
    let displayedMessage = '';
    const words = message.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      displayedMessage += (i === 0 ? '' : ' ') + words[i];
      setChatMessages(prev => [
        ...prev.slice(0, -1),
        { 
          type: 'bot', 
          message: displayedMessage, 
          isTyping: i < words.length - 1,
          timestamp: new Date()
        }
      ]);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  };

  const handleSendMessage = async (message: string = userInput.trim()) => {
    if (message) {
      setIsSubmitting(true);
      setUserInput('');
      
      setChatMessages(prev => [...prev, { 
        type: 'user', 
        message,
        timestamp: new Date()
      }]);

      let response = '';
      if (message.toLowerCase().includes('tech career')) {
        response = "Switching to a tech career is an excellent choice! I recommend starting with these steps:\n\n1. Identify your target role (developer, designer, etc.)\n2. Learn fundamental skills through online courses\n3. Build a portfolio of projects\n4. Network with professionals in the field\n\nWould you like me to elaborate on any of these steps?";
      } else if (message.toLowerCase().includes('skills')) {
        response = "Currently, the most in-demand skills include:\n\n• Full-stack development (React, Node.js)\n• Cloud computing (AWS, Azure)\n• AI/Machine Learning (Python, TensorFlow)\n• Data Analytics (SQL, Python)\n• Cybersecurity\n\nWould you like me to create a personalized learning path for any of these areas?";
      } else if (message.toLowerCase().includes('career path')) {
        response = "I'll help you create a personalized career path. Let's start by understanding:\n\n• Your current background\n• Your interests and strengths\n• Your career goals\n• Your timeline\n\nWhich would you like to discuss first?";
      } else {
        response = "I understand you're looking for career guidance. I can help you with:\n\n• Career path planning\n• Skill development recommendations\n• Industry insights\n• Resume optimization\n\nWhat specific aspect would you like to explore?";
      }

      await simulateTyping(response);
      setIsSubmitting(false);
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric',
      hour12: true 
    });
  };

  return (
    <section className="px-6 py-16 inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-purple-900/20 z-0">
      <div className="max-w-5xl mx-auto ">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-orbitron font-bold text-center gradient-text-3d">
            Try Our AI Counselor
          </h2>
          <Link 
            href="/AI-counseling" 
            className="btn-futuristic-3d px-4 py-2 text-sm flex items-center hover:scale-105 transition-transform"
          >
            Full Version
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Chat Container */}
        <div className="relative">
          {/* Floating Effect Shadows */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 rounded-xl blur-lg"></div>

          {/* Main Chat Card */}
          <div className="relative card-futuristic-3d p-8 backdrop-blur-xl bg-black/40 border border-white/10 rounded-xl shadow-2xl">
            {/* Chat Header */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 rounded-t-xl backdrop-blur-md border-b border-white/10 flex items-center px-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-white/80 font-medium">AI Career Counselor</span>
              </div>
            </div>

            {/* Messages Container */}
            <div 
              ref={chatContainerRef}
              className="h-[400px] overflow-y-auto space-y-6 pt-16 pb-4 px-2 scroll-smooth"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#4f46e5 transparent'
              }}
            >
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-3`}>
                  {msg.type === 'bot' && (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                      <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-[10px] flex items-center justify-center">
                        <Bot className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-col space-y-1 max-w-[80%]">
                    <div 
                      className={`px-4 py-3 rounded-2xl ${
                        msg.type === 'user' 
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-br-none' 
                          : 'bg-white/10 backdrop-blur-lg border border-white/10 text-white/90 rounded-bl-none'
                      } ${msg.isTyping ? 'animate-pulse' : ''}`}
                    >
                      <div className="whitespace-pre-line">
                        {msg.message}
                        {msg.isTyping && (
                          <span className="inline-flex space-x-1 ml-1">
                            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </span>
                        )}
                      </div>
                    </div>
                    {msg.timestamp && (
                      <span className="text-xs text-white/50 px-2">
                        {formatTimestamp(msg.timestamp)}
                      </span>
                    )}
                  </div>

                  {msg.type === 'user' && (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                      <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-[10px] flex items-center justify-center">
                        <User className="w-6 h-6 text-pink-400" />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isThinking && (
                <div className="flex justify-start items-end space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-[10px] flex items-center justify-center">
                      <Bot className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10">
                    <Loader2 className="w-5 h-5 text-white/90 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Questions */}
            <div className="mb-6 flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(question.text)}
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all flex items-center gap-2 text-sm text-white/80 hover:text-white"
                >
                  {question.icon}
                  {question.text}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-blue-500/50 rounded-xl blur-sm"></div>
              <div className="relative flex items-center gap-2 p-1 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10">
                <button className="p-2 text-white/50 hover:text-white/80 transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Message AI Counselor..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-white/90 placeholder-white/50 px-2"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  disabled={isSubmitting}
                />
                <div className="flex items-center gap-1 px-2">
                  <button className="p-2 text-white/50 hover:text-white/80 transition-colors">
                    <Image className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-white/50 hover:text-white/80 transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-white/50 hover:text-white/80 transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                  <div className="w-px h-6 bg-white/10 mx-2"></div>
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={isSubmitting}
                    className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scroll to Bottom Button */}
            {showScrollButton && (
              <button
                onClick={scrollToBottom}
                className="absolute bottom-20 right-4 p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
              >
                <ChevronRight className="w-4 h-4 rotate-90" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 