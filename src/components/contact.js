import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiThreads, SiX } from "react-icons/si";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    web: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        web: form.web,
        message: form.message,
      }),
    });

    if (response.ok) {
      toast.success("Your message has been submitted successfully");
      setForm({
        name: "",
        email: "",
        web: "",
        message: "",
      });
    }
    setForm({
      name: "",
      email: "",
      web: "",
      message: "",
    });
  };
  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 mx-[24px] my-[16px] px-[32px] font-sora"
    >
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Jhon Doe"
          className="border border-zinc-300 rounded-md p-2"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jhondoe@example.com"
          className="border border-zinc-300 rounded-md p-2"
          required
        />
        <label htmlFor="web">Website</label>
        <input
          type="text"
          name="web"
          value={form.web}
          onChange={handleChange}
          placeholder="JhonDoe.com (if any)"
          className="border border-zinc-300 rounded-md p-2"
        />
        <label htmlFor="message">Name</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Drop Your Message Here"
          className="border border-zinc-300 rounded-md p-2"
        />
        <div className="flex gap-1 justify-end">
          <button
            type="reset"
            name="reset"
            className="flex items-center gap-2 bg-black text-white w-[153px] h-[56px] rounded-md justify-center hover:bg-zinc-300"
          >
            Reset
          </button>
          <button
            type="submit"
            name="submit"
            className="flex items-center gap-2 bg-black text-white w-[153px] h-[56px] rounded-md justify-center hover:bg-zinc-300"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="text-[28px] font-bold md:mx-[80px]">
        Let's{" "}
        <span className="font-extrabold font-mono text-white border-black font-outline-1">
          talk
        </span>{" "}
        for something Special.
        <br />
        <span className="text-[16px] text-gray-500 font-normal">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </span>
        <br />{" "}
        <span className="text-[16px] font-semibold">sugamgelal@gmail.com</span>
        <br />
        <span className="text-[16px] font-semibold">+977 9815397684</span>
        <br />
        OR
        <div className="flex justify-center">
          <div className="flex justify-evenly gap-2">
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
            <SiX />
            <SiThreads />
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
