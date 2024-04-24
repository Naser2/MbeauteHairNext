import React from 'react';
import classNames from 'classnames';
import styles from './ImageHero.module.css'; // Import the CSS module
import Button from './headless/button';

const ImageHero = ({ imageSrcMobile, imageSrcDesktop, title, subtitle, href, alt, cta }) => {
  return (  <div className={classNames(styles.imageHero, "relative SlidingHeroContainer_ForwardLink_root__EtbqJ__eBvMq")}>
 
           <div className="blocks__row blocks__row--half tall">
    <div className="blocks__item">
      <div className="blocks__item__image blocks__item__image--news-size-3">
     <picture id="_7bgmoenc6_main" className={classNames(styles.picture)}>
      <source id="_7bgmoenc6_main" media="(min-width: 601px)" srcSet={imageSrcDesktop} className='desktop bg-cover w-screen bg-cover aspect-[6/4]'/>
      <img id="_7bgmoenc6_main" src={imageSrcMobile} alt={alt} className="bg-cover w-screen bg-cover h-screen  aspect-[6/4] entered lazyloaded" />
     </picture> 
   
    
      </div>
    
    </div>
  </div>
         <div className="absolute inset-x-6  lg:w-1/2 bottom-10   px-8 pb-16 lg:p-16">
            <h1 class="relative  text-center flex flex-col text-lg md:text-2xl  text-white overlayed-text overlayed-text-shadow">
            <span class="uppercase text-lable-anouncer ">{title}</span>
            <span class="text-h2 text-white overlayed-text overlayed-text-shadow">{subtitle}</span>
        </h1> 
        <div className={classNames("flex justify-center")}>
            <Button className={"CTA_root__6tC4C CTA_button__4KFtO CTA_primary-white__tAPK0 puls-background-white puls-border-none puls-fake-black no_high_contrast bg-white hover:!bg-gray-700 main-text-color hover:text-white"} 
                    href={href} color="white" shape="roundedSm">{cta} </Button>
            </div>
        </div>
        
        </div>
    
)

}

export default ImageHero;