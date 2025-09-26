'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Minimize2,
  Maximize2,
  Bot,
  User,
  Sparkles,
  Heart,
  Zap
} from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LoadingSpinner } from '@/components/effects/loading-animations';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  emotion?: string[];
}

interface ChatbotProps {
  className?: string;
  initialMessage?: string;
  position?: 'bottom-right' | 'bottom-left' | 'center';
}

export function Chatbot({ 
  className = '',
  initialMessage = "Hello! I'm Dr. Marina, your AI dental concierge. How can I help you achieve your perfect smile today?",
  position = 'bottom-right'
}: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: initialMessage,
      }
    ],
  });

  const { speak, cancel, speaking } = useSpeechSynthesis();
  const { listen, stop, supported: speechSupported } = useSpeechRecognition({
    onResult: (result: string) => {
      handleInputChange({ target: { value: result } } as any);
      setIsListening(false);
    },
    onError: () => {
      setIsListening(false);
    }
  });

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Update speaking state
  useEffect(() => {
    setIsSpeaking(speaking);
  }, [speaking]);

  const handleVoiceInput = () => {
    if (isListening) {
      stop();
      setIsListening(false);
    } else {
      listen();
      setIsListening(true);
    }
  };

  const handleSpeak = (text: string) => {
    if (isSpeaking) {
      cancel();
    } else {
      speak({ text, voice: window.speechSynthesis.getVoices().find(v => v.name.includes('Female')) });
    }
  };

  const detectEmotion = (message: string): string[] => {
    const emotions: string[] = [];
    const lowerMessage = message.toLowerCase();
    
    if (/nervous|scared|worried|anxious|afraid/.test(lowerMessage)) emotions.push('anxiety');
    if (/excited|amazing|wonderful|fantastic|love/.test(lowerMessage)) emotions.push('excitement');
    if (/hurt|pain|ache|emergency|urgent/.test(lowerMessage)) emotions.push('pain');
    if (/confused|understand|explain/.test(lowerMessage)) emotions.push('confusion');
    if (/cost|price|expensive|afford|payment/.test(lowerMessage)) emotions.push('cost');
    
    return emotions;
  };

  const getEmotionIcon = (emotions: string[]) => {
    if (emotions.includes('anxiety')) return <Heart className="w-4 h-4 text-pink-500" />;
    if (emotions.includes('excitement')) return <Sparkles className="w-4 h-4 text-yellow-500" />;
    if (emotions.includes('pain')) return <Zap className="w-4 h-4 text-red-500" />;
    return null;
  };

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed ${positionClasses[position]} z-50 w-16 h-16 bg-gradient-to-r from-brand-magenta to-brand-turquoise rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 ${className}`}
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-magenta to-brand-turquoise animate-ping opacity-20" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className={`fixed ${positionClasses[position]} z-50 ${className}`}
    >
      <div className={`bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      } transition-all duration-300`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-magenta to-brand-turquoise p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Dr. Marina</h3>
                <p className="text-xs opacity-90">AI Dental Concierge</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 h-96 overflow-y-auto space-y-4">
              {messages.map((message) => {
                const emotions = message.role === 'user' ? detectEmotion(message.content) : [];
                const emotionIcon = getEmotionIcon(emotions);
                
                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' 
                        ? 'bg-brand-turquoise text-white' 
                        : 'bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white'
                    }`}>
                      {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    
                    <div className={`flex-1 max-w-xs ${message.role === 'user' ? 'text-right' : ''}`}>
                      <div className={`inline-block p-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-brand-turquoise text-white'
                          : 'bg-gray-100 text-brand-text'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        
                        {emotionIcon && (
                          <div className="mt-2 flex justify-end">
                            {emotionIcon}
                          </div>
                        )}
                      </div>
                      
                      {message.role === 'assistant' && (
                        <button
                          onClick={() => handleSpeak(message.content)}
                          className="mt-1 p-1 text-gray-400 hover:text-brand-turquoise transition-colors"
                        >
                          {isSpeaking ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
              
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-magenta to-brand-turquoise flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-3">
                    <LoadingSpinner variant="dots" size="sm" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex items-end gap-2">
                <div className="flex-1 relative">
                  <TextareaAutosize
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask about treatments, book appointments, or get dental advice..."
                    className="w-full p-3 pr-12 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent"
                    maxRows={3}
                    disabled={isLoading}
                  />
                  
                  {speechSupported && (
                    <button
                      type="button"
                      onClick={handleVoiceInput}
                      className={`absolute right-3 top-3 p-1 rounded transition-colors ${
                        isListening 
                          ? 'text-red-500 animate-pulse' 
                          : 'text-gray-400 hover:text-brand-turquoise'
                      }`}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                
                <LuxuryButton
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-3"
                >
                  <Send className="w-4 h-4" />
                </LuxuryButton>
              </div>
              
              {error && (
                <p className="text-red-500 text-xs mt-2">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}

// Quick action buttons for common queries
export function ChatbotQuickActions({ onAction }: { onAction: (message: string) => void }) {
  const quickActions = [
    { label: 'Book Appointment', message: 'I would like to book an appointment' },
    { label: 'Emergency Care', message: 'I have a dental emergency and need urgent care' },
    { label: 'Treatment Costs', message: 'What are the costs for dental treatments?' },
    { label: '3D Technology', message: 'Tell me about your 3D dental technology' },
    { label: 'Anxiety Help', message: 'I am nervous about dental treatment' },
  ];

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {quickActions.map((action) => (
        <button
          key={action.label}
          onClick={() => onAction(action.message)}
          className="px-3 py-1 text-xs bg-brand-turquoise/10 text-brand-turquoise rounded-full hover:bg-brand-turquoise/20 transition-colors"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}

