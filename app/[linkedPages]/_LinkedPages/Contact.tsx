"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.name === "" || form.email === "" || form.message === "") {
      alert("Please fill out all fields.");
      return;
    }

    const data = {
      name: form.name,
      email: form.email,
      message: form.message,
    }

    try {
      const response = await fetch(
        "https://getform.io/f/57a89184-4a6f-40c1-b3c2-500073e5ab56",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        alert("Form submitted!");
      } else {
        alert("Error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <main className="full-width">
      <section className="breakout h-[400px] flex items-center mb-10">
        <h1 className="text-8xl font-bold">Looking for me?</h1>
      </section>
      <section className="flex flex-col justify-center items-center gap-5 min-h-[500px] py-20">
        <h1 className="text-center text-sky-700">Let&apos;s Connect.</h1>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col w-full px-2 items-center justify-center max-w-[550px]"
        >
          <input
            className="h-20 flex items-center w-full border-b-2 focus:pl-2 outline-sky-500"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={form.name}
          />
          <input
            className="h-20 flex items-center w-full border-b-2 focus:pl-2 outline-sky-500"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
          <textarea
            cols={30}
            rows={10}
            className="h-20 flex items-center w-full border-b-2 focus:pl-2 pt-2 outline-sky-500"
            placeholder="Message"
            onChange={handleChange}
            name="message"
            value={form.message}
          />
          <input type="hidden" name="_gotcha" className="!hidden"></input>
          <button
            className="place-self-end mt-2 py-2 px-5  bg-sky-700 hover:bg-sky-700/90 text-white font-medium"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
