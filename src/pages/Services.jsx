import { useState } from "react";
import { ArrowUp } from "lucide-react"; // example icon from Lucide

const servicesData = [
  {
    title: "UI/UX Design",
    image: "/images/uiux.jpg",
    description: "Creating intuitive and beautiful user experiences.",
  },
  {
    title: "IT Consultancy",
    image: "/images/it-consultancy.jpg",
    description: "Expert advice for your IT infrastructure.",
  },
  {
    title: "Web Development",
    image: "/images/web-dev.jpg",
    description: "Building scalable and fast websites.",
  },
  {
    title: "Game Design",
    image: "/images/game-design.jpg",
    description: "Designing engaging game mechanics and graphics.",
  },
];

const pricingPlans = {
  monthly: [
    { title: "Early Birds", price: "$9 / month" },
    { title: "Team", price: "$32 / month" },
    { title: "Personal", price: "$69 / month" },
    { title: "Platinum", price: "$99 / month" },
  ],
  yearly: [
    { title: "Early Birds", price: "$90 / year" },
    { title: "Team", price: "$320 / year" },
    { title: "Personal", price: "$690 / year" },
    { title: "Platinum", price: "$990 / year" },
  ],
};

export default function ServicesPage() {
  const [planType, setPlanType] = useState("monthly");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Page Header */}
      <header className="p-10 text-center">
        <h1 className="text-6xl font-extrabold mb-4">Services</h1>
        <nav className="text-sm text-gray-500 flex justify-center gap-2">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span>|</span>
          <span className="font-semibold">Services</span>
        </nav>
      </header>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {servicesData.map(({ title, image, description }) => (
          <div
            key={title}
            className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-sm">
                {description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Plans Section */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Plans</h2>

        {/* Toggle buttons */}
        <div className="flex justify-center gap-6 mb-12">
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
          {pricingPlans[planType].map(({ title, price }) => (
            <div
              key={title}
              className="relative rounded-lg shadow-lg p-6 text-center cursor-pointer bg-white group hover:bg-blue-600 transition"
              style={{
                backgroundImage:
                  "url('/images/faded-bg.jpg')", // example faded photo
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="group-hover:text-white transition">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-2xl font-extrabold mb-4">{price}</p>
                <button className="px-5 py-2 rounded-full bg-white text-blue-600 font-semibold group-hover:bg-white/90 group-hover:text-blue-700 transition">
                  Purchase Now
                </button>
              </div>
              {/* Overlay to fade background image and blue tint */}
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-30 rounded-lg transition"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      {/* News Feed Section */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <p className="text-center italic max-w-3xl mx-auto text-gray-700 mb-8">
          Does any industry face a more complex audience journey and marketing sales process than B2B technology?
        </p>
        {/* Example icons/photos */}
        <div className="flex justify-center gap-16">
          <div className="text-center">
            <div className="mx-auto mb-3 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Replace with Lucide icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M3 14h8m-8 4h5" />
              </svg>
            </div>
            <p className="font-semibold">Design SEO</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Replace with Lucide icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M14 10l-4 4m0-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-semibold">iOS Inspired</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Replace with Lucide icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="font-semibold">Vector Icons</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          {/* Links */}
          <nav className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">Working Hours</a>
          </nav>

          {/* Text content */}
          <div className="max-w-md text-xs leading-relaxed">
            <p>For more than 30 years, IT services has been a reliable partner in the field of logistics and cargo forwarding.</p>
            <p className="mt-3">Copyright &copy; Omnivus. The web has changed a lot since Vitaly posted his first article in 2006.</p>
          </div>
        </div>
      </footer>

      {/* Decorative Circles */}
      <div className="fixed bottom-8 right-8 pointer-events-none">
        <div className="w-32 h-32 rounded-full bg-blue-600 opacity-20"></div>
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 opacity-30 -mt-20 ml-16"></div>
      </div>
    </div>
  );
}
