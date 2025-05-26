import { useState } from "react";
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
    image: "https://html.webtend.net/omnivus/assets/img/service-img/09.jpg",
    description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content."
  },
  {
    title: "Web Development",
    image: "https://html.webtend.net/omnivus/assets/img/service-img/10.jpg",
    description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content."
  },
  {
    title: "Web Development",
    image: "https://html.webtend.net/omnivus/assets/img/service-img/11.jpg",
    description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content."
  },
  {
    title: "Game Design",
    image: "https://html.webtend.net/omnivus/assets/img/service-img/12.jpg",
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
    { title: "Early Birds", price: "$56 / year" },
    { title: "Team", price: "$99 / year" },
    { title: "Personal", price: "$133 / year" },
    { title: "Platinum", price: "$599 / year" }
  ]
};

const posts = [
  {
    category: "Design/SEO",
    title: "A series of iOS inspired Vector Icons",
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/04.jpg"
  },
  {
    category: "Design/SEO",
    title: "A series of iOS inspired Vector Icons",
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/05.jpg"
  },
  {
    category: "Design/SEO",
    title: "A series of iOS inspired Vector Icons",
    image: "https://html.webtend.net/omnivus/assets/img/latest-news/06.jpg"
  }
];

export default function ServicesPage() {
  const [planType, setPlanType] = useState("monthly");
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="p-10 text-center">
        <h1 className="text-6xl font-extrabold mb-4">Services</h1>
        <nav className="text-sm text-gray-500 flex justify-center gap-2">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span>|</span>
          <span className="font-semibold">Services</span>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {servicesData.map(( data,idx ) => (
          <div key={idx} className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg">
            <img src={data.image} alt={data.title} className="w-full h-60 object-cover group-hover:brightness-75 transition duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-lg font-bold">{data.title}</h3>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-sm">{data.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#f7faff] py-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Here is Plans</h2>
        <div className="flex justify-center gap-6 mb-12">
          {["monthly", "yearly"].map((type) => (
            <button
              key={type}
              onClick={() => setPlanType(type)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                planType === type ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {pricingPlans[planType].map((plan, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-100 hover:shadow-xl transition">
              <h3 className="text-sm text-blue-600 font-semibold mb-3">{plan.title}</h3>
              <div className="text-5xl font-extrabold text-gray-900 mb-2">{plan.price.split(" ")[0].replace("$", "$")}</div>
              <p className="text-sm text-gray-500 mb-4">Per {plan.price.includes("year") ? "Year" : "Month"}</p>
              <p className="text-gray-600 text-sm mb-6">
                The functional goal of technical content is to help people use a product successfully.
              </p>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full font-medium transition">
                Purchase Now
              </button>
            </div>
          ))}
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
              {/* Background image */}
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
              />

              {/* Blue overlay */}
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Text content container */}
              <div
                className="absolute inset-0 flex flex-col justify-end group-hover:justify-start p-4 transition-all duration-500"
              >
                <p className="text-white text-xs font-semibold mb-1 transition-all duration-500">
                  {category}
                </p>
                <h3 className="text-white text-base font-bold leading-tight transition-all duration-500">
                  {title}
                </h3>
              </div>

              {/* Optional arrow on hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>



      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <nav className="flex gap-8 text-sm font-medium">
            <Link to='/' className="hover:text-white">Home</Link>
            <Link to='/services' className="hover:text-white" onClick={scrollToTop}>Services</Link>
            <Link to='/blog' className="hover:text-white">Blog</Link>
            <Link to='/services' className="hover:text-white">Working Hours</Link>
          </nav>
          <div className="max-w-md text-xs leading-relaxed">
            <p>For more than 30 years, IT services has been a reliable partner in the field of logistics and cargo forwarding.</p>
            <p className="mt-3">Copyright &copy; Omnivus. The web has changed a lot since Vitaly posted his first article in 2006.</p>
          </div>
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