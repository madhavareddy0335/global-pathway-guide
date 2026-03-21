import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phone = "919876543210";
  const message = encodeURIComponent("Hi KMR Global Education, I am interested in studying abroad. Please guide me.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#25D366] text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-[0.97] transition-all duration-200 animate-pulse-glow group"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline">Chat with us</span>
    </a>
  );
};
