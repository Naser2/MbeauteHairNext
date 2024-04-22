import { ProductInfo } from "@/components/product/ProductInfo";
import { ImageGallery } from "@/components/product/ImageGallery";
import { ColorPicker } from "@/components/product/ColorPicker";
import { SizePicker } from "@/components/product/SizePicker";
import { ProductDetails } from "@/components/product/ProductDetails";
import { Policies } from "@/components/product/Policies";
import { Reviews } from "@/components/product/Reviews";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { AddToCart } from "@/components/product/AddToCart";
import CoPortfolio  from "@/components/CoPortfolio";
import CocoChanel from "@/components/CocoChanel";
import WelcomeScreen from "@/components/WelcomeScreen";
import Header from '@/components/SephoHeader'; // Import the Header component

const items = [
  {
    id: 'account',
    href: 'https://www.sephora.fr/connexion/',
    text: 'Se connecter',
    tooltipText: 'Profitez de vos offres et vos bons plans',
  },
  // Add more items as needed
];


export default function HomePage() {
  return (
    <main className=" lg:max-w max-w-none ">

{/* <Header items={items} /> */}


{/* <CocoChanel />
<CoPortfolio /> */}

     {/* <div id="welcome-screen-foreground">
      <div id="welcome-screen-logo">
        <img
          id="welcome-screen-logo-image"
          src="https://static.wixstatic.com/media/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png/v1/fill/w_240,h_175,al_c,usm_0.66_1.00_0.01/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png"
          alt=""
        />
        <div id="welcome-screen-logo-cover" />
      </div>
    </div>
  <div id="welcome-screen-background">

  
    </div> */}
          {/* <div id="welcome-screen" className="welcome-screen-state-logo-intro">
            <div id="welcome-screen-background"></div>
             <div id="welcome-screen-foreground">
                <div id="welcome-screen-logo">
                    <img id="welcome-screen-logo-image" src="https://static.wixstatic.com/media/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png/v1/fill/w_240,h_175,al_c,usm_0.66_1.00_0.01/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png" alt=""/>
                    <div id="welcome-screen-logo-cover"></div>
                </div>    
            </div>
        </div>   */}

        {/* <div id="welcome-screen" className="welcome-screen-state-outro"> 
            <div id="welcome-screen-background"></div>
            <div id="welcome-screen-foreground">
                <div id="welcome-screen-logo">
                    <img id="welcome-screen-logo-image" src="https://static.wixstatic.com/media/3ba387_810750d6eb2e4001a058a3d993dc07d6~mv2.jpg/v1/fill/w_240,h_164,al_c,q_80,usm_0.66_1.00_0.01/3ba387_810750d6eb2e4001a058a3d993dc07d6~mv2.jpg" alt=""/>
                    <div id="welcome-screen-logo-cover"></div>
                </div>
            </div>
            
        </div> */}


    <WelcomeScreen />
      {/* <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8 relative">
        <div className="lg:col-span-5 lg:col-start-8">
          <ProductInfo />
        </div>

        <ImageGallery />

        <div className="mt-8 lg:col-span-5">
          <div>
            <ColorPicker />
            <SizePicker />
            <AddToCart  />
          </div>

          <ProductDetails />
          <Policies />
        </div>
      </div>

      <Reviews /> */}
      <RelatedProducts />
      <div className="bg-crema lg:p-smm">
  <div className="flex justify-between flex-col-reverse lg:flex-row">
    <ul className="container py-10 lg:p-0 w-full lg:w-8/12 flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-5">
      <li className="text-lg footer-tab">
        <input
          className="hidden"
          type="checkbox"
          id="footer-1"
          data-index={1}
        />
        <label
          htmlFor="footer-1"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 text-lg font-sans uppercase"
        >
          Company
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1  pt-1 lg:p-0">
            <a href="/pages/about" className="inline">
              About
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/store-locator" className="inline">
              Store Finder
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="https://codeswitch.eadem.co/" className="inline">
              Journal
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/beauty-burden" className="inline">
              Beauty Burden
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/friend" className="inline">
              Get $10 Off
            </a>
          </div>
        </div>
      </li>
      <li className="text-lg footer-tab">
        <input className="hidden" type="checkbox" id="footer-2" />
        <label
          htmlFor="footer-2"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 text-lg font-sans uppercase"
        >
          Help
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1  pt-1 lg:p-0">
            <a href="/pages/faq" className="inline">
              FAQ
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/recycling" className="inline">
              Recycling
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/shipping-returns" className="inline">
              Shipping &amp; Returns
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/contact-us" className="inline">
              Contact Us
            </a>
          </div>
        </div>
      </li>
      <li className="text-lg footer-tab">
        <input className="hidden" type="checkbox" id="footer-3" />
        <label
          htmlFor="footer-3"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 font-sans uppercase"
        >
          Community
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1  pt-1 lg:p-0">
            <a
              href="https://www.instagram.com/eadem.co/"
              className="inline"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </li>
      <li className="block lg:hidden text-lg footer-tab">
        <input className="hidden" type="checkbox" id="footer-4" />
        <label
          htmlFor="footer-4"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 font-sans uppercase"
        >
          Legal
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1 pt-1 lg:p-0">
            <a href="/pages/terms-conditions" className="inline">
              Terms and Conditions
            </a>
          </div>
          <div className="font-serif mb-1">
            <a href="/pages/privacy-policy" className="inline">
              Privacy Policy
            </a>
          </div>
          <div className="font-serif mb-1">
            <a
              data-acsb-custom-trigger="true"
              className="inline cursor-pointer"
            >
              Accessibility
            </a>
          </div>
        </div>
      </li>
    </ul>
    <div className="container py-10 lg:p-0 w-full lg:w-4/12 bg-apricot lg:bg-crema">
      <form className="flex flex-col text-lg newsletter-form">
        <div className="mb-10 serializer">
          <span>
            <p>
              <strong>10% OFF YOUR FIRST ORDER </strong>— Signup for the latest
              product news, first-person essays, and expert skin tips.
            </p>
          </span>
        </div>
        <div className="relative pb-2 md:w-1/2 lg:w-full flex items-center border-b border-ochre val-w-email">
          <input
            className="w-full bg-transparent outline-none uppercase font-sans placeholder-ochre text-ochre"
            type="text"
            placeholder="ENTER YOUR EMAIL"
            data-index={0}
          />
          <div className="absolute right-0 text-ochre font-sans text-xs tracking-plus leading-relaxed">
            <span>Incorrect format, please try again.</span>
          </div>
          {/* <button
            type="submit"
            role="submit"
            title="submit"
            className="absolute right-0 w-3 h-3 focus:outline-none"
          >
            <svg className="fill-current text-ochre">
              <use xlinkHref="#svg-arrow" />
            </svg>
          </button> */}
        </div>
      </form>
    </div>
  </div>
</div>

    </main>
  );
}


const SectionEadem = () => {return  <div id="shopify-section-template--17756626223357__about" className="shopify-section py-12">
<div className="flex flex-col lg:flex-row">
  <div className="block lg:hidden index_pledge_mobile relative overflow-hidden mb-sx">
    <img
      className="img-full reveal"
      data-src="//eadem.co/cdn/shop/files/PLEDGE-Hero_6a8136bc-c3e8-4ce7-9e4d-3cc1c25cf449.jpg?v=1619458381"
      alt=" | Pledge | EADEM"
      src="https://eadem.co/cdn/shop/files/PLEDGE-Hero_6a8136bc-c3e8-4ce7-9e4d-3cc1c25cf449.jpg?v=1619458381"
    />
  </div>
  <div className="hidden lg:block w-1/2 h-full flex items-center relative">
    <img
      className="_pledge_img reveal"
      data-src="//eadem.co/cdn/shop/files/PLEDGE-Hero_6a8136bc-c3e8-4ce7-9e4d-3cc1c25cf449.jpg?v=1619458381"
      alt=" | Pledge | EADEM"
      src="https://eadem.co/cdn/shop/files/PLEDGE-Hero_6a8136bc-c3e8-4ce7-9e4d-3cc1c25cf449.jpg?v=1619458381"
    />
  </div>
  <div className="container lg:p-0 w-full lg:w-1/2 flex items-center justify-center">
    <div
      className="flex flex-col text-center
items-center justify-center max-width-xs"
    >
      <h3 className="text-xl flex flex-col mb-8 serializer">
        <p>Because we deserve</p>
        <p>
          <strong>BETTER, CLEANER INGREDIENTS, TOO</strong>
        </p>
      </h3>
      <div className="font-serif text-base lg:text-lg lg:mb-20 serializer">
        <span>
          <p>
            In beauty, women of color have{" "}
            <em>always been an afterthought. </em>Most products “made for us”
            contain unsafe chemicals to lighten our skin or straighten our
            hair so we’ll meet European beauty standards. No more harmful
            ingredients. <em>No more compromising.</em> No more adhering to
            “traditional” beauty standards — to us, health is (and always has
            been) the only beauty standard. <br />{" "}
          </p>
        </span>
    </div>
    <span className="hidden lg:block mb-2 text-sans-xs-caps">
      THE EADEM PLEDGE:
    </span>
    <ul className="flex flex-col lg:flex-row items-center lg:items-baseline lg:justify-between w-full my-sx lg:mb-0">
      <li className="w-full lg:w-1/4 flex flex-col items-center text-center relative text-xs mb-1 lg:mb-0">
        <div className="hidden lg:block pledge-img">
          <img
            className="img-full reveal"
            // data-src="//eadem.co/cdn/shop/files/PLEDGE-Icons-05_0ad0cad6-2829-490a-b0e1-ce5415caa06a.png?v=1619458341"
            alt="Melanin-Loving Ingredients | Pledge | EADEM"
            src="https://eadem.co/cdn/shop/files/PLEDGE-Icons-05_0ad0cad6-2829-490a-b0e1-ce5415caa06a.png?v=1619458341"
          />
        </div>
        <span className="lg:mt-8 tracking-plus">
          Melanin-Loving Ingredients
        </span>
      </li>
      <li className="w-full lg:w-1/4 flex flex-col items-center text-center relative text-xs mb-1 lg:mb-0">
        <div className="hidden lg:block pledge-img">
          <img
            className="img-full reveal"
            // data-src="//eadem.co/cdn/shop/files/PLEDGE-Icons-02_7bd73cb0-d0a2-464f-9d86-e1b09324115a.png?v=1619458341"
            alt="No Bleaching Agents | Pledge | EADEM"
            src="https://eadem.co/cdn/shop/files/PLEDGE-Icons-02_7bd73cb0-d0a2-464f-9d86-e1b09324115a.png?v=1619458341"
          />
        </div>
        <span className="lg:mt-8 tracking-plus">No Bleaching Agents</span>
      </li>
      <li className="w-full lg:w-1/4 flex flex-col items-center text-center relative text-xs mb-1 lg:mb-0">
        <div className="hidden lg:block pledge-img">
          <img
            className="img-full reveal"
            // data-src="//eadem.co/cdn/shop/files/PLEDGE-Icons-04_a5e88128-92d8-41ba-aab8-5648b313f9f0.png?v=1619458342"
            alt="Vegan | Pledge | EADEM"
            src="https://eadem.co/cdn/shop/files/PLEDGE-Icons-04_a5e88128-92d8-41ba-aab8-5648b313f9f0.png?v=1619458342"
          />
        </div>
        <span className="lg:mt-8 tracking-plus">Vegan</span>
      </li>
      <li className="w-full lg:w-1/4 flex flex-col items-center text-center relative text-xs mb-1 lg:mb-0">
        <div className="hidden lg:block pledge-img">
          <img
            className="img-full reveal"
            // data-src="//eadem.co/cdn/shop/files/PLEDGE-Icons-03_84a18cb9-c795-4862-9599-5d95184cb393.png?v=1619458341"
            alt="Cruelty-Free | Pledge | EADEM"
            src="https://eadem.co/cdn/shop/files/PLEDGE-Icons-03_84a18cb9-c795-4862-9599-5d95184cb393.png?v=1619458341"
          />
        </div>
        <span className="lg:mt-8 tracking-plus">Cruelty-Free</span>
      </li>
    </ul>
  </div>
</div>
</div>
</div>
}