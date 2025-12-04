import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full py-6 border-t text-center text-sm text-neutral-500 flex flex-col items-center gap-3 bg-neutral-50 ">
      <p>&copy; {new Date().getFullYear()} Quiz Wise. All rights reserved.</p>

      
    </footer>
  );
}

export default Footer;
