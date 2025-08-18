import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '../../components_css/ProgrammeGallery.css';

import agdsm6 from "../../images/Agdsm/agdsm4.jpg"
import agdsm15 from "../../images/Agdsm/agdsm13.jpg"
import agdsm16 from "../../images/Agdsm/agdsm14.jpg"
import agdsm17 from "../../images/Agdsm/agdsm17.jpg"
import agdsm18 from "../../images/Agdsm/agdsm18.jpg"
import agdsm19 from "../../images/Agdsm/agdsm19.jpg"
import agdsm20 from "../../images/Agdsm/agdsm20.jpg"
import agdsm21 from "../../images/Agdsm/agdsm21.jpg"
import agdsm22 from "../../images/Agdsm/agdsm22.jpg"
import agdsm23 from "../../images/Agdsm/agdsm23.jpg"
import agdsm24 from "../../images/Agdsm/agdsm24.jpg"
import agdsm25 from "../../images/Agdsm/agdsm25.jpg"
import agdsm26 from "../../images/Agdsm/agdsm26.jpg"
import agdsm28 from "../../images/Agdsm/agdsm28.JPG"
import agdsm29 from "../../images/Agdsm/agdsm29.JPG"
import agdsm32 from "../../images/Agdsm/agdsm32.jpg"


const programmeGalleryImages = [
  { id: 1, image: agdsm6 },
  { id: 2, image: agdsm29 },
  { id: 3, image: agdsm28},
  { id: 4, image: agdsm17 },
  { id: 5, image: agdsm18 },
  { id: 6, image: agdsm19 },
  { id: 7, image: agdsm20 },
  { id: 8, image: agdsm21 },
  { id: 9, image: agdsm22 },
  { id: 10, image: agdsm23 },
  { id: 11, image: agdsm24 },
  { id: 12, image: agdsm32 },
  { id: 13, image: agdsm26 },
  { id: 14, image: agdsm15 },
  { id: 15, image: agdsm16 },
  { id: 16, image: agdsm25 },
];

const ProgrammeGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [showAllGalleryImages, setShowAllGalleryImages] = useState(false);

  // Memoize the visible images to prevent unnecessary re-renders
  const visibleImages = useMemo(() => {
    return showAllGalleryImages 
      ? programmeGalleryImages 
      : programmeGalleryImages.slice(0, 8);
  }, [showAllGalleryImages]);

  const openModal = useCallback((index) => {
    setModalImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const nextModalImage = useCallback(() => {
    setModalImageIndex((prev) => (prev + 1) % programmeGalleryImages.length);
  }, []);

  const prevModalImage = useCallback(() => {
    setModalImageIndex((prev) => 
      prev === 0 ? programmeGalleryImages.length - 1 : prev - 1
    );
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowAllGalleryImages(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (modalOpen) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowRight") nextModalImage();
        if (e.key === "ArrowLeft") prevModalImage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [modalOpen, closeModal, nextModalImage, prevModalImage]);

  return (
    <div className="gallery-container">
      <div className="gallery-section">
        <div className="gallery-header">
          <h3>Programme Gallery</h3>
          <p>Visual documentation of our comprehensive training and demonstration activities</p>
        </div>
        
        <div className="gallery-grid">
          {visibleImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item" 
              onClick={() => openModal(index)}
            >
              <img 
                src={image.image} 
                alt={`Programme activity ${image.id}`}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-icon">🔍</div>
                <span>View Image</span>
              </div>
            </div>
          ))}
        </div>

        {programmeGalleryImages.length > 8 && (
          <div className="gallery-actions">
            <button
              className="gallery-more-btn"
              onClick={toggleShowAll}
            >
              {showAllGalleryImages ? (
                <>
                  <span>Show Less</span>
                  <div className="btn-icon">↑</div>
                </>
              ) : (
                <>
                  <span>View All Photos</span>
                  <div className="btn-icon">↓</div>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={programmeGalleryImages[modalImageIndex]?.image}
              alt={`Programme activity ${programmeGalleryImages[modalImageIndex]?.id}`}
              className="modal-image"
            />
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <button className="modal-nav modal-prev" onClick={prevModalImage}>
              ←
            </button>
            <button className="modal-nav modal-next" onClick={nextModalImage}>
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgrammeGallery;