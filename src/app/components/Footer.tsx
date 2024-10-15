import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 px-4 md:px-20">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Logo and Contact Form */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start p-4 md:p-0">
            <Image
              src="/cvs_logo.png" // Ensure the path to the logo is correct
              alt="Code Vibe Studios Logo"
              height={40} // Adjust height as needed
              width={120} // Adjust width as needed
            />
          </div>

          {/* Contact Form */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <label htmlFor="email-input" className="sr-only">Enter your email</label>
            <input 
              type="email"
              id="email-input"
              placeholder="Enter your email"
              className="w-full sm:w-auto border border-gray-300 rounded-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
              aria-label="Email input"
            />

            <Link href="/contactUs">
              <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 transition duration-300 ease-in-out w-full sm:w-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Navigation and Social Media Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-8">
          {/* Navigation Links */}
          <div className="flex justify-center md:justify-start flex-wrap space-x-8 text-lg text-black">
            <Link href="/" className="hover:text-purple-500">Home</Link>
            <Link href="/services_" className="hover:text-purple-500">Services</Link>
            <Link href="/about" className="hover:text-purple-500">About Us</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram">
              <Image src="/brand-instagram.png" alt="Instagram logo" width={24} height={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook">
              <Image src="/brand-facebook.png" alt="Facebook logo" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/company/code-vibe-studios/" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn">
              <Image src="/brand-linkedin.png" alt="LinkedIn logo" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-400 mt-6">
          <Link href="#privacy" className="hover:text-purple-500">Privacy Policy</Link>
          <Link href="#terms" className="hover:text-purple-500">Terms of Service</Link>
          <Link href="#cookies" className="hover:text-purple-500">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
}
