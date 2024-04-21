import Image from 'next/image';
import PropertySearchForm from './PropertySearchForm';
import Link from 'next/link';

const Hero = () => {
  return (
  <> <section className="section section-subhero relative">
    <div className="full-width-tile-wrapper row">
      <div className="tile-wrapper tile-guided-tour large-12">
        <div id="guided-tour" className="guided-tour">
          <div className="row">
            <div className="background-container large-12  small-order-1">
              {/* <figure className="sm:rounded-3xl sm:px-2"> */}
              <div
                className="realtive w-full flex-none"
                id="FEATURED VIDEO"
              >
                <Image  className="w-[1920px] h-[1010px]" src="/images/mbeautehair-hero.png"
                  alt="Featured Project Image"
                  sizes="100vw"
                  width="2658"
                  height="1660"
                  decoding="async"
                  // loading="lazy"
                  style={{ color: 'transparent' }}
                  priority
                />{' '}
                <div class="featured-tag absolute right-3 top-3 ml-2 rounded-full px-2 py-0.5 text-xs text-white ring-1 ring-pink-100/20 max-[800px]:hidden sm:block">
                  Featured
                </div>
              </div>
              {/* </figure> */}
            </div>
            <div className="content-container large-12 small-order-0">
              <div className="content-wrapper sr-only sm:not-sr-only ">
                <h2>
                  <span className="typography-subhero-eyebrow tile-copy large-12">
                    Tapis rouge a Paris
                  </span>
                  <span className="typography-subhero-headline tile-headline large-12">
                    La plus Belle <br />
                    Femme
                  </span>
                </h2>
                <div id="WHITE_BTN" className="guided-tours-triggers">
                  <Link
                    href="/featured"
                    aria-label="Watch the Guided Tour film."
                    id="film-guided-tour-chapters"
                    className="icon-wrapper film-link"
                    data-films-modal-link=""
                    role="button"
                    data-analytics-id="film-guided-tour-chapters"
                  >
                    <span className="icon-copy">Watch the video</span>
                    <span className="icon icon-after icon icon-playcircle"></span>
                  </Link>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section className='bg-blue-700 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Find The Perfect Rental
          </h1>
          <p className='my-4 text-xl text-white'>
            Discover the perfect property that suits your needs.
          </p>
        </div>
        <PropertySearchForm />
      </div>
    </section></> 
  );
};
export default Hero;
