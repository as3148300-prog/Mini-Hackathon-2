import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  ArrowUp,
  Sparkles,
  Copy,
  Check,
  
  ExternalLink,
} from "lucide-react";
import { GitFork, AtSign } from "lucide-react";
import "../styles/footer.css";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const magneticRefs = useRef([]);

  const email = "as3148300@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const buttons = magneticRefs.current;

    const handleMouseMove = (e, el) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    };

    const reset = (el) => {
      el.style.transform = `translate(0px, 0px)`;
    };

    buttons.forEach((btn) => {
      if (!btn) return;

      const move = (e) => handleMouseMove(e, btn);
      const leave = () => reset(btn);

      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);

      btn._move = move;
      btn._leave = leave;
    });

    return () => {
      buttons.forEach((btn) => {
        if (!btn) return;
        btn.removeEventListener("mousemove", btn._move);
        btn.removeEventListener("mouseleave", btn._leave);
      });
    };
  }, []);

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* CTA */}
        <div className="footer-cta glass-card">
          <div className="footer-cta-badge">
            <Sparkles size={14} />
            <span>Available for freelance work</span>
          </div>

          <h2>Let’s build something clean and memorable.</h2>

          <p>
            I create polished frontend experiences with smooth interactions and
            thoughtful design.
          </p>

          <div className="footer-cta-buttons">
            <a
              href="#contact"
              className="footer-btn primary magnetic"
              ref={(el) => (magneticRefs.current[0] = el)}
            >
              Hire Me <ArrowUpRight size={18} />
            </a>

            <a
              href="#projects"
              className="footer-btn secondary magnetic"
              ref={(el) => (magneticRefs.current[1] = el)}
            >
              See Projects <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Tech Strip */}
        <div className="tech-strip">
          <div className="tech-track">
            {[
              "React",
              "JavaScript",
              "CSS",
              "Tailwind",
              
              "Responsive Design",
              "UI/UX",
              "Animations",
              "Portfolio Builds",
              "Frontend Dev",
            ]
              .concat([
                "React",
                "JavaScript",
                "CSS",
                "Tailwind",
                
                "Responsive Design",
                "UI/UX",
                "Animations",
                "Portfolio Builds",
                "Frontend Dev",
              ])
              .map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="footer-grid">
          <div className="footer-brand glass-card">
            <h3>Areeb S.</h3>
            <p>
              Frontend Developer crafting minimal, smooth and user-focused web
              experiences.
            </p>

            <div className="footer-status">
              <span className="status-dot"></span>
              Open to opportunities
            </div>
          </div>

          <div className="footer-links glass-card">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact glass-card">
            <h4>Connect</h4>

            <div className="email-box">
              <div className="email-left">
                <Mail size={16} />
                <span>{email}</span>
              </div>

              <button onClick={copyEmail} className="copy-btn">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            <ul>
              <li>
                <a
                  href="https://github.com/as3148300-prog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitFork size={16} /> GitHub <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/igsasukeexx/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AtSign size={16} /> Instagram <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/areeb-sheikh-6111043b8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AtSign size={16} /> LinkedIn <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Areeb Sheikh. All rights reserved.</p>

          <p className="footer-credit">
            Crafted with code, motion & intent.
          </p>

          <button
            className="back-to-top magnetic"
            ref={(el) => (magneticRefs.current[2] = el)}
            onClick={scrollToTop}
          >
            <ArrowUp size={16} />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;