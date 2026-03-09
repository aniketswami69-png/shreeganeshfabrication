import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-[#34495E] border-b border-[#34495E]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 border border-[#F39C12]/50 bg-[#F39C12]/10">
              <span className="text-[#F39C12] text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
              style={{ fontFamily: 'Barlow Condensed' }}
              data-testid="contact-title"
            >
              Contact Us
            </h1>
            <p className="text-lg text-[#BDC3C7] max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Reach out to discuss your fabrication needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="bg-[#34495E] border border-[#34495E] hover:border-[#F39C12]/50 transition-all duration-300 p-8 group" data-testid="contact-phone-card">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#F39C12]/10 border border-[#F39C12]/30 flex items-center justify-center group-hover:bg-[#F39C12]/20 transition-colors duration-300">
                      <Phone className="w-8 h-8 text-[#F39C12]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold uppercase text-white mb-3" style={{ fontFamily: 'Barlow Condensed' }}>
                      Call Us
                    </h3>
                    <p className="text-[#BDC3C7] mb-4">Available during business hours for immediate assistance</p>
                    <div className="space-y-2">
                      <a
                        href="tel:+919226281112"
                        className="block text-lg text-[#F39C12] hover:text-orange-400 font-semibold transition-colors duration-300"
                        data-testid="phone-number-1"
                      >
                        +91 92262 81112
                      </a>
                      <a
                        href="tel:+919970949535"
                        className="block text-lg text-[#F39C12] hover:text-orange-400 font-semibold transition-colors duration-300"
                        data-testid="phone-number-2"
                      >
                        +91 99709 49535
                      </a>
                    </div>
                    <button
                      onClick={() => window.location.href = 'tel:+919226281112'}
                      className="mt-6 bg-[#F39C12] hover:bg-[#E67E22] text-white px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 border border-#E67E22 text-sm"
                      data-testid="call-now-button"
                    >
                      Call Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-[#34495E] border border-[#34495E] hover:border-[#F39C12]/50 transition-all duration-300 p-8 group" data-testid="contact-email-card">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#F39C12]/10 border border-[#F39C12]/30 flex items-center justify-center group-hover:bg-[#F39C12]/20 transition-colors duration-300">
                      <Mail className="w-8 h-8 text-[#F39C12]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold uppercase text-white mb-3" style={{ fontFamily: 'Barlow Condensed' }}>
                      Email Us
                    </h3>
                    <p className="text-[#BDC3C7] mb-4">Send us your detailed requirements and we'll respond within 24 hours</p>
                    <a
                      href="mailto:shreeganeshfabrication52@gmail.com"
                      className="block text-[#F39C12] hover:text-orange-400 font-semibold transition-colors duration-300 break-all"
                      data-testid="email-address"
                    >
                      shreeganeshfabrication52@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-[#34495E] border border-[#34495E] hover:border-[#F39C12]/50 transition-all duration-300 p-8 group" data-testid="contact-location-card">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#F39C12]/10 border border-[#F39C12]/30 flex items-center justify-center group-hover:bg-[#F39C12]/20 transition-colors duration-300">
                      <MapPin className="w-8 h-8 text-[#F39C12]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold uppercase text-white mb-3" style={{ fontFamily: 'Barlow Condensed' }}>
                      Visit Our Shop
                    </h3>
                    <p className="text-[#BDC3C7] mb-4">Come see our facility and discuss your project in person</p>
                    <p className="text-[#ECF0F1] text-lg">
                      FQVQ+M2 Pune, Maharashtra
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-[#34495E] border border-[#34495E] hover:border-[#F39C12]/50 transition-all duration-300 p-8 group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#F39C12]/10 border border-[#F39C12]/30 flex items-center justify-center group-hover:bg-[#F39C12]/20 transition-colors duration-300">
                      <Clock className="w-8 h-8 text-[#F39C12]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold uppercase text-white mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-[#ECF0F1]">
                      <div className="flex justify-between">
                        <span className="font-semibold">Monday - Wednesday</span>
                        <span>10:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Thursday</span>
                        <span className="text-slate-500">Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Friday - Sunday</span>
                        <span>10:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="border-4 border-[#34495E] overflow-hidden" style={{ filter: 'grayscale(100%) contrast(1.2)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0265!2d73.8379!3d18.5194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzA5LjgiTiA3M8KwNTAnMTYuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Ganesh Fabrication Location"
                  data-testid="google-maps-embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#34495E] border-t border-[#34495E]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <MessageSquare className="w-16 h-16 text-[#F39C12] mx-auto mb-6" />
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: 'Barlow Condensed' }}
          >
            Need a Quick Quote?
          </h2>
          <p className="text-lg text-[#BDC3C7] mb-8">
            Fill out our online form and receive a detailed quote within 24 hours
          </p>
          <a
            href="/quote"
            className="inline-block bg-[#F39C12] hover:bg-[#E67E22] text-white px-10 py-5 text-lg font-bold uppercase tracking-wider transition-all duration-300 border border-#E67E22 hover:border-glow"
            data-testid="contact-cta-quote"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
