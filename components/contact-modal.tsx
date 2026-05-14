'use client';

import { useState } from 'react';
import { X, Phone, MessageCircle, Mail } from 'lucide-react';

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '9699055968';
  const email = 'zestwanders@gmail.com';
  const whatsappUrl = `https://wa.me/919699055968`;

  return (
    <>
      {/* Contact Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40"
        aria-label="Contact us"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-muted-foreground mb-6 text-sm">
              Get in touch with us via phone, WhatsApp, or email
            </p>

            {/* Contact Options */}
            <div className="space-y-3">
              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-semibold">{phoneNumber}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground font-semibold">{phoneNumber}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
              >
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-semibold text-sm break-all">{email}</p>
                </div>
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-6 px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
