import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black">
        <div className="bg-black h-20 flex justify-between items-center mx-64 text-white">
          <div>
            <div className="text-lg">
              <Link to={`/`}>
                <span className="text-white">dev</span>
                <span className="text-green-400	bold underline">Lingua</span>
              </Link>
            </div>
            <div>&copy; 2023 Susheel Thapa. All rights reserved.</div>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="https://github.com/SusheelThapa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/susheelthapa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/_susheel_thapa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://linktr.ee/susheelthapa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
            >
              <SiLinktree size={20} />
            </a>
            <a
              href="https://dev.to/susheelthapa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-2"
            >
              <FaDev size={20} />
            </a>
          </div>
        </div>
    </div>
  );
};

export default Footer;
