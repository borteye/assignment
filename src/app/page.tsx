import Blog from "./blog/blog";
import About from "./components/about";
import ContactUs from "./components/contact-us/contact-us";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ContactUs />
      <Blog />
    </div>
  );
}
