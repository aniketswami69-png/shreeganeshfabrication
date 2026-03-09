import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] border-t border-[#34495E]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center p-1">
                <img src="/logo.png" alt="Shree Ganesh Fabrication" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-white font-bold text-xl uppercase tracking-tighter" style={{ fontFamily: 'Barlow Condensed' }}>Shree Ganesh</div>
                <div className="text-[#F39C12] text-xs uppercase tracking-widest">Fabrication</div>
              </div>
            </div>
            <p className="text-[#BDC3C7] text-sm leading-relaxed">
              Precision in Metal, Excellence in Fabrication. Your trusted partner for industrial and custom metal work.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6" style={{ fontFamily: 'Barlow Condensed' }}>Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+919226281112" className="flex items-start space-x-3 text-[#BDC3C7] hover:text-[#F39C12] transition-colors duration-300">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>+91 92262 81112</div>
                  <div>+91 99709 49535</div>
                </div>
              </a>
              <a href="mailto:shreeganeshfabrication52@gmail.com" className="flex items-start space-x-3 text-[#BDC3C7] hover:text-[#F39C12] transition-colors duration-300">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm break-all">shreeganeshfabrication52@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-[#BDC3C7]">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">FQVQ+M2 Pune, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6" style={{ fontFamily: 'Barlow Condensed' }}>Business Hours</h3>
            <div className="space-y-3 text-[#BDC3C7] text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Monday - Wednesday</div>
                  <div>10:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="pl-8">
                <div className="font-semibold text-white">Thursday</div>
                <div className="text-slate-500">Closed</div>
              </div>
              <div className="pl-8">
                <div className="font-semibold text-white">Friday - Sunday</div>
                <div>10:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#34495E]">
          <div className="text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Shree Ganesh Fabrication. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
