import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full p-4 flex justify-center items-center gap-6 bg-neutral-800 text-white rounded-t-2xl shadow-lg mt-10">
      <a
        href="https://www.facebook.com/brassabrod"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <FaFacebook size={32} className="hover:text-blue-500 transition" />
      </a>
      <a
        href="https://www.instagram.com/brassabrod?igsh=MWd0OGpycjlvOHg5YQ%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram size={32} className="hover:text-pink-500 transition" />
      </a>
      <a
        href="https://www.youtube.com/@brassabrod"
        target="_blank"
        rel="noopener noreferrer"
        title="YouTube"
      >
        <FaYoutube size={32} className="hover:text-red-500 transition" />
      </a>
      <span className="ml-4 text-sm">© 2025 Brassabröd</span>
    </footer>
  );
}
