import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="py-6"
      style={{ background: "var(--bg-dark)", color: "#fff" }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold tracking-wide">ABHINANDAN</h2>
          <p className="text-sm mt-1" style={{ color: "oklch(72% 0.01 240)" }}>
            Software Engineer
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/005abhi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "oklch(62% 0.01 240)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--ink-gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "oklch(62% 0.01 240)")
              }
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinandan-p-2a217b286/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "oklch(62% 0.01 240)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--ink-gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "oklch(62% 0.01 240)")
              }
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://drive.google.com/file/d/1UReue0BKMlP2axYykAQkBh16fyuHjUlY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "oklch(62% 0.01 240)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--ink-gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "oklch(62% 0.01 240)")
              }
            >
              <FaFilePdf className="text-xl" />
            </a>
          </div>
          <div
            className="mt-2 text-sm"
            style={{ color: "oklch(72% 0.01 240)" }}
          >
            abhinandanp1003@gmail.com | +91-6363298202
          </div>
        </div>

        <p
          className="text-xs mt-4 md:mt-0"
          style={{ color: "oklch(62% 0.01 240)" }}
        >
          &copy; {new Date().getFullYear()} Abhi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
