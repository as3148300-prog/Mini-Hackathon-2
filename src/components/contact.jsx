import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Sparkles,
  Mail,
  MapPin,
  Clock3,
  Send,
  GitFork,
  AtSign,
  MessageCircleHeart,
  BadgeCheck,
  PencilRuler,
  HeartHandshake,
  Copy,
  CheckCheck,
  Stars,
} from "lucide-react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const [copied, setCopied] = useState(false);
  const maxChars = 300;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message" && value.length > maxChars) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("yashvardhan4646@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log("Copy failed:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ loading: false, success: "", error: "" });

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return setStatus({
        loading: false,
        success: "",
        error: "Fill all fields first bro 😭",
      });
    }

    if (!validateEmail(formData.email)) {
      return setStatus({
        loading: false,
        success: "",
        error: "Put a valid email. Not whatever that was.",
      });
    }

    try {
      setStatus({ loading: true, success: "", error: "" });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Yashvardhan",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus({
        loading: false,
        success: "Message sent successfully 💌",
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: "",
        error: "Message failed to send. Tech drama happened.",
      });
    }
  };

  return (
    <section className="cmain" id="contact">
      {/* blobs */}
      <div className="cblob cb1"></div>
      <div className="cblob cb2"></div>
      <div className="cblob cb3"></div>

      {/* floating cute bits */}
      <div className="floaty floaty-1">✦</div>
      <div className="floaty floaty-2">♡</div>
      <div className="floaty floaty-3">✿</div>
      <div className="floaty floaty-4">☁</div>

      <div className="contact-head">
        <span className="contact-tag">Reach Out & Disturb My Peace</span>
        <h2>
          <Sparkles size={24} /> Contact Me
        </h2>
        {/* <p>
          Got a project idea, collaboration plan, random appreciation, or just want to say hi?
          Drop a message here and I’ll pretend I’m not excited.
        </p> */}
      </div>

      <div className="contact-wrap">
        {/* LEFT */}
        <div className="contact-left">
          <div className="contact-card intro-card">
            <span className="mini-badge">
              <BadgeCheck size={16} />
              Available for cool stuff
            </span>

            <h3>Let’s build something pretty.</h3>
            <p>
              I enjoy making aesthetic frontend experiences, clean UI, and
              projects that feel smooth instead of emotionally offensive.
            </p>

            <div className="info-pills">
              <div className="info-pill">
                <MapPin size={16} />
                <span>Bhopal, MadhyaPradesh</span>
              </div>
              <div className="info-pill">
                <Clock3 size={16} />
                <span>Usually replies within 1–2 days</span>
              </div>
              <div className="info-pill">
                <Stars size={16} />
                <span>Open for freelance / collabs</span>
              </div>
            </div>
          </div>

          <div className="contact-grid-mini">
            <div className="mini-contact-box">
              <PencilRuler size={22} />
              <h4>UI / Frontend</h4>
              <p>
                Need aesthetic layouts, polished cards, sections, and cool
                interactions?
              </p>
            </div>

            <div className="mini-contact-box">
              <HeartHandshake size={22} />
              <h4>Collabs</h4>
              <p>
                Open to coding projects, student collabs, and fun creative
                builds.
              </p>
            </div>

            <div className="mini-contact-box">
              <GitFork size={22} />
              <h4>Dev Stuff</h4>
              <p>
                React, CSS, Firebase, frontend bugs, and all that cute
                suffering.
              </p>
            </div>

            <div className="mini-contact-box">
              <MessageCircleHeart size={22} />
              <h4>Just Saying Hi</h4>
              <p>
                Even if you’re not here for work, you can still drop a message.
              </p>
            </div>
          </div>

          <div className="findme-wrap">
            <h2>Find me elsewhere</h2>
            <p className="subtext">
              In case forms feel too formal and terrifying.
            </p>

            <div className="findme-grid">
              <a
                href="https://github.com/as3148300-prog"
                target="_blank"
                rel="noreferrer"
                className="find-card github"
              >
                <GitFork />
                <span>GitHub</span>
              </a>

              <a
                href="hhttps://www.instagram.com/igsasukeexx/"
                target="_blank"
                rel="noreferrer"
                className="find-card instagram"
              >
                <AtSign />
                <span>@igsasukeexx</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        {/* <div className="contact-right">
          <div className="contact-form-card">
            <div className="tiny-sticker">💌</div>

            <h3>Send a message</h3>
            <p>Fill this tiny digital love letter and launch it into my inbox.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group textarea-wrap">
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                />
                <span className="char-count">
                  {formData.message.length}/{maxChars}
                </span>
              </div>

              {status.error && <p className="form-msg error">{status.error}</p>}
              {status.success && <p className="form-msg success">{status.success}</p>}

              <button type="submit" disabled={status.loading}>
                {status.loading ? (
                  <>
                    <span className="loader"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
