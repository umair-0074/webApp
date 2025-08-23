import { useState } from "react";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import About from "../assets/images/about.jpg";
import contact from "../assets/images/contact.jpg";
import Redcard from "../assets/Icons/Redcard.svg";
import Bluecard from "../assets/Icons/Bluecard.svg";
import sh from "../assets/images/sh.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { services } from "../assets/Data/servicedata.js";
import { projects } from "../assets/Data/portfoliodata.js";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/messages/send",
        formData
      );

      if (res.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // clear form
      } else {
        toast.error("Failed: " + (res.data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error(" Server error. Please try again later.");
    }
  };

  return (
    <div className="bg-myblack">
      {/* Hero Section */}
      <div className="flex flex-col min-h-screen ">
        <Header />
        {/* Hero Section */}
        <section className="flex items-center justify-center mx-2 md:mx-20 my-auto ">
          <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left Content */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Empowering Businesses Through Technology
              </h1>
              <p className="text-base text-gray-200 sm:text-lg lg:text-xl">
                Your Vision, Our Code
              </p>
              <a
                href="#services"
                className="inline-block px-8 py-4 font-semibold text-black transition rounded-full bg-white hover:bg-mygray hover:text-white"
              >
                Our Services
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                className="max-w-full h-auto object-contain"
                src={sh}
                alt="Hero Illustration"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="mx-4 md:mx-20">
        {/* About Section */}
        <section id="aboutus" className="text-white py-4 md:py-8 ">
          <div className="flex flex-col md:flex-row items-stretch gap-10">
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-7xl md:text-9xl font-sixcaps tracking-widest">
                ABOUT
              </h1>
              <p className="py-6 text-xl md:text-2xl font-manrope leading-relaxed">
                At LighTecHouse, we are a dedicated team of software engineers,
                IT specialists, and creative designers committed to delivering
                high-quality web development, mobile app development, software
                solutions, and graphic design services.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative flex-1 w-full">
              <div className="relative w-full max-w-2xl mx-auto pt-4 lg:pt-6 px-4 sm:px-5">
                <div className="flex relative gap-3 sm:gap-4 z-0 w-full mt-4 sm:mt-5 md:mt-6">
                  <img
                    src={Redcard}
                    alt="red"
                    className="w-1/2 object-cover rounded-lg"
                  />
                  <img
                    src={Bluecard}
                    alt="blue"
                    className="w-1/2 object-cover rounded-lg scale-x-[-1]"
                  />
                </div>

                <svg width="0" height="0" className="absolute">
                  <defs>
                    <clipPath id="aboutimg" clipPathUnits="objectBoundingBox">
                      <path d="M0.982 0.062 C0.991 0.03 0.972 0 0.922 0 H0.072 C0.038 0 0.015 0.03 0.018 0.061 L0.142 0.952 C0.147 0.98 0.17 1 0.235 1 H0.77 C0.806 1 0.835 0.978 0.839 0.952 L0.982 0.062 Z" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-[85%] max-w-[320px] sm:max-w-[380px] md:max-w-[445.5px]">
                  <img
                    src={About}
                    alt="About Inora Studio"
                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    style={{ clipPath: "url(#aboutimg)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="text-white py-4 md:py-8 ">
          <h1 className="text-7xl md:text-9xl tracking-widest font-sixcaps mb-12">
            Our Services
          </h1>

          {/* sevice card */}
          <div className="flex flex-col gap-20">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col md:flex-row items-center gap-12"
              >
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-sixcaps tracking-widest mb-4">
                    {service.name}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 ">
                    {service.description}
                  </p>
                </div>

                <div className="flex-1 flex justify-center relative">
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <clipPath id="sevicecard" clipPathUnits="userSpaceOnUse">
                        <path d="M224.775 21.6896C227.893 10.8254 219.738 0 208.435 0H17.9248C6.81784 0 -1.30577 10.477 1.46045 21.2339L26.919 120.234C28.8512 127.748 35.6252 133 43.3833 133H180.022C187.605 133 194.271 127.978 196.362 120.69L224.775 21.6896Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <img
                    src={service.image}
                    alt={service.name}
                    style={{ clipPath: "url(#sevicecard)" }}
                    className="object-cover w-[250px] h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="text-white py-4 md:py-8">
          <h1 className="text-7xl md:text-9xl font-sixcaps tracking-widest mb-12">
            Portfolio
          </h1>

          {/* Portfolio card */}
          <div className="text-white space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col md:flex-row sticky top-0"
              >
                {/* Left img */}
                <div
                  className="h-64 md:h-72 w-full md:w-1/2 overflow-hidden no-clip"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Content */}
                <div
                  className="h-64 md:h-72 w-full md:w-1/2 flex items-center bg-mygray no-clip"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                  }}
                >
                  <div className="px-6 py-4 w-[80%] md:w-[80%] mx-auto">
                    <h1 className="text-4xl md:text-5xl tracking-widest font-sixcaps py-3">
                      {project.name}
                    </h1>
                    <h3 className="text-sm md:text-base leading-snug">
                      {project.description}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-white py-4 md:py-8">
          <h1 className="font-sixcaps text-5xl md:text-7xl tracking-widest mb-12 text-center md:text-left">
            Let's Get in Touch With Us
          </h1>

          <div className="flex flex-col md:flex-row items-stretch gap-10">
            {/* Form */}
            <div className="flex-1 p-4">
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium font-manrope mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-mygray  text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium font-manrope mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-mygray  text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium font-manrope mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-mygray  text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium font-manrope mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-mygray  text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-mygray hover:bg-white hover:text-black text-white px-6 py-3 rounded-2xl transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Image */}
            <div className="flex-1 p-4">
              <img
                src={contact}
                alt="Contact Illustration"
                className="w-full h-full max-h-[500px] object-cover rounded-md"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
