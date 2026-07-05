"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-7070563733",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "vivekmicromax2005@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "91-Gazebo Khanika, Hussainpur, Kolkata (700102), West Bengal, India",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData); // Log form data

    try {
      const response = await axios.post("/api/sendEmail", formData);
      console.log("Response from API:", response.data); // Log response

      if (response.data.success) {
        toast.success("Email Sent Successfully");
      } else {
        toast.error("Email Sending Failed");
      }
    } catch (error) {
      console.error("Error during form submission:", error); // Log error
      toast.error("Email Sending Failed");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] items-stretch">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
            className="xl:w-[54%] order-2 xl:order-none"
          >
            <form
              className="flex flex-col gap-6 p-6 sm:p-10 bg-[#27272c]/30 border border-white/5 rounded-xl shadow-2xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
              <p className="text-white/60">
                Hello Stranger, I am interested in working with you, let&apos;s
                work together.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>
              {/* Select */}
              <Select
                name="service"
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="--Select a Service--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>--Select a Service--</SelectLabel>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Software Development">
                      Software Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type Your Message Here"
                name="message"
                onChange={handleChange}
              />
              {/* Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="max-w-40">
                <Button type="submit" size="md" className="w-full">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 w-full"
          >
            <ul className="flex flex-col gap-6 w-full max-w-[480px]">
              {info.map((item, index) => {
                return (
                  <motion.li
                    key={index}
                    whileHover={{ x: 6 }}
                    className="flex gap-6 items-center bg-[#232329]/30 hover:bg-[#232329]/70 border border-white/5 hover:border-accent/30 p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="w-[52px] h-[52px] xl:h-[64px] xl:w-[64px] bg-[#27272c] text-accent rounded-md flex items-center justify-center shrink-0">
                      <div className="text-[24px] xl:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/60 text-sm">{item.title}</p>
                      <h3 className="text-lg xl:text-xl font-semibold break-words">{item.description}</h3>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
