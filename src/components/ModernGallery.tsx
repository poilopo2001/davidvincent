'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/image/WhatsApp Image 2025-08-13 at 23.31.52.jpeg',
    alt: 'David Vincent - Studio Sessions',
    title: 'Studio Sessions',
    subtitle: 'Été 2024'
  },
  {
    src: '/image/WhatsApp Image 2025-08-13 at 23.31.52 (1).jpeg',
    alt: 'David Vincent - Portrait',
    title: 'Portrait Rock',
    subtitle: 'Provence'
  },
  {
    src: '/image/WhatsApp Image 2025-08-13 at 23.31.53.jpeg',
    alt: 'David Vincent - Live',
    title: 'Live Show',
    subtitle: 'Concert'
  },
  {
    src: '/image/WhatsApp Image 2025-08-13 at 23.31.52 (2).jpeg',
    alt: 'David Vincent - Backstage',
    title: 'Backstage',
    subtitle: 'Tour 2024'
  },
  {
    src: '/image/WhatsApp Image 2025-08-13 at 23.31.53 (1).jpeg',
    alt: 'David Vincent - Rock Attitude',
    title: 'Rock Attitude',
    subtitle: 'Shooting'
  }
];

export default function ModernGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [lightboxOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {/* Modern Grid Gallery */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <Image 
              src={image.src} 
              alt={image.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="gallery-overlay">
              <div className="gallery-title">{image.title}</div>
              <div className="gallery-subtitle">{image.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox active" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={800}
              height={600}
              className="object-contain w-full h-full"
            />
            <button
              className="lightbox-nav lightbox-prev"
              onClick={prevImage}
            >
              ❮
            </button>
            <button
              className="lightbox-nav lightbox-next"
              onClick={nextImage}
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </>
  );
}