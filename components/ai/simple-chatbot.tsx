'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  Zap,
  Phone,
  Calendar,
  MapPin
} from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LoadingSpinner } from '@/components/effects/loading-animations';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  emotion?: string[];
}

interface SimpleChatbotProps {
  className?: string;
  initialMessage?: string;
  position?: 'bottom-right' | 'bottom-left' | 'center';
}

// Dental knowledge base for responses
const DENTAL_RESPONSES = {
  greeting: [
    "Hello! I'm Dr. Marina, your AI dental concierge at St Mary's House Dental Care. How can I help you achieve your perfect smile today?",
    "Welcome to St Mary's House! I'm here to help you with any questions about our luxury dental treatments. What would you like to know?",
    "Hi there! I'm Dr. Marina, and I'm excited to help you discover our advanced 3D dentistry services. How can I assist you?"
  ],
  
  services: {
    veneers: "Our 3D printed veneers are revolutionary! We can create your perfect smile in just one day using advanced 3D printing technology. Each veneer is custom-designed for a perfect fit and natural appearance, with a 10-year warranty. Would you like to book a consultation to see how they could transform your smile?",
    
    implants: "Our 3D implant restorations use cutting-edge surgical planning with 3D imaging and guides for precise placement. This minimally invasive approach means faster healing and optimal outcomes. We provide lifetime support for all our implant patients. Shall I help you schedule a consultation?",
    
    whitening: "Our professional whitening treatments deliver instant results in just one visit! We use the latest safe and effective techniques for long-lasting brightness. We also provide custom trays for maintenance. Would you like to know more about our whitening options?",
    
    emergency: "We provide 24/7 emergency dental care! If you're experiencing pain or have a dental emergency, please call us immediately at 01273 453109. We offer same-day appointments and immediate pain relief solutions. Are you currently experiencing a dental emergency?",
    
    technology: "We're pioneers in 3D dentistry! Our practice features AI-powered diagnostics, digital twin smile simulations, 3D imaging, and AR try-on technology. You can actually see your perfect smile before any treatment begins. Would you like to experience our 3D showcase?"
  },
  
  booking: "I'd be happy to help you book an appointment! Our practice is open Monday-Friday 8:00-18:00 and Saturday 9:00-15:00. You can call us at 01273 453109 or I can connect you with our booking system. What type of appointment would you like to schedule?",
  
  location: "We're located in the beautiful coastal town of Shoreham-by-Sea, West Sussex. Our practice combines luxury dental care with the tranquility of seaside living. The address is St Mary's House, and we're easily accessible with parking available. Would you like directions?",
  
  anxiety: "I completely understand dental anxiety - you're not alone! We specialize in anxiety-free dentistry with various sedation options and comfort care approaches. Our coastal setting and gentle team help create a stress-free experience. Many of our anxious patients tell us we've completely changed their perspective on dental care. Would you like to discuss our comfort options?",
  
  cost: "We believe in transparent pricing and excellent value for our advanced treatments. We offer various payment plans and financing options to make luxury dental care accessible. Each treatment is backed by our quality guarantee. Would you like me to provide specific pricing information for any particular treatment?"
};

// Emotion detection
const EMOTION_KEYWORDS = {
  anxiety: ['nervous', 'scared', 'worried', 'anxious', 'afraid', 'terrified', 'panic', 'fear'],
  excitement: ['excited', 'amazing', 'wonderful', 'fantastic', 'love', 'great', 'awesome', 'brilliant'],
  pain: ['hurt', 'pain', 'ache', 'sore', 'emergency', 'urgent', 'broken', 'bleeding', 'swollen'],
  confusion: ['confused', 'understand', 'explain', 'what', 'how', 'why', 'unclear', 'help'],
  cost: ['cost', 'price', 'expensive', 'afford', 'payment', 'insurance', 'budget', 'money', 'finance']
};

export function SimpleChatbot({ 
  className = '',
  initialMessage = DENTAL_RESPONSES.greeting[0],
  position = 'bottom-right'
}: SimpleChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: initialMessage,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const detectEmotion = (message: string): string[] => {
    const emotions: string[] = [];
    const lowerMessage = message.toLowerCase();
    
    for (const [emotion, keywords] of Object.entries(EMOTION_KEYWORDS)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        emotions.push(emotion);
      }
    }
    
    return emotions;
  };

  const generateResponse = (userMessage: string, emotions: string[]): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Handle greetings
    if (/hello|hi|hey|good morning|good afternoon/.test(lowerMessage)) {
      return DENTAL_RESPONSES.greeting[Math.floor(Math.random() * DENTAL_RESPONSES.greeting.length)];
    }
    
    // Handle specific services
    if (/veneer|crown|smile makeover/.test(lowerMessage)) {
      return DENTAL_RESPONSES.services.veneers;
    }
    
    if (/implant|missing tooth|tooth replacement/.test(lowerMessage)) {
      return DENTAL_RESPONSES.services.implants;
    }
    
    if (/whitening|whiten|white teeth|stain/.test(lowerMessage)) {
      return DENTAL_RESPONSES.services.whitening;
    }
    
    if (/emergency|urgent|pain|hurt|broken/.test(lowerMessage)) {
      return DENTAL_RESPONSES.services.emergency;
    }
    
    if (/3d|technology|ai|digital|advanced/.test(lowerMessage)) {
      return DENTAL_RESPONSES.services.technology;
    }
    
    // Handle booking
    if (/book|appointment|schedule|consultation/.test(lowerMessage)) {
      return DENTAL_RESPONSES.booking;
    }
    
    // Handle location
    if (/location|address|where|directions/.test(lowerMessage)) {
      return DENTAL_RESPONSES.location;
    }
    
    // Handle emotions
    if (emotions.includes('anxiety')) {
      return DENTAL_RESPONSES.anxiety;
    }
    
    if (emotions.includes('cost')) {
      return DENTAL_RESPONSES.cost;
    }
    
    // Default response
    return "Thank you for your question! I'd be happy to help you learn more about our luxury dental services. You can ask me about our 3D treatments, booking appointments, or any specific dental concerns. For immediate assistance, please call us at 01273 453109. What would you like to know more about?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const emotions = detectEmotion(userMessage.content);
      const response = generateResponse(userMessage.content, emotions);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        emotion: emotions
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000); // Random delay for realism
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-GB';

      if (isListening) {
        recognition.stop();
        setIsListening(false);
      } else {
        recognition.start();
        setIsListening(true);
        
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          setIsListening(false);
        };
        
        recognition.onerror = () => {
          setIsListening(false);
        };
        
        recognition.onend = () => {
          setIsListening(false);
        };
      }
    }
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        utterance.volume = 0.8;
        
        // Try to use a female voice
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('female') || 
          voice.name.toLowerCase().includes('woman') ||
          voice.name.toLowerCase().includes('zira') ||
          voice.name.toLowerCase().includes('hazel')
        );
        if (femaleVoice) utterance.voice = femaleVoice;
        
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const getEmotionIcon = (emotions: string[]) => {
    if (emotions?.includes('anxiety')) return <Heart className="w-4 h-4 text-pink-500" />;
    if (emotions?.includes('excitement')) return <Sparkles className="w-4 h-4 text-yellow-500" />;
    if (emotions?.includes('pain')) return <Zap className="w-4 h-4 text-red-500" />;
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
                const emotions = message.role === 'user' ? detectEmotion(message.content) : message.emotion || [];
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
                        <div className="mt-1 flex gap-2">
                          <button
                            onClick={() => handleSpeak(message.content)}
                            className="p-1 text-gray-400 hover:text-brand-turquoise transition-colors"
                          >
                            {isSpeaking ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                          </button>
                          
                          {/* Quick action buttons for assistant messages */}
                          {message.content.includes('consultation') && (
                            <button className="p-1 text-gray-400 hover:text-brand-turquoise transition-colors">
                              <Calendar className="w-3 h-3" />
                            </button>
                          )}
                          
                          {message.content.includes('call') && (
                            <button className="p-1 text-gray-400 hover:text-brand-turquoise transition-colors">
                              <Phone className="w-3 h-3" />
                            </button>
                          )}
                          
                          {message.content.includes('location') && (
                            <button className="p-1 text-gray-400 hover:text-brand-turquoise transition-colors">
                              <MapPin className="w-3 h-3" />
                            </button>
                          )}
                        </div>
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

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t border-gray-100">
              <div className="flex flex-wrap gap-1">
                {[
                  { label: 'Book Appointment', message: 'I would like to book an appointment' },
                  { label: 'Emergency', message: 'I have a dental emergency' },
                  { label: '3D Technology', message: 'Tell me about your 3D technology' },
                  { label: 'Costs', message: 'What are your treatment costs?' }
                ].map((action) => (
                  <button
                    key={action.label}
                    onClick={() => setInput(action.message)}
                    className="px-2 py-1 text-xs bg-brand-turquoise/10 text-brand-turquoise rounded-full hover:bg-brand-turquoise/20 transition-colors"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex items-end gap-2">
                <div className="flex-1 relative">
                  <TextareaAutosize
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about treatments, book appointments, or get dental advice..."
                    className="w-full p-3 pr-12 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent"
                    maxRows={3}
                    disabled={isLoading}
                  />
                  
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
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}

