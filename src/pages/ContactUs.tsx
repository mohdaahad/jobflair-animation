
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1 glass-card p-6">
              <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium block">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full py-2 px-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium block">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full py-2 px-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-sm font-medium block">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full py-2 px-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium block">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full py-2 px-4 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-job/50"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-2.5 px-5 glass bg-job hover:bg-job-hover text-white rounded-xl transition-colors duration-200 font-medium"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex-1">
              <div className="glass-card p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-job mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium">Email</h3>
                      <p className="text-foreground/70">contact@jobflair.com</p>
                      <p className="text-foreground/70">support@jobflair.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-job mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium">Phone</h3>
                      <p className="text-foreground/70">+1 (555) 123-4567</p>
                      <p className="text-foreground/70">+1 (555) 765-4321</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-job mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium">Office</h3>
                      <p className="text-foreground/70">
                        123 Innovation Drive, Suite 400<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Sunday</span>
                    <span className="text-foreground/70">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
