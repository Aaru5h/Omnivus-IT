import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "UI/UX Design",
    image: "https://html.webtend.net/omnivus/assets/img/service-img/07.jpg",
    description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content."
  },
  {
    title: "IT Consultancy",
    image: "https://html.webtend.net/omnivus/assets/img/service-img/08.jpg",
    description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content."
  },
  {
    title: "Technology Prof.",
    image: "https://html.webtend.net/omnivus/assets/img/service-img/09.jpg ",
    description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content."
  },
  {
    title: "Web Development",
    image: "https://html.webtend.net/omnivus/assets/img/service-img/10.jpg ",
    description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content."
  },
  {
    title: "Web Development",
    image: "https://html.webtend.net/omnivus/assets/img/service-img/11.jpg",
    description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content."
  },
  {
    title: "Game Design",
    image: "https://html.webtend.net/omnivus/assets/img/service-img/12.jpg ",
    description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content."
  }
];

const pricingPlans = {
  monthly: [
    { title: "Early Birds", price: "$9 / month" },
    { title: "Team", price: "$32 / month" },
    { title: "Personal", price: "$69 / month" },
    { title: "Platinum", price: "$99 / month" }
  ],
  yearly: [
    { title: "Early Birds", price: "$90 / year" },
    { title: "Team", price: "$320 / year" },
    { title: "Personal", price: "$690 / year" },
    { title: "Platinum", price: "$990 / year" }
  ]
};

const posts = [
  {
    category: "Design/SEO",
    title: "A series of iOS 7 inspired Vector Icons",
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/04.jpg"
  },
  {
    category: "Design/SEO",
    title: "A series of iOS 7 inspired Vector Icons",
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/05.jpg"
  },
  {
    category: "Design/SEO",
    title: "A series of iOS 7 inspired Vector Icons",
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/06.jpg"
  }
];

export default function Services() {
  const [planType, setPlanType] = useState("monthly");
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 font-sans">

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
          Get A Quote
        </a>
      </div>
    </header>

      <header className="p-10 text-center">
        <h1 className="text-6xl font-extrabold mb-4">Services</h1>
        <nav className="text-sm text-gray-500 flex justify-center gap-2">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span>|</span>
          <span className="font-semibold">Services</span>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {servicesData.map((data, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
          >
            {/* Image with zoom on hover */}
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Semi-dark overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Text overlay at bottom, reveal on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white transition-all duration-500">
              <h3 className="text-lg font-bold">{data.title}</h3>
              <p className="opacity-0 group-hover:opacity-100 mt-1 text-sm transition-opacity duration-500">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </section>


      <section className="max-w-5xl mx-auto px-6 mb-20">
        {/* Section Title */}
        <div className="mb-8 text-center md:text-left">
          <p className="text-blue-600 font-semibold text-sm border-b-2 inline-block border-blue-600 mb-2">Plans</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">Here is plans</h2>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-end gap-6 mb-12">
          {["monthly", "yearly"].map((type) => (
            <button
              key={type}
              onClick={() => setPlanType(type)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                planType === type
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {pricingPlans[planType].map(({ title, price }) => {
            const [dollar, duration] = price.split("/");
            return (
              <div
                key={title}
                className="relative rounded-lg shadow-lg p-6 text-center cursor-pointer bg-white group hover:bg-blue-600 transition"
              >
                <div className="group-hover:text-white transition">
                  <h3 className="text-lg font-semibold text-blue-600 group-hover:text-white mb-2">{title}</h3>
                  <p className="text-5xl font-extrabold mb-1">{dollar.trim()}</p>
                  <p className="text-sm mb-4 text-gray-500 group-hover:text-white">{duration.trim().replace(/^./, m => m.toUpperCase())}</p>
                  <p className="text-sm text-gray-500 mb-6 group-hover:text-white">
                    The functional goal of technical content is to help people use a product successfully.
                  </p>
                  <button className="px-5 py-2 rounded-full bg-white text-blue-600 font-semibold group-hover:bg-white/90 group-hover:text-blue-700 transition">
                    Purchase Now
                  </button>
                </div>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-30 rounded-lg transition"></div>
              </div>
            );
          })}
        </div>
      </section>


      <section className="bg-[#0a2540] py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Newsfeeds</h2>
        <p className="text-blue-200 text-center italic max-w-2xl mx-auto mb-12">
          Does any industry face a more complex audience journey and marketing sales process than B2B technology?
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {posts.map(({ category, title, image }, index) => (
        <div
          key={index}
          className="relative w-72 h-72 rounded-lg overflow-hidden group shadow-lg cursor-pointer"
        >
          {/* Background image with default faded look */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover brightness-75 group-hover:rotate-1 transition-all duration-500"
          />

          {/* Blue overlay - slightly visible even before hover */}
          <div className="absolute inset-0 bg-blue-600 opacity-20 group-hover:opacity-40 transition duration-300"></div>

          {/* Text content - always visible */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-500 group-hover:justify-start">
            <p className="text-white text-xs font-semibold mb-1 transition-all duration-500">
              {category}
            </p>
            <h3 className="text-white text-base font-bold leading-tight transition-all duration-500">
              {title}
            </h3>
          </div>

          {/* Arrow - shows on hover */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-white text-lg">→</span>
          </div>
        </div>
      ))}

        </div>
      </section>



      <footer className="relative bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('https://html.webtend.net/omnivus/assets/img/footer-bg.jpg')" }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-950/80"></div>

        {/* Footer content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">OmniVus.</h2>
            <p className="text-sm leading-relaxed">
              The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community conferences, books, and our membership added to the online magazine.
            </p>
            <p className="text-sm mt-4">
              One thing that hasn't changed is that we're a small team — with most of us not working.
            </p>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to = '/'>›Home</Link></li>
              <li><Link to = '/services'>›Services</Link></li>
              <li>›About</li>
              <li><Link to='/blog'>›Blog</Link></li>
              <li>›Refund</li>
              <li>›Terms</li>
              <li>›Details</li>
              <li>›Contact</li>
              <li>›Business</li>
              <li>›Affiliate</li>
            </ul>
          </div>

          {/* Working Hours Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <ul className="text-sm space-y-1">
              <li>Monday - Friday: 7:00 - 17:00</li>
              <li>Saturday: 7:00 - 12:00</li>
              <li>Sunday and holidays: 8:00 - 10:00</li>
            </ul>
            <p className="mt-4 text-sm">
              <span className="font-semibold">For more than 30 years,</span> IT Service has been a reliable partner in the field of logistics and cargo forwarding.
            </p>
            <a href="#" className="text-blue-400 mt-2 inline-block underline text-sm">› Discover More</a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="relative z-10 text-center text-sm py-4 border-t border-white/10">
          Copyright By@ <span className="font-semibold">WebTrend</span> - 2021
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}