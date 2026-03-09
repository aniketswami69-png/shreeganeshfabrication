import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Industrial', 'Residential', 'Custom'];

  // Gallery items with actual project images
  const galleryItems = [
    {
      id: 1,
      category: 'Residential',
      title: 'Premium LED-Lit Staircase',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/l2qbys7o_WhatsApp%20Image%202026-03-09%20at%204.33.04%20PM.jpeg',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 2,
      category: 'Industrial',
      title: 'Precision Fabrication Process',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/baojk05g_WhatsApp%20Image%202026-03-09%20at%204.38.58%20PM%20%281%29.jpeg',
      span: '',
    },
    {
      id: 3,
      category: 'Residential',
      title: 'Stainless Steel Glass Panel Staircase',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/xpwf291m_WhatsApp%20Image%202026-03-09%20at%204.33.05%20PM%20%281%29.jpeg',
      span: '',
    },
    {
      id: 4,
      category: 'Industrial',
      title: 'Professional Installation Team',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/g9srxd3f_WhatsApp%20Image%202026-03-09%20at%204.38.58%20PM.jpeg',
      span: 'md:col-span-2',
    },
    {
      id: 5,
      category: 'Residential',
      title: 'Glass Panel Installation',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/omjclovr_WhatsApp%20Image%202026-03-09%20at%204.38.57%20PM.jpeg',
      span: '',
    },
    {
      id: 6,
      category: 'Residential',
      title: 'Elegant Glass Railing Staircase',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/795ztpa6_WhatsApp%20Image%202026-03-09%20at%204.33.04%20PM%20%282%29.jpeg',
      span: '',
    },
    {
      id: 7,
      category: 'Custom',
      title: 'Industrial Spiral Staircase',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/259jb0q1_WhatsApp%20Image%202026-03-09%20at%204.33.05%20PM.jpeg',
      span: '',
    },
    {
      id: 8,
      category: 'Industrial',
      title: 'Heavy Structural Steel Framework',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/18pifo0e_20260219_180904.jpg.jpeg',
      span: 'md:col-span-2',
    },
    {
      id: 9,
      category: 'Residential',
      title: 'Modern Glass Safety Door',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/08rgw6jv_WhatsApp%20Image%202026-03-09%20at%204.28.14%20PM.jpeg',
      span: '',
    },
    {
      id: 10,
      category: 'Custom',
      title: 'Art Deco Decorative Safety Door',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/gyqesj5o_WhatsApp%20Image%202026-03-09%20at%204.28.13%20PM%20%282%29.jpeg',
      span: '',
    },
    {
      id: 11,
      category: 'Industrial',
      title: 'Commercial Canopy Structure',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/pduz681l_20260223_112847.jpg.jpeg',
      span: '',
    },
    {
      id: 12,
      category: 'Residential',
      title: 'White Louver Security Gate',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/nwow995q_WhatsApp%20Image%202026-03-09%20at%204.28.14%20PM%20%281%29.jpeg',
      span: '',
    },
    {
      id: 13,
      category: 'Residential',
      title: 'Decorative Balcony Railing',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/jky8ovr4_20260104_134936.jpg.jpeg',
      span: '',
    },
    {
      id: 14,
      category: 'Residential',
      title: 'Geometric Pattern Designer Gate',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/7lumc0kz_1000030470.jpg.jpeg',
      span: 'md:col-span-2',
    },
    {
      id: 15,
      category: 'Industrial',
      title: 'Industrial Building Framework',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/etvajshw_1000003016.jpg.jpeg',
      span: '',
    },
    {
      id: 16,
      category: 'Residential',
      title: 'Modern Window Security Grill',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/vn070fd3_20260204_140409.jpg.jpeg',
      span: '',
    },
    {
      id: 17,
      category: 'Custom',
      title: 'Greek Key Border Designer Gate',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/9okqb749_1000030466.jpg.jpeg',
      span: '',
    },
    {
      id: 18,
      category: 'Residential',
      title: 'Contemporary Window Grill Design',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/gtxgkb4h_20260204_140414.jpg.jpeg',
      span: '',
    },
    {
      id: 19,
      category: 'Residential',
      title: 'Classic Arched Scrollwork Gate',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/6lm19r9r_1000030472.jpg.jpeg',
      span: '',
    },
    {
      id: 20,
      category: 'Custom',
      title: 'Ornate Vintage Style Gate',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/flncaqn4_1000030475.jpg.jpeg',
      span: '',
    },
    {
      id: 21,
      category: 'Residential',
      title: 'Ornate Balcony Railing',
      image: 'https://customer-assets.emergentagent.com/job_metal-works-pro-3/artifacts/uq0p8ipz_20260103_164034.jpg.jpeg',
      span: '',
    },
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-[#34495E] border-b border-[#34495E]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 border border-[#F39C12]/50 bg-[#F39C12]/10">
              <span className="text-[#F39C12] text-xs font-bold uppercase tracking-widest">Our Work</span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6"
              style={{ fontFamily: 'Barlow Condensed' }}
              data-testid="gallery-title"
            >
              Project Gallery
            </h1>
            <p className="text-lg text-[#BDC3C7] max-w-2xl mx-auto">
              Explore our portfolio of precision fabrication work across industrial, residential, and custom projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3" data-testid="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#F39C12] text-white border border-#E67E22'
                    : 'bg-transparent border border-[#4A5F7F] text-[#BDC3C7] hover:border-[#F39C12] hover:text-[#F39C12]'
                }`}
                style={{ fontFamily: 'Barlow Condensed' }}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]" data-testid="gallery-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden border border-[#34495E] hover:border-[#F39C12]/50 transition-all duration-300 cursor-pointer ${item.span}`}
                onClick={() => setSelectedImage(item)}
                data-testid={`gallery-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-[#2C3E50]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs text-[#F39C12] font-bold uppercase tracking-widest mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: 'Barlow Condensed' }}>
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-[#F39C12]/80 flex items-center justify-center border-2 border-white">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#BDC3C7] text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="gallery-lightbox"
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#F39C12] transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
            data-testid="lightbox-close-button"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto border-4 border-[#F39C12]/30"
            />
            <div className="mt-6 text-center">
              <div className="text-sm text-[#F39C12] font-bold uppercase tracking-widest mb-2">
                {selectedImage.category}
              </div>
              <h3 className="text-3xl font-bold text-white uppercase" style={{ fontFamily: 'Barlow Condensed' }}>
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
