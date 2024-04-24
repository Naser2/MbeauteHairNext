'use client'
import React, { useEffect } from 'react';
import classNames from 'classnames';


// const DispatchElements = ({ data }) => {
//   return (
//     <>
//       {data.map((item, index) => (
//         <div key={index} className="Dispatch_dispatch__SRiqt Dispatch_wide__GwLtS Dispatch_loaded__7inpT">
//           <a aria-label="" href={item.href} className="DispatchElement_dispatch-element__WGi9u dispatch-element" target="_self" rel="">
//             <div className="dispatch-element__content">
//               <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
//                 <div className="dispatch-element__content__background__image">
//                   <img src={item.src} alt={item.alt} />
//                 </div>
//               </div>
//               <div className="DispatchElement_label__yhJKl DispatchElement_vertical-align-center__4scLw DispatchElement_horizontal-align-center__eRwrl">
//                 <h2 id={`title-${index}`} style={{ filter: 'drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.93))', color: '#ffffff' }} className="title-with-level dispatch-element__title dispatch-element__title--always-display font-century-std size-l uppercase">
//                   <span className="multiline-text">{item.title}</span>
//                 </h2>
//                 <h3 style={{ color: '#ffffff' }} className="title-with-level dispatch-element__subtitle font-century-std size-m">
//                   <span className="multiline-text">{item.subtitle}</span>
//                 </h3>
//               </div>
//             </div>
//           </a>
//         </div>
//       ))}
//     </>
//   );
// };

// export default DispatchElements;

// const DispatchElements = ({ data }) => {
//   // Check if the data length is even
//   const isEven = data.length % 2 === 0;

//   return (
//     <div className="grid-container">
//       {data.map((item, index) => (
//         <div key={index} className="Dispatch_dispatch__SRiqt Dispatch_wide__GwLtS Dispatch_loaded__7inpT">
//           <a aria-label="" href={item.href} className="DispatchElement_dispatch-element__WGi9u dispatch-element" target="_self" rel="">
//             <div className="dispatch-element__content">
//               <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
//                 <div className="dispatch-element__content__background__image">
//                   <img src={item.src} alt={item.alt} />
//                 </div>
//               </div>
//               <div className="DispatchElement_label__yhJKl DispatchElement_vertical-align-center__4scLw DispatchElement_horizontal-align-center__eRwrl">
//                 <h2 id={`title-${index}`} style={{ filter: 'drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.93))', color: '#ffffff' }} className="title-with-level dispatch-element__title dispatch-element__title--always-display font-century-std size-l uppercase">
//                   <span className="multiline-text">{item.title}</span>
//                 </h2>
//                 <h3 style={{ color: '#ffffff' }} className="title-with-level dispatch-element__subtitle font-century-std size-m">
//                   <span className="multiline-text">{item.subtitle}</span>
//                 </h3>
//               </div>
//             </div>
//           </a>
//         </div>
//       ))}
//       {/* If data length is odd, add an empty div for grid alignment */}
//       {!isEven && <div className="empty-grid-item" />}
//     </div>
//   );
// };

// export default DispatchElements;


// const DispatchElements = ({ data }) => {
//   const renderDispatchElements = () => {
//     const elements = [];

//     for (let i = 0; i < data.length; i += 2) {
//       const item1 = data[i];
//       const item2 = data[i + 1];

//       elements.push(

//           <a key={i} aria-label="" href={item1.href} className="DispatchElement_dispatch-element__WGi9u dispatch-element" target="_self" rel="">
            // <div className="dispatch-element__content">
            //   <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
            //     <div className="dispatch-element__content__background__image">
            //       <img src={item1.src} alt={item1.alt} />
            //     </div>
            //   </div>
            //   <div className="DispatchElement_label__yhJKl DispatchElement_vertical-align-center__4scLw DispatchElement_horizontal-align-center__eRwrl">
            //     <h2 id={`title-${i}`} style={{ filter: 'drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.93))', color: '#ffffff' }} className="title-with-level dispatch-element__title dispatch-element__title--always-display font-century-std size-l uppercase">
            //       <span className="multiline-text">{item1.title}</span>
            //     </h2>
            //     <h3 style={{ color: '#ffffff' }} className="title-with-level dispatch-element__subtitle font-century-std size-m">
            //       <span className="multiline-text">{item1.subtitle}</span>
            //     </h3>
            //   </div>
            // </div>
//           </a>
 
//       );

//       // Push the second item if it exists
//       if (item2) {
//         elements.push(

//             <a key={i + 1} aria-label="" href={item2.href} className="DispatchElement_dispatch-element__WGi9u dispatch-element" target="_self" rel="">
//               <div className="dispatch-element__content">
//                 <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
//                   <div className="dispatch-element__content__background__image">
//                     <img src={item2.src} alt={item2.alt} />
//                   </div>
//                 </div>
//                 <div className="DispatchElement_label__yhJKl DispatchElement_vertical-align-center__4scLw DispatchElement_horizontal-align-center__eRwrl">
//                   <h2 id={`title-${i + 1}`} style={{ filter: 'drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.93))', color: '#ffffff' }} className="title-with-level dispatch-element__title dispatch-element__title--always-display font-century-std size-l uppercase">
//                     <span className="multiline-text">{item2.title}</span>
//                   </h2>
//                   <h3 style={{ color: '#ffffff' }} className="title-with-level dispatch-element__subtitle font-century-std size-m">
//                     <span className="multiline-text">{item2.subtitle}</span>
//                   </h3>
//                 </div>
//               </div>
//             </a>
        
//         );
//       }
//     }

//     return elements;
//   };

//   return <> <div  className="Dispatch_dispatch__SRiqt Dispatch_wide__GwLtS Dispatch_loaded__7inpT">{renderDispatchElements()}</div></>;
// };

// export default DispatchElements;




// const DispatchElements = ({ data }) => {
//   useEffect(() => {
//     const handleHover = (index, direction) => {
//       const dispatchElement = document.getElementById(`dispatch-element-${index}`);
//       const adjacentDispatchElement = document.getElementById(`dispatch-element-${index + direction}`);

//       if (dispatchElement && adjacentDispatchElement) {
//         dispatchElement.addEventListener('mouseenter', () => {
//           adjacentDispatchElement.style.transition = 'width 0.32s ease-in-out';
//           adjacentDispatchElement.style.width = 'calc(50vw - 7vw)'; // Adjust as needed
//         });

//         dispatchElement.addEventListener('mouseleave', () => {
//           adjacentDispatchElement.style.transition = 'width 0.32s ease';
//           adjacentDispatchElement.style.width = '50vw'; // Adjust as needed
//         });
//       }
//     };

//     // Add event listeners for hover on each dispatch element
//     for (let i = 0; i < data.length; i += 2) {
//       handleHover(i, 1); // Hover on left element expands adjacent right element to the left
//       handleHover(i + 1, -1); // Hover on right element expands adjacent left element to the right
//     }

//     // Remove event listeners on component unmount
//     return () => {
//       for (let i = 0; i < data.length; i += 2) {
//         const dispatchElement = document.getElementById(`dispatch-element-${i}`);
//         const adjacentDispatchElement = document.getElementById(`dispatch-element-${i + 1}`);
//         dispatchElement.removeEventListener('mouseenter', () => {});
//         dispatchElement.removeEventListener('mouseleave', () => {});
//         adjacentDispatchElement.removeEventListener('mouseenter', () => {});
//         adjacentDispatchElement.removeEventListener('mouseleave', () => {});
//       }
//     };
//   }, [data]);

//   const renderDispatchElements = () => {
//     const elements = [];

//     for (let i = 0; i < data.length; i += 2) {
//       const item1 = data[i];
//       const item2 = data[i + 1];

//       elements.push(
//         <a key={i} id={`dispatch-element-${i}`} aria-label="" href={item1.href} className="DispatchElement_dispatch-element__WGi9u dispatch-element" target="_self" rel="">
//           <div className="dispatch-element__content">
//               <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
//                 <div className="dispatch-element__content__background__image">
//                   <img src={item1.src} alt={item1.alt}  class="responsive-image loaded" />
//                 </div>
//               </div>
//               <div className="DispatchElement_label__yhJKl DispatchElement_vertical-align-center__4scLw DispatchElement_horizontal-align-center__eRwrl">
//                 <h2 id={`title-${i}`} style={{ filter: 'drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.93))', color: '#ffffff' }} className="title-with-level dispatch-element__title dispatch-element__title--always-display font-century-std size-l uppercase">
//                   <span className="multiline-text">{item1.title}</span>
//                 </h2>
//                 <h3 style={{ color: '#ffffff' }} className="title-with-level dispatch-element__subtitle font-century-std size-m">
//                   <span className="multiline-text">{item1.subtitle}</span>
//                 </h3>
//               </div>
//             </div>
//         </a>
//       );

//       if (item2) {
//         elements.push(
//           <a key={i + 1} id={`dispatch-element-${i + 1}`} aria-label="" href={item2.href} className="DispatchElement_dispatch-element__WGi9u dispatch-element" target="_self" rel="">
         
//               <div className="dispatch-element__content">
//                 <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
//                   <div className="dispatch-element__content__background__image">
//                     <img src={item2.src} alt={item2.alt} class="responsive-image loaded" />
//                   </div>
//                 </div>
//                 <div className="DispatchElement_label__yhJKl DispatchElement_vertical-align-center__4scLw DispatchElement_horizontal-align-center__eRwrl">
//                   <h2 id={`title-${i + 1}`} style={{ filter: 'drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.93))', color: '#ffffff' }} className="title-with-level dispatch-element__title dispatch-element__title--always-display font-century-std size-l uppercase">
//                     <span className="multiline-text">{item2.title}</span>
//                   </h2>
//                   <h3 style={{ color: '#ffffff' }} className="title-with-level dispatch-element__subtitle font-century-std size-m">
//                     <span className="multiline-text">{item2.subtitle}</span>
//                   </h3>
//                 </div>
//               </div>
           
//           </a>
//         );
//       }
//     }

//     return elements;
//   };

//   return <div className="Dispatch_dispatch__SRiqt Dispatch_wide__GwLtS Dispatch_loaded__7inpT">{renderDispatchElements()}</div>;
// };

// export default DispatchElements;





// import React, { useEffect } from 'react';

const DispatchElements = ({ data }) => {
 
  // const handleHover = (index, direction) => {
  //   const dispatchElement = document.getElementById(`dispatch-element-${index}`);
  //   const adjacentDispatchElement = document.getElementById(`dispatch-element-${index + direction}`);
  //   let timer = null;

  //   if (dispatchElement && adjacentDispatchElement) {
  //     const handleMouseEnter = () => {
  //       clearTimeout(timer);
  //       timer = setTimeout(() => {
  //         adjacentDispatchElement.style.transition = 'width 0.3s ease';
  //         adjacentDispatchElement.style.width = 'calc(43vw - 1rem)'; // Adjust as needed
  //       }, 200); // Adjust delay as needed
  //     };

  //     const handleMouseLeave = () => {
  //       clearTimeout(timer);
  //       adjacentDispatchElement.style.transition = 'width 0.3s ease';
  //       adjacentDispatchElement.style.width = '50vw'; // Adjust as needed
  //     };

  //     dispatchElement.addEventListener('mouseenter', handleMouseEnter);
  //     dispatchElement.addEventListener('mouseleave', handleMouseLeave);

  //     return () => {
  //       dispatchElement.removeEventListener('mouseenter', handleMouseEnter);
  //       dispatchElement.removeEventListener('mouseleave', handleMouseLeave);
  //     };
  //   }
  // };

  const handleHover = (index, direction) => {
    const dispatchElement = document.getElementById(`dispatch-element-${index}`);
    const adjacentDispatchElement = document.getElementById(`dispatch-element-${index - direction}`);
    let timer = null;
  
    if (dispatchElement && adjacentDispatchElement) {
      const handleMouseEnter = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          adjacentDispatchElement.style.transition = 'width 0.37s ease';
          adjacentDispatchElement.style.width = 'calc(50vw + 7vw + 0.0625rem)'; // Adjust as needed
          adjacentDispatchElement.style.marginLeft = '-7vw'; // Adjust for overlap
        }, 200); // Adjust delay as needed
      };
  
      const handleMouseLeave = () => {
        clearTimeout(timer);
        adjacentDispatchElement.style.transition = 'width 0.32s ease-in-out';
        adjacentDispatchElement.style.width = '50vw'; // Adjust as needed
        adjacentDispatchElement.style.marginLeft = '0'; // Reset margin
      };
  
      dispatchElement.addEventListener('mouseenter', handleMouseEnter);
      dispatchElement.addEventListener('mouseleave', handleMouseLeave);
  
      return () => {
        dispatchElement.removeEventListener('mouseenter', handleMouseEnter);
        dispatchElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  };
  useEffect(() => {
    // Add event listeners for hover on each dispatch element
    for (let i = 0; i < data.length; i += 2) {
      handleHover(i, 1); // Right element
      handleHover(i + 1, -1); // Left element
    }
  
    // Apply aspect ratio based on screen size
    const applyAspectRatio = () => {
      const pictureElements = document.querySelectorAll('.responsive-image.loaded');
      pictureElements.forEach(picture => {
        const isLandscape = window.matchMedia('(orientation: landscape)').matches;
        const minWidthCondition = window.matchMedia('(min-width: 50rem)').matches;
        const portraitWidthCondition = window.matchMedia('(min-width: 64.0625rem)').matches;
  
        if ((isLandscape && minWidthCondition) || (!isLandscape && portraitWidthCondition)) {
          picture.style.aspectRatio = 'var(--desktop-aspect-ratio)';
        } else {
          picture.style.aspectRatio = 'var(--mobile-aspect-ratio)';
        }
      });
    };
  
    // Call the function initially
    applyAspectRatio();
  
    // Add event listener for window resize
    window.addEventListener('resize', applyAspectRatio);
  
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', applyAspectRatio);
    };
  }, [data]);

  const renderDispatchElements = () => {
    const elements = [];

    for (let i = 0; i < data.length; i += 2) {
      const item1 = data[i];
      const item2 = data[i + 1];

      elements.push(
        <a key={i} id={`dispatch-element-${i}`} aria-label="" href={item1.href} className="DispatchElement_dispatch-element__WGi9u dispatch-element" target="_self" rel="">
          <div className="dispatch-element__content">
            <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
              <div className="dispatch-element__content__background__image">
              <img
                  src={item1.src}
                  alt={item1.alt}
                  className="responsive-image loaded"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '115%',
                    left: '0',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    opacity: 1,
                    color: 'transparent',
                    aspectRatio: 'var(--mobile-aspect-ratio)' // Apply mobile aspect ratio by default
                  }}
                />
              </div>
            </div>
            <div className="DispatchElement_label__yhJKl DispatchElement_vertical-align-center__4scLw DispatchElement_horizontal-align-center__eRwrl">
              <h2 id={`title-${i}`} style={{ filter: 'drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.93))', color: '#ffffff' }} className="title-with-level dispatch-element__title dispatch-element__title--always-display font-century-std size-l uppercase">
                <span className="multiline-text">{item1.title}</span>
              </h2>
              <h3 style={{ color: '#ffffff' }} className="title-with-level dispatch-element__subtitle font-century-std size-m">
                <span className="multiline-text">{item1.subtitle}</span>
              </h3>
            </div>
          </div>
      </a>
      );

      if (item2) {
        elements.push(
          <a key={i + 1} id={`dispatch-element-${i + 1}`} aria-label="" href={item2.href} className="DispatchElement_dispatch-element__WGi9u dispatch-element" target="_self" rel="">
         
          <div className="dispatch-element__content">
            <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
              <div className="dispatch-element__content__background__image">
              <img
                  src={item2.src}
                  alt={item2.alt}
                  className="responsive-image loaded"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: '0',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    color: 'transparent',
                    aspectRatio: 'var(--mobile-aspect-ratio)' // Apply mobile aspect ratio by default
                  }}
                />
              </div>
            </div>
            <div className="DispatchElement_label__yhJKl DispatchElement_vertical-align-center__4scLw DispatchElement_horizontal-align-center__eRwrl">
              <h2 id={`title-${i + 1}`} style={{ filter: 'drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.93))', color: '#ffffff' }} className="title-with-level dispatch-element__title dispatch-element__title--always-display font-century-std size-l uppercase">
                <span className="multiline-text">{item2.title}</span>
              </h2>
              <h3 style={{ color: '#ffffff' }} className="title-with-level dispatch-element__subtitle font-century-std size-m">
                <span className="multiline-text">{item2.subtitle}</span>
              </h3>
            </div>
          </div>
       
      </a>
        );
      }
    }

    return elements;
  };

  return <div className="bg-gray-300  Dispatch_dispatch__SRiqt Dispatch_wide__GwLtS Dispatch_loaded__7inpT">{renderDispatchElements()}</div>;
};

export default DispatchElements;