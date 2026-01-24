import { Github, Linkedin, Mail } from "lucide-react";
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
                  <Github className="w-6 h-6" />
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
                  <Linkedin className="w-6 h-6" />
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
        <div className="py-6 text-center text-sm">
          <p>
            © 2026{" "}
            <span className="
              font-medium
              text-gray-900 dark:text-white
            ">
              Mahmoud Mohamed
            </span>
            . All rights reserved.
          </p>
        </div>

      </div>
    </motion.footer>
  );
}
