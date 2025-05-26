import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Shield,
  Smartphone,
  Database,
  CheckCircle,
  Star,
  Calendar,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Alice Johnson",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Bob Smith",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Catherine Lee",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/",
    },
  },
];

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !statsAnimated) {
          setStatsAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [statsAnimated]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsAnimated) return;

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
    }, [end, duration, statsAnimated]);

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
            src="https://html.webtend.net/omnivus/assets/img/logo-2.png"
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
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <p className="text-gray-500">What we offer to help you grow your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {[
            { icon: <Code />, title: "Web Development" },
            { icon: <Shield />, title: "Cybersecurity" },
            { icon: <Smartphone />, title: "Mobile Apps" },
            { icon: <Database />, title: "Data Solutions" },
          ].map((service, idx) => (
            <div
              key={idx}
              className="border p-6 rounded-lg shadow hover:shadow-lg transition-colors duration-300 cursor-pointer
                hover:bg-blue-600 hover:text-white flex flex-col items-center text-center"
            >
              <div className="mb-4 text-blue-600 group-hover:text-white">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Meet Our Team</h2>
          <p className="text-gray-500">Our talented and dedicated professionals</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
          {teamMembers.map(({ name, photo, socials }, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer rounded-lg shadow-lg overflow-hidden bg-white"
            >
              {/* Image with fade-in */}
              <img
                src={photo}
                alt={name}
                className="w-full h-72 object-cover rounded-t-lg transition-opacity duration-700 opacity-0 group-hover:opacity-80 fade-in"
                onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
              />
              {/* Overlay with social icons on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl mb-4">{name}</h3>
                <div className="flex space-x-4 text-white">
                  {socials.facebook && (
                    <a href={socials.facebook} target="_blank" rel="noreferrer" className="hover:text-blue-500">
                      <Facebook />
                    </a>
                  )}
                  {socials.twitter && (
                    <a href={socials.twitter} target="_blank" rel="noreferrer" className="hover:text-blue-400">
                      <Twitter />
                    </a>
                  )}
                  {socials.linkedin && (
                    <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700">
                      <Linkedin />
                    </a>
                  )}
                  {socials.instagram && (
                    <a href={socials.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-500">
                      <Instagram />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            { icon: <CheckCircle />, label: "Projects Completed", value: 1200 },
            { icon: <Star />, label: "Happy Clients", value: 850 },
            { icon: <Calendar />, label: "Years of Experience", value: 10 },
            { icon: <Code />, label: "Lines of Code", value: 500000 },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <div className="text-blue-600 mb-2 mx-auto w-fit">{stat.icon}</div>
              <div className="text-3xl font-bold">
                <CountUp end={stat.value} />+
              </div>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
        <p className="mb-6">Let us help you transform your business today.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a team of experienced developers and designers building quality digital
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to='/' className="hover:text-white" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/services' className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to='/blog' className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> +1 (123) 456-7890
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" /> info@example.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" /> 123 Main Street, City
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">&copy; {new Date().getFullYear()} Omnivus IT Solutions. All rights reserved.</div>
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