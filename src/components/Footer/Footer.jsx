import { Briefcase, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "/assets/logo.png";
import { logoBrand } from "../../data/navLinks";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        bg-gray-50 text-gray-600
        dark:bg-gray-900 dark:text-gray-400
        border-t border-gray-200 dark:border-gray-700
        mt-20
      "
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container">

        {/* Top */}
        <div className="
          flex flex-col items-center gap-6 py-10
          md:flex-row sm:justify-between md:items-center
        ">

          {/* Brand */}
          <Link
            to="/"
            aria-label="Go to homepage"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
          >
            <img
              src={logo}
              alt="Food Explorer logo"
              className="w-16"
              width="64"
              height="20"
              loading="lazy"
            />
            <span className="
              font-bold text-lg lg:text-xl brand-font
              text-gray-900 dark:text-white
              hover:text-orange-500
              transition-colors
            ">
              {logoBrand}
            </span>
          </Link>

          {/* Description */}
          <p className="text-sm text-center sm:text-left max-w-sm leading-relaxed">
            Explore delicious meals from around the world with a modern and easy-to-use food app.
          </p>


          {/* Social Links */}
          <nav aria-label="Footer social links">
            <p className="text-center pb-2 text-sm font-medium">
              Follow me on
            </p>

            <ul className="flex gap-6 justify-center sm:justify-start">
              <li>
                <a
                  href="https://portfolio-mahm0ud.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my Portfolio"
                  title="Portfolio"
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  <Briefcase className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mahmood-mohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  title="GitHub"
                  className="
                    hover:text-gray-900 dark:hover:text-white
                    hover:scale-110
                    transition
                  "
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M9 22v-3q0-2 1-3A7 6.5 0 0 1 5 5Q4 3 5 1q3 0 4 2q3.5-1 7 0q1-2 4-2q1 2 0 4a7 6.5 0 0 1-5 11q1 1 1 3v3m-7-3c-4 1-4-2-7-3" /></svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/mahmoud-mo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  title="LinkedIn"
                  className="
                    hover:text-blue-600
                    hover:scale-110
                    transition
                  "
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="2" /><path d="M2 9h4v12H2Zm20 12h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 12 0Z" /></svg>
                </a>
              </li>

              <li>
                <a
                  href="mailto:firstyear265@gmail.com"
                  aria-label="Send email"
                  title="Email"
                  className="
                    hover:text-green-600
                    hover:scale-110
                    transition
                  "
                >
                  <Mail className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </nav>

        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Bottom */}
        <div className="pt-6 text-center text-sm">
          <p>
            © 2026{" "}
            <a
              href="https://portfolio-mahm0ud.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Mahmoud's Portfolio"
              title="Mahmoud's Portfolio"
              className="
              font-medium
              text-gray-900 dark:text-white
              hover:text-orange-500
              dark:hover:text-orange-400
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-orange-400 rounded
            ">
              Mahmoud Mohamed
            </a>
            . All rights reserved.
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
