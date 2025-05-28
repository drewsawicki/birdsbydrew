'use client';

import React from 'react';
import { GalleryImage } from '@/models/gallery';
import galleryData from '../../db/gallery.json';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(galleryData.length / imagesPerPage);
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop(); 
  };


  const paginatedImages = galleryData.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

    return (
      <div className='mt-8'>
        <div className="grid rounded-sm grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-8 pr-8 justify-items-center">
        {(paginatedImages as GalleryImage[]).map((image) => (
          <div key={image.id} className='p-4 curser-pointer bg-platinum' onClick={() => {setActiveImage(image); setImageLoaded(false)}}>
            <div className="w-full relative overflow-hidden bg-black text-white font-mono group">
                {/* Image wrapper with hover outline */}
                <div className="relative">
                  {/* Light green focus overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-full h-full border-3 border-spring shadow-[0_0_20px_5px_rgba(144,255,144,0.4)]"></div>
                  </div>

                  <div className="relative" style={{ aspectRatio: '4/3', cursor: 'pointer' }} >
                  {/* Click-blocking overlay */}
                    <div className="absolute inset-0 z-10" onContextMenu={(e) => e.preventDefault()}></div>

                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover relative z-0 select-none pointer-events-none"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Info Section */}
                <div className="px-2 py-1 bg-black border-t border-gray-700 sm:text-[12px] text-[10px] leading-tight font-mono relative z-10">
                  <div className="grid grid-cols-4">
                    <span>f{image.fstop}</span>
                    <span className="text-start" style={{ transform: 'translateX(-10px)'}}>ISO {image.iso}</span>
                    <span className="text-right">1/{image.speed}</span>
                    <span className="col-span-1 text-right text-spring">RAW L</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>
                      IMG_{image.id}.{image.body === 'N' ? 'NEF' : 'CR2'}
                    </span>
                    <div className="flex gap-4">
                      <span>{image.date}</span>
                      <span>{image.time}</span>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        
            ))}
          </div>
        <div className="flex justify-center items-end gap-1 font-mono text-[24px] text-charcoal mt-10 pb-24 sm:pb-6">
            {/* Back button */}
            <button
              className={`text-bold ${currentPage === 0 ? 'text-charcoal' : 'cursor-pointer hover:text-charcoal'}`}
              onClick={() => currentPage > 0 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              -
            </button>

            {Array.from({ length: totalPages }, (_, page) => (
              <React.Fragment key={page}>
                <div className="relative flex flex-col items-center">
                  {currentPage === page && (
                    <div className="absolute -top-5 text-charcoal">▼</div>
                  )}
                  <button
                    className={`w-5 text-center transition ${
                      currentPage === page ? 'text-charcoal font-bold' : 'cursor-pointer text-gray-500 hover:text-charcoal'
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                </div>

                {page !== totalPages - 1 && <span className="text-gray-500">..</span>}
              </React.Fragment>
            ))}

            <button
              className={`text-bold ${currentPage === totalPages - 1 ? 'text-charcoal' : 'cursor-pointer hover:text-charcoal'}`}
              onClick={() => currentPage < totalPages - 1 && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
            >
              +
            </button>
          </div>
          <AnimatePresence>
            {activeImage && (
              <motion.div
                className="fixed inset-0 bg-black/88 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImage(null)}
              >
                <motion.div
                  className="relative inline-block max-w-[90vw] sm:max-w-[80vw] sm:max-h-[85vh]"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full max-w-full max-h-[85vh] border border-spring shadow-[0_0_10px_2px_rgba(0,255,136,0.4),0_0_20px_6px_rgba(0,255,136,0.2)] bg-black">
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60">
                        <div className="w-10 h-10 border-3 border-spring border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}

                    <img
                      src={activeImage.srcl}
                      alt={activeImage.alt}
                      className={`w-full max-w-full max-h-[84vh] object-contain block transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      draggable={false}
                      onLoad={() => setImageLoaded(true)}
                    />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <span className="text-gray text-l sm:text-2xl font-semibold tracking-widest opacity-15 select-none" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
                        © Drew Sawicki
                      </span>
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 tracking-widest text-gray text-l sm:text-2xl font-semibold opacity-25 pointer-events-none select-none">
                        © Drew Sawicki
                      </div>
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 tracking-widest text-gray text-l sm:text-2xl font-semibold opacity-25 pointer-events-none select-none">
                        © Drew Sawicki
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
      );
      
}