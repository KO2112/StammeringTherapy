// src/app/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
  
            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-1">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="text-gray-300 hover:underline">Home</a>
                </li>
                <li>
                  <a href="/services" className="text-gray-300 hover:underline">Speech Therapy Services</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:underline">About Stammering Therapy</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:underline">Contact Us</a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold mb-1">Get in Touch</h4>
              <p className="text-gray-300 leading-tight">Phone: +44 7419208820</p>
              <p className="text-gray-300 leading-tight">
                Email: <a href="mailto:contact@stammeringtherapy.com" className="hover:underline">contact@stammeringtherapy.com</a>
              </p>
            </div>
  
            {/* SEO Text (Using keywords related to speech therapy) */}
            <div>
              <h4 className="text-base font-semibold mb-1">Stammering & Speech Therapy</h4>
              <p className="text-gray-300 leading-tight">
                Providing expert speech therapy for stammering, fluency control, and communication skills improvement. Tailored stuttering treatment programs for all ages.
              </p>
            </div>
  
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-4 border-t border-gray-700 pt-2 text-center text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Stammering Therapy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  