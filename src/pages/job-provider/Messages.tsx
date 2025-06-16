
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Send, Search, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      candidate: "John Doe",
      position: "Senior React Developer",
      lastMessage: "Thank you for considering my application. I'm very excited about this opportunity.",
      time: "2 hours ago",
      unread: 1,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      candidate: "Sarah Johnson",
      position: "Frontend Developer",
      lastMessage: "I'm available for an interview next week. Please let me know what works best.",
      time: "1 day ago",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "employer",
      content: "Hi John! Thank you for applying to our Senior React Developer position. We're impressed with your background.",
      time: "Yesterday 3:30 PM",
    },
    {
      id: 2,
      sender: "candidate",
      content: "Thank you for considering my application. I'm very excited about this opportunity.",
      time: "2 hours ago",
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Messages</h1>
            <p className="text-lg text-foreground/70">
              Communicate with job candidates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversations List */}
            <div className="glass-card p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-5 w-5" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
              
              <div className="space-y-2">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedChat === conv.id ? 'bg-job/10' : 'hover:bg-foreground/5'
                    }`}
                    onClick={() => setSelectedChat(conv.id)}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={conv.avatar}
                        alt={conv.candidate}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium truncate">{conv.candidate}</p>
                          {conv.unread > 0 && (
                            <span className="bg-job text-white text-xs rounded-full px-2 py-1">
                              {conv.unread}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-foreground/70">{conv.position}</p>
                        <p className="text-xs text-foreground/60 truncate">{conv.lastMessage}</p>
                        <p className="text-xs text-foreground/50">{conv.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2 glass-card flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-foreground/10">
                    <div className="flex items-center gap-3">
                      <img
                        src={conversations.find(c => c.id === selectedChat)?.avatar}
                        alt="Candidate"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{conversations.find(c => c.id === selectedChat)?.candidate}</p>
                        <p className="text-sm text-foreground/70">{conversations.find(c => c.id === selectedChat)?.position}</p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'employer' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.sender === 'employer'
                              ? 'bg-job text-white'
                              : 'bg-foreground/10'
                          }`}
                        >
                          <p>{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'employer' ? 'text-white/70' : 'text-foreground/50'
                          }`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-foreground/10">
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="resize-none"
                        rows={2}
                      />
                      <Button onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="h-16 w-16 mx-auto mb-4 text-foreground/30" />
                    <p className="text-foreground/70">Select a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Messages;
