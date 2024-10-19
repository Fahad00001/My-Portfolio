const Footer = () => {
    return (
      <>
        <div className="py-5 border bg-gray-100 flex flex-col lg:flex-row justify-between items-center lg:px-32 space-y-4 lg:space-y-0">
          {/* Footer Text */}
          <div className="text-center lg:text-left">
            <p>
              &copy; 2023 Fahad iqbal <span>All Rights Reserved</span>
            </p>
          </div>
  
          {/* Footer Links */}
          <div className="space-x-5 text-center">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/licensing" className="hover:underline">
              Licensing
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  