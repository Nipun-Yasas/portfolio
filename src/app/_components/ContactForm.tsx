"use client";
import React from "react";
import { Label } from "./helper/Label";
import { Input } from "./helper/Input";
import { Textarea } from "./helper/Textarea";
import  Button from "./helper/Button";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("Contact form:", {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });
  };

  return (
    <div className="shadow-input w-full max-w-sm lg:px-8 rounded-none bg-bgcolor md:rounded-2xl ">
      <form onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            type="text"
            required
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
          />
        </LabelInputContainer>

        <div className="flex justify-center">
        <Button >Send a message</Button></div>

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
