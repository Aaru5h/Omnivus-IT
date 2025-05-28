import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogAPI';
import { Calendar, Eye, MessageCircle, Search, Facebook, Linkedin, Twitter, Instagram, ArrowUp, ArrowRight} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faBehance, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom"; 


const popularFeeds = [
    {
      img: "https://html.webtend.net/omnivus/assets/img/sidebar/feeds-1.png",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
    },
    {
      img: "https://html.webtend.net/omnivus/assets/img/sidebar/feeds-2.png",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
    },
    {
      img: "https://html.webtend.net/omnivus/assets/img/sidebar/feeds-3.png",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
    },
    {
      img: "https://html.webtend.net/omnivus/assets/img/sidebar/feeds-4.png",
      title: "Lorem ipsum dolor sit cing elit, sed do.",
    },
  ]

const socialLinks = [
  { icon: faFacebook, link: "#" },
  { icon: faTwitter, link: "#" },
  { icon: faBehance, link: "#" },
  { icon: faLinkedin, link: "#" },
  { icon: faPinterest, link: "#" },
];

const categories = [
    { name: "Business", count: 26 },
    { name: "Consultant", count: 30 },
    { name: "Creative", count: 71 },
    { name: "UI/UX", count: 56 },
    { name: "Technology", count: 60 },
  ]


const tweets = [
  {
    text: "Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2rIPOj0jgV C...",
    date: "November 25, 2018",
    link: "#"
  },
  {
    text: "Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2rIPOj0jgV C...",
    date: "November 25, 2018",
    link: "#"
  },
  {
    text: "Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2rIPOj0jgV C...",
    date: "November 25, 2018",
    link: "#"
  },
];


const popularTags = [
      "Popular", "desgin", "ux",
  "usability", "develop", "icon",
  "business", "consult", "kit",
  "keyboard", "mouse", "tech"
    ]

const Blog = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.blog);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <section className="py-16 lg:py-20">
      <div className="relative min-h-screen bg-gray-50 text-gray-900 font-sans">
        <div className="bg-[#f4f7fa] text-sm py-2 px-4 text-gray-600 flex justify-between items-center">
          <span>info@webmail.com</span>
          <span>786 875 864 75 7</span>
        </div>

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
        <h1 className="text-6xl font-extrabold mb-4">News Standard</h1>
        <nav className="text-sm text-gray-500 flex justify-center gap-2">
          <span className="hover:text-blue-600 cursor-pointer"><Link to = '/'>Home</Link></span>
          <span>|</span>
          <span className="font-semibold">News</span>
        </nav>
      </header>


        <div className="grid lg:grid-cols-3 gap-10">

          
          {/* Blog Posts */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {loading && <div className="text-center text-lg text-gray-600">Loading blogs...</div>}
            {error && <div className="text-center text-red-500 text-lg">Error: {error}</div>}
            {!loading && !error && posts.length === 0 && (
              <div className="text-center text-gray-600 text-lg">No blogs available.</div>
            )}
            {!loading && !error && posts.length > 0 &&
            posts.map((blog, index) => (
              <div
                key={blog.id}
                className="rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Show video overlay for the second post */}
                {index === 1 && blog.bannerImage ? (
                  <div className="relative mb-4 w-full rounded-lg overflow-hidden">
                    <img
                      src={blog.bannerImage}
                      alt={blog.title}
                      className="w-full object-contain max-h-[400px]"
                    />
                    <a
                      href="https://youtu.be/t8mvutAh4AE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-blue-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 4l10 6-10 6V4z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                ) : (
                  blog.bannerImage && (
                    <img
                      src={blog.bannerImage}
                      alt={blog.title}
                      className="mb-4 w-full rounded-lg object-contain max-h-[400px]"
                    />
                  )
                )}

                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>

                <h3 className="text-2xl font-bold text-dark mb-3">{blog.title}</h3>

                <div className="flex items-center text-sm text-gray-500 gap-6 mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{blog.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{blog.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                <p className="text-body-color text-sm mb-6">{blog.description}</p>

                <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700 font-medium">
                    by <Link to="/blog" onClick={scrollToTop} className="hover:underline">{blog.author.name}</Link>
                  </span>
                </div>

                <Link
                  to="/blog"
                  onClick={scrollToTop}
                  className="flex items-center text-blue-600 text-sm font-semibold hover:underline"
                >
                  <ArrowRight className="mr-1 w-4 h-4" />
                  Read More
                </Link>
              </div>

                
              </div>
            ))
          }

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 flex flex-col gap-8">
            {/* About Me Card */}
            <div className="rounded-xl border border-gray-200 p-6 shadow-md">
              <h4 className="text-primary text-sm font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 inline-block"></span> About Me
              </h4>
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://html.webtend.net/omnivus/assets/img/sidebar/blog-about.png"
                  alt="Rosalina D. Williamson"
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
                <h3 className="text-lg font-semibold text-dark mb-1">Rosalina D. Williamson</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex justify-center gap-3 text-blue-600">
                  <a href="#" className="hover:text-blue-800 transition"><Facebook className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-800 transition"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-800 transition"><Linkedin className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-800 transition"><Instagram className="w-4 h-4" /></a>
                </div>
              </div>
            </div>


            {/* Search Objects Widget */}
            <div className="rounded-xl border border-gray-200 p-4 shadow-sm">
              <h4 className="text-primary text-sm font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 inline-block"></span> Search Objects
              </h4>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search your keyword..."
                  className="w-full px-3 py-2 text-sm focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 transition">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>


            {/* Popular Feeds Widget */}
            <div className="mt-8 rounded-xl border border-gray-200 p-4 shadow-sm">
              <h4 className="text-primary text-sm font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 inline-block"></span> Popular Feeds
              </h4>

              {/* Feed Item */}
              {popularFeeds.map((feed, i) => (
                <div key={i} className="flex items-center gap-3 mb-4 last:mb-0">
                  <img
                    src={feed.img}
                    alt="Popular Feed"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium leading-snug text-gray-800 hover:text-blue-600 cursor-pointer">
                      {feed.title}
                    </p>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> 24th March 2019
                    </div>
                  </div>
                </div>
              ))}
            </div>


            {/* Categories Widget */}
            <div className="mt-8 rounded-xl border border-gray-200 p-4 shadow-sm">
              <h4 className="text-primary text-sm font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 inline-block"></span> Categories
              </h4>

              {categories.map((category, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-4 py-2 mb-2 bg-slate-900 text-white rounded-md cursor-pointer transition"
                >
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-xs bg-white text-slate-900 px-2 py-0.5 rounded-sm font-semibold">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>


            {/* Never Miss News */}
            <div className="mt-8 border border-gray-200 p-4 rounded-xl shadow-sm">
              <h4 className="text-primary text-sm font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 inline-block"></span> Never Miss News
              </h4>

              <div className="flex space-x-3">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-blue-600 transition"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Twitter Feeds */}
            <div className="border border-gray-200 p-4 rounded-xl shadow-sm mt-8">
              <h4 className="text-primary text-sm font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 inline-block"></span> Twitter Feeds
              </h4>

              <div className="space-y-4">
                {tweets.map((tweet, idx) => (
                  <div key={idx} className="text-sm text-gray-600 border-b pb-3 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-2">
                      <FontAwesomeIcon icon={faTwitter} className="text-blue-500 mt-1" />
                      <div>
                        <p className="leading-snug">
                          <a href={tweet.link} className="text-blue-600 hover:underline">
                            {tweet.text}
                          </a>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{tweet.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram Feeds */}
            <div className="border border-gray-200 p-4 rounded-xl shadow-sm mt-8">
              <h4 className="text-primary text-sm font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 inline-block"></span> Instagram Feeds
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                    "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-1.jpg",
                    "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-2.jpg",
                    "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-3.jpg",
                    "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-4.jpg",
                    "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-5.jpg",
                    "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-6.jpg",
                    "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-7.jpg",
                    "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-8.jpg",
                    "https://html.webtend.net/omnivus/assets/img/sidebar/instagram-9.jpg",
                  ].map((img, idx) => (
                  <a key={idx} href={img} target="_blank" rel="noopener noreferrer">
                    <img
                      src={img}
                      alt={`Instagram ${idx + 1}`}
                      className="w-full h-20 object-cover rounded-md hover:opacity-80 transition duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="border border-gray-200 p-6 bg-white w-fit">
              <div className="flex items-center mb-4">
                <span className="inline-block w-5 h-1 bg-blue-800 rounded-sm mr-2"></span>
                <h2 className="text-xl font-bold text-gray-900">Popular Tags</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-gray-700 text-sm font-medium rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            
          </aside>

        </div>
        {/* Footer Section */}
      <footer
      className="text-white bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://html.webtend.net/omnivus/assets/img/footer-bg.jpg')",
      }}
    >
      {/* Blue-tinted overlay */}
      <div className="bg-[#0a2540]/80">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          {/* OmniVus Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">OmniVus.</h2>
            <p className="mb-4 text-gray-300 max-w-md">
              The web has changed a lot since Vitaly posted his first article back in
              2006. The team at Smashing has changed too, as have the things that we
              bring to our community—conferences, books, and our membership added to
              the online magazine.
            </p>
            <p className="text-gray-300">
              One thing that hasn’t changed is that we’re a small team — with most of
              us not working
            </p>
          </div>

          {/* Pages Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Pages</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 cursor-pointer"><Link to='/'>Home</Link></li>
              <li className="hover:text-blue-400 cursor-pointer"><Link to = '/services'>Services</Link></li>
              <li className="hover:text-blue-400 cursor-pointer">About</li>
              <li className="hover:text-blue-400 cursor-pointer">Career</li>
              <li className="hover:text-blue-400 cursor-pointer">Refund</li>
              <li className="hover:text-blue-400 cursor-pointer">Terms</li>
              <li className="hover:text-blue-400 cursor-pointer">Details</li>
              <li className="hover:text-blue-400 cursor-pointer">Contact</li>
              <li className="hover:text-blue-400 cursor-pointer">Business</li>
              <li className="hover:text-blue-400 cursor-pointer">Affiliate</li>
            </ul>
          </div>

          {/* Working Hours Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Working Hours</h2>
            <p className="mb-2 text-gray-300">Monday - Friday: 7:00 - 17:00</p>
            <p className="mb-2 text-gray-300">Saturday: 7:00 - 12:00</p>
            <p className="mb-4 text-gray-300">Sunday and holidays: 8:00 - 10:00</p>
            <p className="text-blue-400">
              <span className="text-white">For more than 30 years,</span> IT Service has
              been a reliable partner in the field of logistics and cargo forwarding.
              <br />
              <a href="#" className="underline hover:text-blue-500">› Discover More</a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center py-6 border-t border-white border-opacity-20 text-gray-400">
          <p>Copyright By@ WebTrend - 2021</p>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute bottom-6 right-6 space-y-2">
        <div className="w-5 h-5 bg-cyan-300 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-700 rounded-full"></div>
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

      

    // </section>
  );
};

export default Blog;
