import { ArrowRight, Flame, Zap, Wrench, Shield, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const capabilities = [
    {
      icon: Flame,
      title: 'TIG/MIG Welding',
      description: 'High-precision welding for critical applications with flawless bead quality',
    },
    {
      icon: Zap,
      title: 'CNC Plasma Cutting',
      description: 'Computer-controlled plasma cutting for complex geometries and tight tolerances',
    },
    {
      icon: Wrench,
      title: 'Custom Assembly',
      description: 'Complete fabrication and assembly services for industrial and residential projects',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every weld inspected, every project delivered to specification',
    },
  ];

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '1000+', label: 'Projects Completed' },
    { value: '100%', label: 'Quality Guaranteed' },
    { value: '24/7', label: 'Support Available' },
  ];

  const features = [
    'Certified Welding Professionals',
    'State-of-the-Art Equipment',
    'On-Time Project Delivery',
    'Competitive Pricing',
    'Custom Design Solutions',
    'Material Sourcing Assistance',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1689960253762-7c761d1ddbd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxUSUclMjB3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMGNsb3NlJTIwdXAlMjBkYXJrfGVufDB8fHx8MTc3MzA0OTk2M3ww&ixlib=rb-4.1.0&q=85"
            alt="Industrial welding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/70 via-[#2C3E50]/60 to-[#2C3E50]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-block mb-6 px-6 py-2 border border-[#F39C12]/50 bg-[#F39C12]/10">
            <span className="text-[#F39C12] text-sm font-bold uppercase tracking-widest">Premium Metal Fabrication</span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white mb-8 text-glow-orange"
            style={{ fontFamily: 'Barlow Condensed' }}
            data-testid="hero-title"
          >
            Precision in Metal,<br />
            <span className="text-[#F39C12]">Excellence</span> in Fabrication
          </h1>
          <p className="text-xl md:text-2xl text-[#ECF0F1] mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Transforming raw metal into engineered solutions with unmatched precision and craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center space-x-2 bg-[#F39C12] hover:bg-[#E67E22] text-white px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 border border-#E67E22 hover:border-glow"
              data-testid="cta-request-quote"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center bg-transparent border border-[#4A5F7F] text-[#ECF0F1] hover:border-[#F39C12] hover:text-[#F39C12] px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300"
              data-testid="cta-view-gallery"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#4A5F7F] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#F39C12] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#34495E] border-y border-[#34495E]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-5xl md:text-6xl font-black text-[#F39C12] mb-2" style={{ fontFamily: 'Barlow Condensed' }}>
                  {stat.value}
                </div>
                <div className="text-[#BDC3C7] uppercase tracking-widest text-sm font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 border border-[#F39C12]/50 bg-[#F39C12]/10">
              <span className="text-[#F39C12] text-xs font-bold uppercase tracking-widest">Our Expertise</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
              style={{ fontFamily: 'Barlow Condensed' }}
              data-testid="capabilities-title"
            >
              Core Capabilities
            </h2>
            <p className="text-lg text-[#BDC3C7] max-w-2xl mx-auto">
              Industry-leading fabrication services backed by cutting-edge equipment and skilled craftsmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-[#34495E] border border-[#34495E] hover:border-[#F39C12]/50 transition-all duration-300 p-8 group"
                  data-testid={`capability-${index}`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#F39C12]/10 border border-[#F39C12]/30 flex items-center justify-center group-hover:bg-[#F39C12]/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-[#F39C12]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold uppercase text-white mb-3" style={{ fontFamily: 'Barlow Condensed' }}>
                        {capability.title}
                      </h3>
                      <p className="text-[#BDC3C7] leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-[#34495E]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 border border-[#F39C12]/50 bg-[#F39C12]/10">
                <span className="text-[#F39C12] text-xs font-bold uppercase tracking-widest">Why Choose Us</span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
                style={{ fontFamily: 'Barlow Condensed' }}
              >
                Built on Trust, Delivered with Precision
              </h2>
              <p className="text-lg text-[#BDC3C7] mb-8 leading-relaxed">
                With over 20 years of experience, we've established ourselves as Pune's premier metal fabrication specialists. Every project is executed with meticulous attention to detail.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F39C12] flex-shrink-0" />
                    <span className="text-[#ECF0F1] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square border-4 border-[#F39C12]/20 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1561536441-01351ded5ffd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxUSUclMjB3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMGNsb3NlJTIwdXAlMjBkYXJrfGVufDB8fHx8MTc3MzA0OTk2M3ww&ixlib=rb-4.1.0&q=85"
                  alt="Professional welder at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-[#F39C12] bg-[#2C3E50] flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-12 h-12 text-[#F39C12] mx-auto mb-2" />
                  <div className="text-2xl font-black text-white" style={{ fontFamily: 'Barlow Condensed' }}>ISO</div>
                  <div className="text-sm text-[#BDC3C7]">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#2C3E50] border-t border-[#34495E]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <h2
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6"
            style={{ fontFamily: 'Barlow Condensed' }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#BDC3C7] mb-12 max-w-2xl mx-auto">
            Get a detailed quote for your fabrication needs. Fast turnaround, competitive pricing.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center space-x-2 bg-[#F39C12] hover:bg-[#E67E22] text-white px-10 py-5 text-lg font-bold uppercase tracking-wider transition-all duration-300 border border-#E67E22 hover:border-glow"
            data-testid="footer-cta-quote"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
