"use client"
import { useEffect, useState } from 'react';

const ProductCardDisplay = ({ productsSample }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming mobile size is below 768px
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative py-12 '>
      <div className="px-4 sm:px-6 lg:px-12">      
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl multiline-text .DispatchElement_dispatch-element__WGi9u .dispatch-element__title" id="title-1">Our Products</h2>
      </div>
      <div className={`underbanners-wrapper fullwidth py-6 xl:grid ${isMobile ? 'grid-cols-1 space-y-4 space-x-2' : 'grid-cols-2 space-y-6 space-x-4'}`}>
        {productsSample.slice(0, isMobile ? 2 : 4).map((banner, index) => (
          <div key={index} className="fullwidth" data-element={`main under banner ${index + 1}`} data-asset-id={banner.assetId} data-asset-name={banner.assetName}>
            <div className="underbanner sm:flex max-w-3xl">
              <div className="underbanner-picture-wrapper">
                <a href={banner.href}>
                  <img className="underbanner-image fullwidth" loading="eager" src={banner.src} alt={banner.alt} />
                </a>
              </div>
              <div className="underbanner-content-wrapper fullwidth py-4 px-4">
                <div className="underbanner-title strong font-bold text-black text-xl ">
                  <p>{banner.title}</p>
                </div>
                <div className="underbanner-text-wrapper py-4">
                  <div className="underbanner-description-code underbanner-description-without-copy-code">
                    <div className="underbanner-description text-xl">
                      <p>{banner.description}</p>
                    </div>
                  </div>
                </div>
                <div className="underbanner-cta mb-2" >
                  <a href={banner.href}>
                    <button className="cta-button-v2 button secondary-button-revamp fullwidth strong">
                      {banner.ctaText}
                    </button>
                  </a>
                </div>
                {/* <div className="underbanner-legal-mention pb-2">
                  <p className="underbanner-legal-mention-text">{banner.legalMention}</p>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 sm:px-6"> 
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl multiline-text .DispatchElement_dispatch-element__WGi9u .dispatch-element__title" id="title-1">See All</h2>
      </div>
    </div>
  );
};

export default ProductCardDisplay;