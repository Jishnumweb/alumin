"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-light uppercase mb-10 text-black">
          CONTACT <span className="text-[red] font-bold">US</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE - Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3786.003525999212!2d76.5530051750194!3d9.072318090990745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDQnMjAuNCJOIDc2wrAzMycyMC4xIkU!5e1!3m2!1sen!2sin!4v1764835280679!5m2!1sen!2sin"
              width="600"
              height="450"
              //   style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <form
            onSubmit={submitForm}
            className="bg-gray-100 text-black rounded-xl p-8 shadow-lg space-y-5"
          >
            <div>
              <label className="text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 rounded-lg mt-1 outline-none border bg-white"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-lg mt-1 outline-none border bg-white"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                name="message"
                className="w-full p-3 rounded-lg mt-1 outline-none border bg-white h-28"
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-red-600 transition"
            >
              <Send size={18} /> Send Message
            </button>

            {/* Contact details */}
            <div className="space-y-2 pt-4">
              <p className="flex items-center gap-2">
                <Phone size={18} className="text-red-600" />
                +91 7034751431 | 8075255573
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-red-600" />
                aluplus7575@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} className="text-red-600" />
                Aluplus Aluminium, Near Sree Budha School, Sree Budha Road
                Veluthamanal, Thodiyur, Kollam-690523, Kerala
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918075255573?text=Hello%20I%20need%20an%20enquiry"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all"
      >
        <MessageCircle size={30} />
      </a>
    </section>
  );
};

export default ContactSection;
