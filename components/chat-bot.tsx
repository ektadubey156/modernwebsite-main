"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, SendHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

// Predefined responses for the chatbot
const botResponses: Record<string, string> = {
  greeting: "Hello! I'm WhiteBot, your e-commerce assistant. How can I help you today?",
  fallback: "I'm not sure I understand. Could you please rephrase your question or ask something about our e-commerce services, Amazon optimization, or Flipkart selling?",
  amazon: "We offer comprehensive Amazon seller services including listing optimization, PPC campaign management, and account management. Our clients typically see a 100-300% growth in sales within 3-6 months!",
  flipkart: "Our Flipkart services include catalog management, pricing strategy, and advertising optimization. We can help you increase your visibility and sales on India's largest marketplace.",
  pricing: "Our pricing depends on your specific needs and business size. We offer packages starting from $499/month for small businesses. Would you like to schedule a free consultation to discuss your requirements?",
  contact: "You can reach our team by filling out the contact form on our website, emailing us at hello@whitecirclegroup.com, or calling us at +1 (555) 123-4567.",
  services: "We offer a variety of e-commerce services including marketplace optimization (Amazon, Flipkart, etc.), PPC advertising, listing creation and enhancement, keyword research, and complete account management.",
  results: "Our clients typically see a 150-300% increase in sales within the first 3-6 months of working with us. We've helped businesses grow from $10K to $100K per month in revenue.",
  goodbye: "Thank you for chatting with me! If you have more questions, feel free to contact our team. Have a great day!",
}

// Function to get a response based on the user's message
function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return botResponses.greeting
  } else if (lowerMessage.includes("amazon") || lowerMessage.includes("fba") || lowerMessage.includes("seller central")) {
    return botResponses.amazon
  } else if (lowerMessage.includes("flipkart") || lowerMessage.includes("india")) {
    return botResponses.flipkart
  } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("package") || lowerMessage.includes("fee")) {
    return botResponses.pricing
  } else if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone") || lowerMessage.includes("call")) {
    return botResponses.contact
  } else if (lowerMessage.includes("service") || lowerMessage.includes("help") || lowerMessage.includes("offer")) {
    return botResponses.services
  } else if (lowerMessage.includes("result") || lowerMessage.includes("case study") || lowerMessage.includes("success")) {
    return botResponses.results
  } else if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye") || lowerMessage.includes("thanks") || lowerMessage.includes("thank you")) {
    return botResponses.goodbye
  } else {
    return botResponses.fallback
  }
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: botResponses.greeting,
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages when new ones are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue("")

    // Simulate typing delay before bot responds
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        role: "assistant",
        timestamp: new Date(),
      }
      
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chat button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] bg-background border rounded-lg shadow-xl flex flex-col z-50">
          {/* Chat header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <h3 className="font-medium">WhiteBot Assistant</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-2 max-w-[85%]",
                  message.role === "user" ? "ml-auto" : ""
                )}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="Bot" />
                    <AvatarFallback className="bg-primary text-primary-foreground">WB</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "rounded-lg p-3",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-secondary">U</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex items-center gap-2"
            >
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}