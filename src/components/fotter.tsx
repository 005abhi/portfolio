import { FaFilePdf, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3E4F24] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">ABHINANDAN</h2>
          <p className="text-sm text-gray-300">Full Stack Developer</p>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/005abhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinandan-p-2a217b286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://drive.google.com/file/d/1-DhCGtIllF_nprZUHqOLgieCQGp8CHqH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFilePdf className="text-xl" />
          </a>
        </div>
        <p className="text-xs text-gray-100 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Abhi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
