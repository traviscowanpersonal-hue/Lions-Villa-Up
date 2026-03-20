import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { src: 'https://images.unsplash.com/photo-1700807310372-8c22762add79?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', alt: 'Tropical palm-lined entrance' },
  { src: 'https://images.pexels.com/photos/4455836/pexels-photo-4455836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Comfortable guest room' },
  { src: 'https://images.unsplash.com/photo-1760067537723-bb12d2674e15?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', alt: 'Deluxe room setup' },
  { src: 'https://images.pexels.com/photos/6466490/pexels-photo-6466490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Room service and cleanliness' },
  { src: 'https://images.pexels.com/photos/1268862/pexels-photo-1268862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', alt: 'Property entrance' },
  { src: 'https://images.unsplash.com/photo-1760067537116-de1f76fe8f95?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', alt: 'Suite-style room' },
];

export const GallerySection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-20 sm:py-28" style={{ background: 'hsl(28 20% 5%)' }}>
      <div className="section-container">
        <SectionHeader
          eyebrow="Photo Gallery"
          title="See Lion's Villa"
          subtitle="A glimpse of your stay in May Pen, Clarendon."
          center
        />

        <div
          data-testid="gallery-grid"
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="gallery-item rounded-2xl border cursor-pointer"
              style={{ aspectRatio: i === 0 || i === 3 ? '4/3' : '1/1', borderColor: 'hsl(35 25% 18%)' }}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(img)}
            >
              <div className="relative w-full h-full">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: 'rgba(11,10,8,0.5)' }}
                >
                  <ZoomIn size={28} style={{ color: '#D4A017' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.9)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full rounded-2xl object-contain max-h-[80vh]"
              />
              <p className="text-center mt-3 text-sm" style={{ color: 'hsl(40 10% 65%)' }}>{selected.alt}</p>
              <button
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center border"
                style={{ background: 'hsl(28 28% 6%)', borderColor: 'hsl(35 25% 18%)', color: '#D4A017' }}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
