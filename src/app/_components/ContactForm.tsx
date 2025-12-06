"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Label } from "./helper/Label";
import { Input } from "./helper/Input";
import { Textarea } from "./helper/Textarea";
import Button from "./helper/Button";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Message is required"),
});

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setFormStatus('sending');
      setErrorMessage("");

      try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          throw new Error("EmailJS configuration is missing. Please check your environment variables.");
        }

        const templateParams = {
          name: values.name,
          email: values.email,
          message: values.message,
        };

        await Promise.all([
          emailjs.send(serviceId, templateId, templateParams, publicKey),
          new Promise(resolve => setTimeout(resolve, 600))
        ]);

        setFormStatus('success');
        resetForm();
        
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
      }
    },
  });

  const handleButtonClick = async () => {
    // Mark all fields as touched to show validation errors
    formik.setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Validate the form
    const errors = await formik.validateForm();
    
    // Only submit if there are no validation errors
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    }
  };

  // Button is disabled if form is invalid, empty, or currently sending
  const isButtonDisabled = formStatus === 'sending' || !formik.isValid || !formik.dirty;

  return (
    <div className="shadow-input w-full max-w-sm lg:px-8 rounded-none bg-bgcolor md:rounded-2xl ">
      <form onSubmit={formik.handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formStatus === 'sending'}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-xs text-red-400 mt-1">{formik.errors.name}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formStatus === 'sending'}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-xs text-red-400 mt-1">{formik.errors.email}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows={5}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formStatus === 'sending'}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-xs text-red-400 mt-1">{formik.errors.message}</p>
          )}
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
            disabled={isButtonDisabled}
          >
            {formStatus === 'sending' ? 'Sending...' : 'Send a message'}
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
