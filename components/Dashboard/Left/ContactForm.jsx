"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


import React from 'react'

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // e.target is the input field
    // name is the name of the input field
    // Below is same as const { target } = e
    const { name, value } = e.target;
    // ...form is the previous state, [name] is the input field
    // value is the value of the input field
    // [name]: value is the new state
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const formrefCurrent = formRef.current;

    if (!serviceId) {
      throw new Error("SERVICE_ID is not defined");
    }
    // formRef.current is the form data
    emailjs.sendForm(serviceId, templateId, formrefCurrent, publicKey).then(
      (result) => {
        setLoading(false);
        alert("Thank you for your message, I will get back to you soon.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
        alert("An error occurred, please try again.");
      }
    );
  };
  return (
    <div>
      <form
        // ref purpose here is to get the form data
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <label className="flex flex-col self-start font-medium text-xs select-none text-[#1E2022] mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="avan fabian"
          required
          className="py-1 px-3 rounded-md autofill:bg-[#34373b] bg-[#34373b] caret-[#e1e4e6] placeholder:select-none placeholder:-translate-y-[4px] placeholder:capitalize placeholder:text-[#e1e4e6] placeholder:text-[16px]" />

        <label className="flex flex-col self-start font-medium text-xs text-[#1E2022] select-none mt-2 mb-1">Your Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="avan@gmail.com"
          required
          className="py-1 px-3 rounded-md autofill:bg-[#34373b] bg-[#34373b] placeholder:select-none caret-[#e1e4e6] placeholder:-translate-y-[4px] placeholder:text-[#e1e4e6] placeholder:text-[16px]" />
        <label className="flex flex-col self-start font-medium text-xs text-[#1E2022] select-none mt-2 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="rounded-md py-2 px-3 bg-[#34373b] caret-[#e1e4e6] placeholder:select-none placeholder:text-[#e1e4e6] placeholder:text-[16px]"
          placeholder="Hi, I would like to work with you."
          required></textarea>
        <button type="submit" className="bg-[#282828] cursor-pointer h-7 py-1 mt-2 rounded-md text-xs w-[160px] font-RubikMedium text-[#E1E4E6]" >
          <span className="select-none">Send</span>
        </button>
      </form>
    </div>
  )
}

export default ContactForm