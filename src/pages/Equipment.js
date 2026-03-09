import { Cpu, Zap, Ruler, Gauge } from 'lucide-react';

const Equipment = () => {
  const equipment = [
    {
      category: 'Welding Equipment',
      icon: Zap,
      items: [
        {
          name: 'Professional Welding Machines',
          specs: ['TIG/MIG/MAG Welding', 'Multi-Process Capability', 'Industrial Grade', 'Digital Control'],
        },
      ],
    },
    {
      category: 'Cutting Equipment',
      icon: Cpu,
      items: [
        {
          name: 'CNC Plasma Cutting',
          specs: ['High-Precision Cutting', 'Computer Controlled', 'Multiple Material Support', 'ISO Quality Standards'],
        },
      ],
    },
    {
      category: 'Machining Equipment',
      icon: Ruler,
      items: [
        {
          name: 'Precision Machinery',
          specs: ['Engine Lathes', 'Milling Machines', 'Hydraulic Press Brake', 'CNC Capabilities'],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-[#34495E] border-b border-[#34495E]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 border border-[#F39C12]/50 bg-[#F39C12]/10">
              <span className="text-[#F39C12] text-xs font-bold uppercase tracking-widest">Technical Capacity</span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
              style={{ fontFamily: 'Barlow Condensed' }}
              data-testid="equipment-title"
            >
              Shop Equipment
            </h1>
            <p className="text-lg text-[#BDC3C7] max-w-2xl mx-auto">
              State-of-the-art machinery and precision tools that enable us to deliver exceptional quality on every project
            </p>
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-16">
            {equipment.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} data-testid={`equipment-category-${categoryIndex}`}>
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-[#F39C12]/10 border border-[#F39C12]/30 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#F39C12]" strokeWidth={1.5} />
                    </div>
                    <h2
                      className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white"
                      style={{ fontFamily: 'Barlow Condensed' }}
                    >
                      {category.category}
                    </h2>
                  </div>

                  {/* Equipment Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-[#34495E] border border-[#34495E] hover:border-[#F39C12]/50 transition-all duration-300 group"
                        data-testid={`equipment-item-${categoryIndex}-${itemIndex}`}
                      >
                        {/* Equipment Name */}
                        <div className="p-6 border-b border-[#34495E] bg-[#2C3E50]/30">
                          <h3
                            className="text-xl font-bold uppercase text-white group-hover:text-[#F39C12] transition-colors duration-300"
                            style={{ fontFamily: 'Barlow Condensed' }}
                          >
                            {item.name}
                          </h3>
                        </div>

                        {/* Specifications */}
                        <div className="p-6">
                          <div className="space-y-3">
                            {item.specs.map((spec, specIndex) => (
                              <div key={specIndex} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-[#F39C12] mt-2 flex-shrink-0"></div>
                                <span className="text-[#BDC3C7] text-sm leading-relaxed">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Banner */}
      <section className="py-16 bg-[#34495E] border-t border-[#34495E]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h2
              className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4"
              style={{ fontFamily: 'Barlow Condensed' }}
            >
              Professional Equipment & Technical Capacity
            </h2>
            <p className="text-base text-[#BDC3C7] max-w-2xl mx-auto">
              State-of-the-art machinery for precision fabrication, welding, and cutting services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
