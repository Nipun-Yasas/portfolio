"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "./helper/Label";
import { Input } from "./helper/Input";
import { Textarea } from "./helper/Textarea";
import Button from "./helper/Button";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleButtonClick = async () => {
    if (!formRef.current) return;

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      throw new Error("Please fill in all required fields");
    }

    setFormStatus('sending');
    setErrorMessage("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }
      await Promise.all([
        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey),
        new Promise(resolve => setTimeout(resolve, 600))
      ]);

      setFormStatus('success');
      formRef.current.reset();
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 2500);

    } catch (error) {
      console.error("Failed to send email:", error);
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.");
      
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage("");
      }, 5000);
      throw error;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="shadow-input w-full max-w-sm lg:px-8 rounded-none bg-bgcolor md:rounded-2xl ">
      <form ref={formRef} onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            type="text"
            required
            disabled={formStatus === 'sending'}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
            disabled={formStatus === 'sending'}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows={5}
            required
            disabled={formStatus === 'sending'}
          />
        </LabelInputContainer>

        {formStatus === 'success' && (
          <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
            <p className="text-sm text-green-400 text-center">
              ✓ Message sent successfully!
            </p>
          </div>
        )}

        {formStatus === 'error' && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-red-400 text-center">
              ✗ {errorMessage || "Failed to send message. Please try again."}
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <Button 
            type="button"
            onClick={handleButtonClick}
            disabled={formStatus === 'sending'}
          >
            Send a message
          </Button>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex w-full flex-col space-y-2 ${className}`}>
      {children}
    </div>
  );
};
