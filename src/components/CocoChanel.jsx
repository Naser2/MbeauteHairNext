'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaBookmark } from 'react-icons/fa';
import Button from './headless/button';
import { classNames } from '@/utils';
const CocoChanel = ({ property }) => {
//  animate every minute btw bg-crema bg-rose
    return (<>
      <div className="page-content LandingPage_news-landing-page__TRB9w news-landing-page LandingPage_news-landing-page--dispatch__LLKyD page-content--full-bleed">
        <div className="Dispatch_dispatch__SRiqt Dispatch_wide__GwLtS Dispatch_loaded__7inpT">
          <div aria-label href="/fr_fr/fashion" className="DispatchElement_dispatch-element__WGi9u dispatch-element " target="_self" rel>
            <div className="dispatch-element__content">
              <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
                <div className="dispatch-element__content__background__image">
                  <picture className="picture" style={{ aspectRatio: '1.0554973821989528' }}>
                    {/* Source tags */}
                    <img  alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded blocks__item__image blocks__item__image--news-size-3" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw"
                     srcSet="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/cdc-dispatch/29493231-127-fre-FR/cdc-dispatch_1440_1200.jpg?imwidth=384 384w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/cdc-dispatch/29493231-127-fre-FR/cdc-dispatch_1440_1200.jpg?imwidth=640 640w" />
                  </picture>
                </div>
                {/* Background image hover element */}
                {/* <div className="DispatchElement_background-hover-element__2g3E8 dispatch-element__content__background__image">
                  <picture className="picture" style={{ aspectRatio: '1.0554973821989528' }}>
                 
                    <img alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw" srcSet="https://puls-img.chanel.com/c_limit,w_2800/q_auto:good,dpr_auto,f_auto/1707832663809-onehpcorpoprelaunchslidingherodesktop2880x1260pxsilverjacketjpg.jp" />
                  </picture>
                </div> */}
                
              </div>

            </div>
          </div>
          <div aria-label href="/fr_fr/fashion" className="DispatchElement_dispatch-element__WGi9u dispatch-element bg-crema bg-rose" target="_self" rel>
            <div className="dispatch-element__content">
              {/* <div className="bg-white opacity-0 dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center"> */}
                {/* <div className="dispatch-element__content__background__image">
                  <picture className="picture" style={{ aspectRatio: '1.0554973821989528' }}>
           
                    <img alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw"
                     srcSet="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/cdc-dispatch/29493231-127-fre-FR/cdc-dispatch_1440_1200.jpg?imwidth=384 384w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/cdc-dispatch/29493231-127-fre-FR/cdc-dispatch_1440_1200.jpg?imwidth=640 640w" />
                  </picture>
                </div> */}
                {/* Background image hover element */}
                {/* <div className="DispatchElement_background-hover-element__2g3E8 dispatch-element__content__background__image">
                  <picture className="picture" style={{ aspectRatio: '1.0554973821989528' }}>
                 
                    <img alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw" srcSet="https://puls-img.chanel.com/c_limit,w_2800/q_auto:good,dpr_auto,f_auto/1707832663809-onehpcorpoprelaunchslidingherodesktop2880x1260pxsilverjacketjpg.jp" />
                  </picture>
                </div> */}
                
              {/* </div> */}
              <div class="lg:col-end-1 p-6  sm:px-16  xl:px-32 lg:py-20 xl:px-32 sm:py-20 xl:py-36 xl:pl-10  flex-block justify-center lg:w-full lg:max-w-lg lg:pb-8">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl multiline-text .DispatchElement_dispatch-element__WGi9u .dispatch-element__title" id="title-1">Our Mission</h2>
              <p class="mt-6 text-xl leading-8 text-gray-600">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.</p>
              <p class="mt-6 text-base leading-7 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.</p>
            </div>
              <div className="flex justify-center px-16 xl:px-32  dispatch-element__content__main-content">
                <div className="dispatch-element__content__main-content__content">
                  <h2 className="dispatch-element__content__main-content__content__category dispatch-element__content__main-content__content__category--fashion">Fashion</h2>
                  <h3 className="dispatch-element__content__main-content__content__title">The History of Coco Chanel</h3>
                  <div className="dispatch-element__content__main-content__content__description">
                    {/* <p>{property.description}</p> */}
                  </div>
                  <div className={classNames("flex justify-center")}>
                  <Button className={"CTA_root__6tC4C CTA_button__4KFtO CTA_primary-white__tAPK0 puls-background-white puls-border-none puls-fake-black no_high_contrast bg-white hover:!bg-gray-700 main-text-color hover:text-white"} 
                        href="/get-started" color="white" shape="roundedSm">
                        Read More
                   </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* <div className="page-content LandingPage_news-landing-page__TRB9w news-landing-page LandingPage_news-landing-page--dispatch__LLKyD page-content--full-bleed">
<a aria-label="" href="/fr_fr/beauty" className="DispatchElement_dispatch-element__WGi9u dispatch-element" target="_self" rel="">
<div className="dispatch-element__content">
  <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
    <div className="dispatch-element__content__background__image">
      <picture className="picture" style={{ desktopAspectRatio: '1.0665529010238908', mobileAspectRatio: '1.3686131386861313' }}>
        <source media="screen and (orientation: landscape) and (min-width: 64rem), screen and (orientation: portrait) and (min-width: 64.0625rem)" srcSet="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=384 384w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=640 640w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=750 750w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=828 828w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1080 1080w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1200 1200w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1920 1920w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=2048 2048w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=3840 3840w" />
        <source media="screen and (orientation: portrait) and (max-width: 64rem), screen and (max-width: 63.9375rem)" srcSet="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468982-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=384 384w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468982-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=640 640w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468982-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=750 750w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468982-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=828 828w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468982-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1080 1080w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468982-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1200 1200w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468982-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1920 1920w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468982-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=2048 2048w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468982-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=3840 3840w" />
        <img alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw" srcSet="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=384 384w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=640 640w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=750 750w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=828 828w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1080 1080w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1200 1200w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1920 1920w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=2048 2048w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=3840 3840w" src="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468979-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=3840" />
      </picture>
    </div>
    <div className="DispatchElement_background-hover-element__2g3E8 dispatch-element__content__background__image">
      <picture className="picture" style={{ desktopAspectRatio: '1.0665529010238908', mobileAspectRatio: '1.3686131386861313' }}>
        <source media="screen and (orientation: landscape) and (min-width: 64rem), screen and (orientation: portrait) and (min-width: 64.0625rem)" srcSet="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=384 384w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=640 640w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=750 750w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=828 828w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1080 1080w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1200 1200w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1920 1920w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=2048 2048w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=3840 3840w" />
        <source media="screen and (orientation: portrait) and (max-width: 64rem), screen and (max-width: 63.9375rem)" srcSet="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468989-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=384 384w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468989-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=640 640w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468989-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=750 750w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468989-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=828 828w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468989-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1080 1080w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468989-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1200 1200w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468989-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1920 1920w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468989-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=2048 2048w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468989-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=3840 3840w" />
        <img alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw" srcSet="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=384 384w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=640 640w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=750 750w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=828 828w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1080 1080w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1200 1200w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=1920 1920w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=2048 2048w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=3840 3840w" src="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-24-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=3840" />
      </picture>
    </div>
  </div>
  <div className="DispatchElement_label__yhJKl DispatchElement_vertical-align-center__4scLw DispatchElement_horizontal-align-center__eRwrl">
    <h2 id="parfum-beaute" style={{ filter: 'drop-shadow(0 0 0.625rem rgba(0, 0, 0, 0.75))', color: '#FFFFFF' }} className="title-with-level dispatch-element__title dispatch-element__title--always-display font-century-std size-l uppercase">
      <span className="multiline-text">PARFUM &amp; BEAUTÉ</span>
    </h2>
    <h3 style={{ color: '#FFFFFF' }} className="title-with-level dispatch-element__subtitle font-century-std size-m">
      <span className="multiline-text">Commander</span>
    </h3>
  </div>
</div>
</a>
</div> */}
</>
    );
  };
  
  export default CocoChanel;