import React, { useState, useEffect } from "react";
import {ArrowRight, Code, Fingerprint, Database, CheckCircle, Star, Calendar, ArrowUp, Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Laptop, MonitorSmartphone, Video, MessageCircle} from "lucide-react";
import { Link } from "react-router-dom";

const LaptopWithCodeIcon = () => (
  <div className="relative w-14 h-14 mx-auto">
    <Laptop size={56} className="absolute top-0 left-0" />
    <Code size={24} className="absolute top-[12px] left-[16px]" />
  </div>
);


const servicesData = [
  {
    title: "IT Solutions",
    icon: <LaptopWithCodeIcon />,
    color: "text-[#0AB39C]",
    bg: "bg-[#D1FAE5]",
    description: 'Sed ut perspiciatis unde omnis iste natus error volup',
  },
  {
    title: "Security System",
    icon: <Fingerprint size={36} />,
    color: "text-[#6366F1]",
    bg: "bg-indigo-100",
    description: 'Sed ut perspiciatis unde omnis iste natus error volup',
  },
  {
    title: "Web Development",
    icon: <MonitorSmartphone size={36} />,
    color: "text-[#F59E0B]",
    bg: "bg-yellow-100",
    description: 'Sed ut perspiciatis unde omnis iste natus error volup',
  },
  {
    title: "Database Security",
    icon: <Database size={36} />,
    color: "text-[#F87171]",
    bg: "bg-red-100",
    description: 'Sed ut perspiciatis unde omnis iste natus error volup',
  },
];


const desktopComputing = [
  { id: 1, color: 'text-red-500', title: 'Desktop Computing' },
  { id: 2, color: 'text-yellow-500', title: 'Desktop Computing' },
  { id: 3, color: 'text-blue-500', title: 'Desktop Computing' },
  { id: 4, color: 'text-blue-500', title: 'Desktop Computing' },
  { id: 5, color: 'text-red-500', title: 'Desktop Computing' },
  { id: 6, color: 'text-[#0AB39C]', title: 'Desktop Computing' },
];


const caseStudies = [
  {
    id: 1,
    title: "How To Improve IT knowledge",
    subtitle: "IT / Solutions",
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/01.jpg",
  },
  {
    id: 2,
    title: "How To Improve IT knowledge",
    subtitle: "IT / Solutions",
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/02.jpg",
  },
  {
    id: 3,
    title: "How To Improve IT knowledge",
    subtitle: "IT / Solutions",
    image: "https://html.webtend.net/omnivus/assets/img/portfolio/03.jpg",
  },
]

const numbers = [
  {
    number: "280",
    label: "Our Branches",
    color: "bg-emerald-500",
    offset: "translate-y-[-12px]",
  },
  {
    number: "782",
    label: "Projects Done",
    color: "bg-yellow-400",
    offset: "translate-y-[0px]",
  },
  {
    number: "1M",
    label: "Happy Users",
    color: "bg-red-500",
    offset: "translate-y-[-12px]",
  },
  {
    number: "100",
    label: "Awards",
    color: "bg-blue-500",
    offset: "translate-y-[0px]",
  },
];


const teamMembers = [
  {
    name: 'Harry Garrett',
    title: 'Design Expert',
    image: 'https://html.webtend.net/omnivus/assets/img/team/team-01.jpg',
  },
  {
    name: 'Doris Jordan',
    title: 'Design Expert',
    image: 'https://html.webtend.net/omnivus/assets/img/team/team-02.jpg',
  },
  {
    name: 'Harry Garrett',
    title: 'Design Expert',
    image: 'https://html.webtend.net/omnivus/assets/img/team/team-03.jpg',
  },
  {
    name: 'Johnny Ramirez',
    title: 'Design Expert',
    image: 'https://html.webtend.net/omnivus/assets/img/team/team-04.jpg',
  },
  {
    name: 'Diana Wagner',
    title: 'Design Expert',
    image: 'https://html.webtend.net/omnivus/assets/img/team/team-05.jpg',
  },
];


const testimonials = [
  {
    name: 'Eugene Freeman',
    position: 'Tincidunt',
    image: 'https://html.webtend.net/omnivus/assets/img/testimonials/01.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.',
    borderColor: 'border-blue-600',
  },
  {
    name: 'Kelly Coleman',
    position: 'Nulla nec',
    image: 'https://html.webtend.net/omnivus/assets/img/testimonials/02.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.',
    borderColor: 'border-green-600',
  },
  {
    name: 'Philip Mendez',
    position: 'Consectetur',
    image: 'https://html.webtend.net/omnivus/assets/img/testimonials/03.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.',
    borderColor: 'border-red-600',
  },
];


const blogPosts = [
    {
      img: "https://html.webtend.net/omnivus/assets/img/portfolio/03.jpg",
      title:
        "Monthly Web Development Update Design Ethics & Clarity Over Solution",
      date: "05 Aug 2019",
    },
    {
      img: "https://html.webtend.net/omnivus/assets/img/latest-news/02.jpg",
      title:
        "Design System: What It And How To Create One Using Indigo Design Sence",
      date: "05 Aug 2019",
    },
    {
      img: "https://html.webtend.net/omnivus/assets/img/latest-news/03.jpg",
      title:
        "How We Used WebAssembly To Speed Up Our Web App By Omnivus",
      date: "05 Aug 2019",
    },
  ];


const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [numbersAnimated, setnumbersAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      const numbersSection = document.getElementById("numbers-section");
      if (numbersSection) {
        const rect = numbersSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !numbersAnimated) {
          setnumbersAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [numbersAnimated]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!numbersAnimated) return;

      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration, numbersAnimated]);

    return <span>{count}</span>;
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      <header
      className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://html.webtend.net/omnivus/assets/img/logo.png"
            alt="Omnivus Logo"
            className="h-8 sm:h-10"
          />
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-800">
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <a href="/services" className="hover:text-blue-600 transition">Services</a>
          <a href="/pages" className="hover:text-blue-600 transition">Pages</a>
          <a href="/blog" className="hover:text-blue-600 transition">Blog</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* CTA Button */}
        <a
          href="/quote"
          className="ml-4 px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          Free Consulting
        </a>
      </div>
    </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat py-24 px-6 md:px-16 relative"
        style={{
        backgroundImage: "url('https://html.webtend.net/omnivus/assets/img/banner/banner-one-bg.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="text-center lg:text-left flex-1">
            <p className="text-sm text-blue-600 font-semibold mb-4">IT Business Consulting</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Best IT Solutions <br />
              Provider Agency
            </h1>
            <p className="text-gray-700 text-base mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque totam rem aperiam.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Our Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <img
              src="https://html.webtend.net/omnivus/assets/img/banner/banner-img.png"
              alt="Consulting"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>


      {/* Services Section - What We Do */}
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h5 className="text-sm text-blue-600 font-semibold uppercase tracking-widest mb-2">
              Services
            </h5>
            <h2 className="text-4xl font-bold text-gray-800">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`group relative px-6 py-10 rounded-2xl shadow-md overflow-hidden text-center transition duration-300 bg-white hover:bg-[#0A5EFF] flex flex-col items-center justify-center`}
                style={{ minHeight: "320px" }}
              >
                {/* Dot background on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-no-repeat bg-[length:120px_120px] bg-right-top transition-opacity duration-300 pointer-events-none"
                  style={{
                    backgroundImage:
                      "url(https://html.webtend.net/omnivus/assets/img/shape/service-dot.png)"
                  }}
                ></div>

                {/* Icon */}
                <div
                  className={`relative z-10 w-20 h-20 flex items-center justify-center rounded-full mb-6 text-3xl transition-all duration-300 ${service.bg} ${service.color} group-hover:bg-white group-hover:text-[#0A5EFF]`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-semibold text-gray-800 group-hover:text-white mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-gray-600 group-hover:text-white leading-relaxed max-w-[220px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Core Features Section */}
      <section className="bg-[#f2f7ff] py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Images */}
          <div className="relative w-full md:w-1/2">
            {/* Main Image */}
            <img
              src="https://html.webtend.net/omnivus/assets/img/tile-gallery/tile-gallery-01.jpg"
              alt="Main"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            {/* Overlapping Image - Slightly Lowered */}
            <img
              src="https://html.webtend.net/omnivus/assets/img/tile-gallery/tile-gallery-02.jpg"
              alt="Team"
              className="absolute bottom-[-250px] right-[-40px] w-[70%] rounded-lg shadow-xl border-4 border-white"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2">
            <h4 className="text-sm text-blue-600 font-semibold uppercase mb-3">
              Core Features
            </h4>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Get More Good Experience.
            </h2>
            <p className="text-lg text-blue-500 mb-4">
              Our knowledge of computers will help us
            </p>
            <p className="text-gray-600 mb-6">
              Does any industry face a more complex audience journey and marketing
              sales process than B2B technology? Consider the number of people who
              influence a sale, the length of the decision-making cycle, the
              competing interests of the people who purchase, implement, manage,
              and use the technology. It’s a lot of meaningful content here.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200"
              >
                Learn More
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg shadow flex items-center gap-2 transition duration-200"
              >
                <Video className="w-5 h-5" />
                Intro Video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Computing */}

      <section className="bg-white py-20 mt-[280px]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Our Latest Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-12">
            We Offer Better Solution <br /> For Your IT Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {desktopComputing.map(({ id, color, title }) => (
            <div
              key={id}
              className="bg-[#f4f7fe] rounded-lg p-6 text-left"
            >
              <div className={`${color} mb-4 mx-auto w-14 h-14`}>
                <LaptopWithCodeIcon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantiumtotam
              </p>
            </div>
          ))}
          </div>
        </div>
      </section>


      {/* Casestudy Section */}

      <section className="bg-blue-600 text-white px-6 py-16">
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="uppercase tracking-widest text-sm mb-2">Latest Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Read Our Recent <br /> Case Studies
          </h2>
        </div>

        {/* Case Study Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {caseStudies.map(({ id, title, subtitle, image }) => (
            <div
              key={id}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image (z-0) */}
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0"
              />

              {/* Overlay (z-10 but partially transparent) */}
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10" />

              {/* Text Content (z-20 so it's above overlay) */}
              <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                <p className="text-sm text-gray-300">{subtitle}</p>
                <h3 className="text-xl font-bold leading-tight">{title}</h3>
              </div>

              {/* Arrow Button (z-20 as well) */}
              <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                <div className="bg-white text-blue-600 p-2 rounded-full shadow hover:bg-gray-100">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* Numbers Section */}

     <section className="bg-[#0c1c3f] py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {numbers.map(({ number, label, color, offset }, index) => (
            <div
              key={index}
              className={`border border-[#2c3c5f] rounded-lg p-8 ${offset} bg-[#0c1c3f]`}
            >
              {/* Icon Circle */}
              <div
                className={`mx-auto w-12 h-12 flex items-center justify-center rounded-full mb-4 ${color}`}
              >
                <MessageCircle className="text-white w-6 h-6" />
              </div>

              {/* Number */}
              <div className="text-3xl font-bold text-white mb-1">{number}</div>

              {/* Label */}
              <p className="text-sm text-white">{label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">Our Team Member</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Meet Our Exclusive Leadership</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 md:px-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-end justify-center transition-opacity duration-300">
                <div className="flex gap-3 mb-4">
                  <div className="bg-white rounded-full p-2 shadow-md hover:bg-blue-100 cursor-pointer">
                    <Facebook className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="bg-white rounded-full p-2 shadow-md hover:bg-blue-100 cursor-pointer">
                    <Twitter className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="bg-white rounded-full p-2 shadow-md hover:bg-blue-100 cursor-pointer">
                    <Instagram className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="text-center bg-white py-4">
                <h4 className="font-bold text-lg text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonial Section */}
      
      <section className="bg-gray-50 py-20" style={{ backgroundColor: '#f7faff' }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-blue-600 font-semibold uppercase text-sm mb-2">Client Testimonials</h4>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">What our clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${testimonial.borderColor}`}
              >
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h5 className="text-gray-900 font-semibold">{testimonial.name}</h5>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}

      <section className="relative py-20 bg-blue-600 bg-blend-overlay bg-cover bg-center"style={{ backgroundImage: "url('https://html.webtend.net/omnivus/assets/img/cta-bg/cta-bg.jpg')" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            {/* Text Content */}
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h5 className="text-sm uppercase font-semibold text-white opacity-80 mb-2">Call to Action</h5>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">Let’s Discuss With Us<br />Your Estimate.</h2>
            </div>

            {/* Contact Button */}
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-100 transition">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </section>


      {/* Read Our Blog */}

      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-blue-600 uppercase mb-2">Latest News</p>
          <h2 className="text-4xl font-bold mb-12">Read Our Latest News & Blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="shadow-lg rounded-lg overflow-hidden bg-white"
              >
                <img
                  src={post.img}
                  alt={`Blog ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <p className="text-sm text-blue-600">By Admin, {post.date}</p>
                  <h3 className="text-xl font-semibold mt-2 mb-4">{post.title}</h3>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* footer Section */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* OmniVus Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">OmniVus.</h3>
            <p className="text-sm text-slate-300 mb-4">
              The web has changed a lot since Vitaly posted his first article back
              in 2006. The team at Smashing has changed too, as have the things
              that we bring to our community conferences, books, and our
              membership added to the online magazine.
            </p>
            <p className="text-sm text-slate-400">
              One thing that hasn’t changed is that we’re a small team — with most
              of us not working
            </p>
          </div>

          {/* Pages Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>› Home</li>
              <li>› Services</li>
              <li>› About</li>
              <li>› Career</li>
              <li>› Refund</li>
              <li>› Terms</li>
              <li>› Details</li>
              <li>› Contact</li>
              <li>› Business</li>
              <li>› Affiliate</li>
            </ul>
          </div>

          {/* Working Hours Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Working Hours</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>Monday - Friday: 7:00 - 17:00</li>
              <li>Saturday: 7:00 - 12:00</li>
              <li>Sunday and holidays: 8:00 - 10:00</li>
            </ul>
            <p className="mt-4 text-sm">
              <span className="font-semibold text-white">For more than 30 years</span>, IT
              Service has been a reliable partner in the field of logistics and
              cargo forwarding.
            </p>
            <a href="#" className="text-blue-400 mt-2 inline-block hover:underline">
              › Discover More
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 text-center text-sm text-slate-500 border-t border-slate-700 pt-6">
          Copyright By@ <span className="text-white font-semibold">WebTend</span> - 2021
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
          aria-label="Back to Top"
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;