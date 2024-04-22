'use client'

import Image from 'next/image'

import { classNames } from '@/utils';
import React from 'react';
import { useState, useEffect } from 'react';
import Button  from '@/components/headless/button'

import  LoggedInUserImage from '@/assets/images/profile.png'

import FAQ from "./FAQ";
import SecondaryHeader from './SecondaryHeader'
import { allCategories, navigation } from '@/data';

import FancyLoader from './FancyLoader'
import Icon from './Icons';
import Cart from './Cart';
import HeaderNavigationLinks from './SecondaryHeader';
const countries = [
    {
      name: "France",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwc0fe45eb/images/svg-icons/flags/fr-flag.svg",
      locale: "FR",
      fullLocale: "France - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Belgique",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw155fa044/images/svg-icons/flags/be-flag.svg",
      locale: "FR",
      fullLocale: "Belgique - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Bulgarie",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw356c0d9a/images/svg-icons/flags/bg-flag.svg",
      locale: "FR",
      fullLocale: "Bulgarie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Estonie",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwa737fba7/images/svg-icons/flags/ee-flag.svg",
      locale: "FR",
      fullLocale: "Estonie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Hongrie",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw8c8529ed/images/svg-icons/flags/hu-flag.svg",
      locale: "FR",
      fullLocale: "Hongrie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Irlande",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw980d1df9/images/svg-icons/flags/ie-flag.svg",
      locale: "FR",
      fullLocale: "Irlande - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Lettonie",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw065a4bfc/images/svg-icons/flags/lv-flag.svg",
      locale: "FR",
      fullLocale: "Lettonie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Lituanie",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw6045be49/images/svg-icons/flags/lt-flag.svg",
      locale: "FR",
      fullLocale: "Lituanie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Luxembourg",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw9ef5dd06/images/svg-icons/flags/lu-flag.svg",
      locale: "FR",
      fullLocale: "Luxembourg - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Pays Bas",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw9969a5df/images/svg-icons/flags/nl-flag.svg",
      locale: "FR",
      fullLocale: "Pays Bas - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Slovaquie",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw633a4192/images/svg-icons/flags/sk-flag.svg",
      locale: "FR",
      fullLocale: "Slovaquie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Slovénie",
      flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwfb6c467a/images/svg-icons/flags/si-flag.svg",
      locale: "FR",
      fullLocale: "Slovénie - Français",
      redirectLocale: "fr_FR"
    }
  ];
  

  export const SubscribeComponent = () => {
    return     ( <div id="SUBCRIBTION-MODAL-or-PAGE" role="main" className=" bg-white page-content clearfix main-content">
    <div className="content">
      <div id="primary" className="primary-content column medium-12 small-12">
        <div className="login-page-wrapper">
          <div className="account-login checkout-login row">
            <div className="medium-6 small-12 login-form-box">
              <div className="login-wrapper newsubscription-login-wrapper">
                <div className="login-email newsubscription-login-email">
                  <h1 className="title">Se connecter / s’inscrire</h1>
                  <span className="newsubscription-login-info">
                    Renseignez <strong>votre adresse email</strong> pour vous
                    connecter ou créer un compte
                  </span>
                  <form
                    action="https://www.sephora.fr/on/demandware.store/Sites-Sephora_FR-Site/fr_FR/SephoraCard-RoutingAccountGlobal"
                    method="post"
                    className="form-horizontal email-form flex-wrap"
                    noValidate="novalidate"
                  >
                    <fieldset className="flex1">
                      <div className="form-row  required  idz_hide ">
                        <div className="field-wrapper">
                          <input
                            data-cs-mask=""
                            className="required input-text ui-autocomplete-input"
                            type="email"
                            id="dwfrm_crmsephoracard_email"
                            name="dwfrm_crmsephoracard_email"
                            defaultValue=""
                            placeholder=""
                            data-msg-required="Veuillez vérifier votre adresse <span>Email</span>."
                            maxLength={70}
                            minLength={0}
                          />
                          <label htmlFor="dwfrm_crmsephoracard_email">
                            <span>
                              <span>Email</span>
                              <span className="required-indicator">*</span>
                            </span>
                          </label>
                          <ul
                            id="ui-id-1"
                            tabIndex={0}
                            className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="csrf_token"
                        defaultValue="cnLdVVBlUFDi8xC2CF2jWJRmUUGPfZ109HG46F-wchbw0_YTShLLqa9XbeJjlmgnPqitavRPtPAijm1NzzITmZMCX0ue57vU8WSKVV-DyM7LO8-JBeTZRgMHlF_U4kYQ5AolRz6Lx7iDJ4cM94nJJwguVIH-z8B78bO3eewVmNQ37OOPrC4="
                      />
                    </fieldset>
                    <div className="form-row form-button">
                      <button
                        type="submit"
                        className="button"
                        value="Appliquer"
                        name="dwfrm_crmsephoracard_confirm"
                        disabled=""
                      >
                        ok
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <input
                type="hidden"
                id="snapinChatSwitcher"
                defaultValue="true"
              />
              <div id="login-legal-foldable" className="login-legal-wrapper">
                <div className="content-asset login-legal-foldable">
                  <p
                    className="informations-required-field"
                    style={{ textAlign: "justify" }}
                  >
                    * Informations obligatoires
                  </p>
                  <p className="mention-required-field hide">
                    ** Champs obligatoires pour adhérer au programme de
                    fidélité
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>
                      L’ouverture d’un compte Sephora est réservée aux
                      personnes âgées de 16 ans et plus.
                    </strong>
                  </p>
                  <br />
                  <p style={{ textAlign: "justify" }}>
                    Créez un compte gratuitement et accédez simplement à un
                    ensemble de services personnalisés :
                  </p>
                  <ul>
                    <li>Gestion et suivi de vos commandes</li>
                    <li>Mise à jour de vos données personnelles</li>
                    <li>
                      Gestion de vos inscriptions aux communications relatives
                      aux dernières tendances et offres exclusives Sephora
                    </li>
                    <li>
                      Devenir le cas échéant membre de notre programme de
                      fidélité et consulter vos avantages cumulés avec la
                      carte de fidélité Sephora
                    </li>
                  </ul>
                  <p />
                  <br />
                  <p style={{ textAlign: "justify", marginBottom: 10 }}>
                    <strong>
                      Utilisation de vos données personnelles&nbsp;:
                    </strong>
                  </p>
                  <ul
                    className="accordion"
                    data-responsive-accordion-tabs="accordion"
                    data-allow-all-closed="true"
                    id="tqk7h8-responsiveaccordiontabs"
                    role="tablist"
                    data-e="pr4q1w-e"
                  >
                    <li className="accordion-item" data-accordion-item="">
                      <p style={{ textAlign: "left" }}>
                        Les données personnelles communiquées dans le cadre de
                        ce formulaire sont destinées à Sephora SAS.
                      </p>
                      <a
                        href="#"
                        className="accordion-title"
                        aria-controls="oy7ap3-accordion"
                        role="tab"
                        id="oy7ap3-accordion-label"
                        aria-expanded="false"
                        aria-selected="false"
                      >
                        <u>
                          Tout savoir sur l’utilisation de vos données et de
                          vos droits.
                        </u>
                      </a>
                      <div
                        className="accordion-content"
                        data-tab-content=""
                        role="tabpanel"
                        aria-labelledby="oy7ap3-accordion-label"
                        aria-hidden="true"
                        id="oy7ap3-accordion"
                      >
                        <p style={{ textAlign: "justify" }}>
                          Les données personnelles communiquées lors de la
                          création de votre compte ou par la suite à
                          l’occasion de l’utilisation de nos produits et
                          services sont destinées à Sephora SAS et seront
                          traitées aux fins de:
                          <br />- Vous permettre de gérer votre compte et vous
                          fournir les services associés, et le cas échéant
                          gérer votre adhésion au programme fidélité&nbsp;;
                          <br />- Comprendre vos besoins et préférences pour
                          créer votre profil client et effectuer des analyses
                          et statistiques commerciales afin d’organiser des
                          activités promotionnelles et des concours et vous
                          adresser, sous réserve de votre consentement, des
                          offres susceptibles de vous intéresser;&nbsp;
                          <br />- Afficher de la publicité ciblée sur notre
                          site ainsi que sur d’autres sites en fonction de vos
                          choix relatifs à l’utilisation des cookies.
                          <br />
                          Pour connaître nos pratiques en matière de collecte,
                          utilisation et communication de vos données
                          personnelles, exercer vos droits, d’accès, de
                          rectification et de suppression, modifier vos
                          options en matière de prospection commerciale ou
                          organiser le sort de vos données post-mortem, et
                          connaître les autres droits dont vous disposez,
                          veuillez lire notre{" "}
                          <a href="https://www.sephora.fr/donnees-personnelles.html">
                            <u>Politique données personnelles et cookies</u>
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
  }


  export const SectionLoader = ({countryPickerIsOpen, handleCountryPickerIsOpen}) => {

     return  (<div id="SECTION-LOADER" className="section-loader">
            <div id=" LanguagePickerIcon" className="language-select-wrapper country-language-wrapper" onClick={()=>handleCountryPickerIsOpen}>
            {/* <ul className="vertical menu accordion-menu access-menu">
                <li className="access-menu-item">
                <div className="selected-site dropdown-with-arrow language-selector-arrow custom-language-selector-arrow burger-menu-entry js-show-languages-modal">
                    <img
                    className="country-selector-image"
                    src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwc0fe45eb/images/svg-icons/flags/fr-flag.svg"
                    />
                    <span className="hide-for-medium">France - Français</span>
                    <input
                    type="hidden"
                    id="selectedCountryID"
                    defaultValue="FR"
                    />
                    <input
                    type="hidden"
                    id="selectedCountryName"
                    defaultValue="France - Français"
                    />
                </div>
                </li>
            </ul> */}
            <div className="arrow show-for-mlarge" />
            </div>
         </div>
    );
  };
  

  
export const CountrySelector = ({countryPickerIsOpen, handleCountryPickerIsOpen}) => {
    // console.log("CountrySELECTOR --FIred")
  return (
    <div className={classNames(`${countryPickerIsOpen ? "ui-dialog ui-corner-all ui-widget ui-widget-content ui-front popup-dialog-layer language-selector-dialog" : 'hidden' }`)} role="dialog" aria-describedby="languages-dialog-container" aria-labelledby="ui-id-2">
      <div className="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix">
        <span id="ui-id-2" className="ui-dialog-title">VOTRE PAYS DE LIVRAISON</span>
        <button type="button" className="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close !rounded-full !bg-gray-200" title="Fermer" onClick={handleCountryPickerIsOpen} style={{"border-radius":" 9999px"}}>
          <svg className="svg-inline close-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.92781 10.3431C8.53729 9.95257 8.53729 9.3194 8.92781 8.92888C9.31833 8.53836 9.9515 8.53836 10.342 8.92888L23.0699 21.6568C23.4605 22.0473 23.4605 22.6805 23.0699 23.071C22.6794 23.4615 22.0463 23.4615 21.6557 23.071L8.92781 10.3431Z" fill="black"></path>
            <path d="M10.3419 23.0712C9.95135 23.4617 9.31818 23.4617 8.92766 23.0712C8.53713 22.6807 8.53713 22.0475 8.92766 21.657L21.6556 8.92908C22.0461 8.53855 22.6793 8.53855 23.0698 8.92908C23.4603 9.3196 23.4603 9.95277 23.0698 10.3433L10.3419 23.0712Z" fill="black"></path>
          </svg>
        </button>
      </div>
      <div id="languages-dialog-container" className="dialog-content ui-dialog-content ui-widget-content">
        <ul className="show-languages-list">
          {countries.map((country, index) => (
            <li key={index} className="show-languages-item">
              <div className="js-change-site-link change-site-flag-name" data-language={country.redirectLocale} data-redirectlocale={country.redirectLocale} data-redirectfulllocale={country.fullLocale}>
                <div className="country-selector-image-wrapper">
                  <img className="country-selector-image lazy-image" data-src={country.flagSrc} src={country.flagSrc} style={{ opacity: 1 }} alt={country.name} />
                  {country.name}
                </div>
              </div>
              <div className="language-link-wrapper">
                <div className="change-site-flag-name site-language-link site-language-link-after language-link-extended hide" data-language={country.locale} data-redirectlocale={country.redirectLocale} data-redirectfulllocale={country.fullLocale}>
                  {country.locale}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="divider-line"></div>
        <div className="link-underline">
          <p><a href="https://www.sephora.fr/pays.html">Découvrir nos sites internationaux</a></p>
        </div>
      </div>
    </div>
  );
};


const HeaderItem = ({ id, href, text, tooltipText }) => (
  <div className="header-item header-layer" id={`header-item-${id}`}>
    <div className="header-link-wrapper">
      <a className="header-link header-link-account js-tc-connect-account" href={href}>
        <span className="header-link-text" data-cs-mask="">
          {text}
        </span>
        <span className="header-link-icon">
          <svg width="17" height="21" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG path */}
          </svg>
          <div className="tooltip-container-login" style={{ display: 'none' }}>
            <span className="tooltip-text">
              {tooltipText}
            </span>
            <span className="tooltip-close"></span>
          </div>
        </span>
      </a>
      <div className="arrow"></div>
    </div>
    {/* Rest of the component */}
  </div>
);

const AccountLayer = () => (
  <div className="account-layer header-layer-content">
    {/* Account layer content */}
  </div>
);

// const Header = ({ items }) => (
//   <div className="header">
//     {items.map((item, index) => (
//       <HeaderItem key={index} {...item} />
//     ))}
//     <AccountLayer />
//   </div>
// );

export const SectionLoaderSVG = ({countryPickerIsOpen}) => {
    return (
      <div id="SectionLoaderSVG" className="section-loader">
        <svg
          id="section-loader-svg"
          className="hide"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={40}
          height={40}
        >
          <circle
            className="loader-circle-border"
            r="40%"
            cx="50%"
            cy="50%"
            style={{ fill: "rgb(238, 238, 238)", strokeWidth: 0 }}
          />
          <mask id="mask">
            <circle r="45%" cx="50%" cy="50%" className="c-mask-circle" />
          </mask>
          <g mask="url(#mask)">
            <circle
              r="50%"
              cx="50%"
              cy="50%"
              style={{ fill: "rgb(255, 255, 255)", strokeWidth: 0 }}
            />
            <g id="clip-trs">
              <rect
                x="-200%"
                y={0}
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="30%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="60%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="90%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="120%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="150%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="180%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="210%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="240%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="270%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="300%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
            </g>
          </g>
        </svg>
      </div>
    );
  };
  
 export const LanguagePickerIcon=({handleCountryPickerIsOpen})=> { 
    // const [isOpen, setIsOpen] = useState(false);
  
    // const handleClick = () => {
    //   setIsOpen(!isOpen);
    // };
  

     return  (
    <div id=" LanguagePickerIcon" className="language-select-wrapper country-language-wrapper" onClick={handleCountryPickerIsOpen}>
   <ul className="vertical menu accordion-menu access-menu">
     <li className="access-menu-item">
    
       <div className="selected-site dropdown-with-arrow language-selector-arrow custom-language-selector-arrow burger-menu-entry js-show-languages-modal">
   
         <img
           className="country-selector-image"
           src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwc0fe45eb/images/svg-icons/flags/fr-flag.svg"
         />
         <span className="hide-for-medium">Fran ce - Français</span>
         <input
           type="hidden"
           id="selectedCountryID"
           defaultValue="FR"
         />
         <input
           type="hidden"
           id="selectedCountryName"
           defaultValue="France - Français"
         />
       </div>
     </li>
   </ul>
   <div className="arrow show-for-mlarge" />
 </div>)
 }


 const NavTriggerComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setIsMenuOpen(prevState => !prevState);
      navTrigger.classList.toggle('active');
    };

    const navTrigger = document.querySelector('.navTrigger');

    if (navTrigger) {
      navTrigger.addEventListener('click', handleClick);
    }

    return () => {
      if (navTrigger) {
        navTrigger.removeEventListener('click', handleClick);
      }
    };
  }, []);

  useEffect(() => {
    const mainListDiv = document.querySelector('#mainListDiv');
    if (mainListDiv) {
      if (isMenuOpen) {
        mainListDiv.classList.add('show_list');
        mainListDiv.style.display = 'block';
      } else {
        mainListDiv.classList.remove('show_list');
        mainListDiv.style.display = 'none';
      }
    }
  }, [isMenuOpen]);

  return null; // Since this is a utility component, it doesn't render any UI
};




export const ScrollHandlerComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('affix');
          console.log("OK");
        } else {
          nav.classList.remove('affix');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // Since this is a utility component, it doesn't render any UI
};




const Hamburger = (handleSetNavigationIsOpen) => {
  return (
    <>  
      <ScrollHandlerComponent/>
      <NavTriggerComponent /> {/* Rendering the NavTriggerComponent */}
   
      <div className='menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob geist-show-on-tablet -pr-12 flex'>

        <label onClick={handleSetNavigationIsOpen}
            htmlFor="mobile-navigation"
            className="menu-togglee"
            id="menu-togglee" >
                  {/* <div className="container">
                    <div className="logo pb-12">
                      <a href="#">Your Logo</a>
                    </div>
                    <div id="mainListDiv" className="main_list">
                      <ul className="navlinks">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div> */} 
                          {/* <i></i>
                      <i></i>
                      <i></i> */}
                    <span className="navTrigger" onClick={handleSetNavigationIsOpen}>
                    <div class="menu-toggle_bar__GUd1o" data-position="top"></div>
                    <div class="menu-toggle_bar__GUd1o" data-position="bottom"></div>
                    <div class="menu-toggle_bar__tree" data-position=""></div>
               
                    </span>
                  {/* </div> */}
                </label>
      </div>
      
    </>
  );
}
const MobileHeader = ({user, navigation, navigationOpen, handleSetNavigationIsOpen, advertissment}) => {
 return  <div
  className={classNames(`${navigationOpen  && advertissment  && 'inset-x-0 z-40 animationTranfrom'} mobile-header show-for-small hide-for-mlarge`)}
  style={{}}
>
  <div className="header-top">
    <div className="top-left ml-4">

   <UserIcon navigationOpen={navigationOpen} user={user}/>
    <LogoMobile user={user} />
    </div>
    <div className="top-center hide-for-small-only">
      <div className="header-search search-auto-complete">
        <div
          className="load-algolia algolia-search-input-box"
          data-fake-searchbar-needed="true"
        >
          <span className="algolia-fake-search-placeholder">
            <svg
              className="svg-inline search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={21}
              viewBox="0 0 21 21"
            >
              {" "}
              <path
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.35 19.35l-5.68-5.68 5.68 5.68zM8.31 15.618A7.31 7.31 0 1 1 8.31 1a7.31 7.31 0 0 1 0 14.619z"
              />{" "}
            </svg>
            Rechercher un produit, une marque…...
          </span>
        </div>
      </div>
    </div>
    <div className="top-right">
      <div
        className="load-algolia hide-for-msmall hidden"
        data-fake-searchbar-needed="false"
      >
        <button className="mobile-search-magnifying-glass ">
          <svg
            className="svg-inline search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width={21}
            height={21}
            viewBox="0 0 21 21"
          >
            {" "}
            <path
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.35 19.35l-5.68-5.68 5.68 5.68zM8.31 15.618A7.31 7.31 0 1 1 8.31 1a7.31 7.31 0 0 1 0 14.619z"
            />{" "}
          </svg>
        </button>
      </div>
     { user && <BellAndUser handleSetNavigationIsOpen={handleSetNavigationIsOpen}/>}
{/* -----CART ----- */}
      <Cart iconName="cartIcon"/>

         {/* <div
        className="header-item header-layer header-item-minicart"
        id="header-item-minicart"
      >
        <div className="header-link-wrapper">
          <input id="cart-quantity" type="hidden" defaultValue={0.0} />
          <a
            className="header-link empty"
            href="https://www.sephora.fr/panier/"
            title="Commander"
          >
            <span className="header-link-icon">
              <img
                className="basket-icon"
                src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwf63e629f/images/svg-icons/basket-icon-bold.svg"
              />
              <span className="header-link-quantity-wrap">
                <span className="header-link-quantity"></span>
              </span>
            </span>
          </a>
          <div className="arrow" />
        </div>
        <div className="mini-cart-notification" data-show-time={3.0}>
          <div className="header">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={26}
                className="svg-inline check-icon"
              >
                <path
                  fill="#6dcf63"
                  d="M3.9 15.5c-.1-.1-.1 0-.1 0zm-.5.1c-.1 0-.1 0 0 0zm.4 0l.3.2-.3-.3zm.4 1l.1.2.2.2v-.3l-.3-.2zm.1.4v.1zm.5.3l-.1-.2v-.2l-.1.3.2.1zm-.1.1a.4.4 0 0 0-.1-.1V17.4zm.2.3l-.1-.2a.2.2 0 0 0 0 .1v.1zm0 0v.1zm.4.1v.1c-.1 0-.2-.1-.1-.2 0-.1 0-.2-.2-.3l.1.5.3.4c0-.1.1-.3 0-.4h-.1zm0 .7zm-2.2.7zm2.7-.1h-.1zm.2-.4h-.2a.7.7 0 0 1 0-.2h-.2v-.2-.2c-.1.3 0 .5.1.7.2.1.3.3.3.5h.2a.9.9 0 0 1-.2-.6zm.5.9c-.1 0-.1 0 0 0zm.7 1c.1 0 .1 0 0 0zm-3 1.5h.1zm.5 1.7s0 .1.1 0zm8.5-5.1c0-.1 0-.1 0 0-.1 0 0 0 0 0zm0 .1H13zm-4.3 5.7l-1-3.4a74.6 74.6 0 0 0 1 3.4zm3.9-5v0zm-.8.7l-.1.1v-.1zm.4.5v-.1zm-.2.3l-.1-.1v.1s.1 0 0 0zm-.2.3c-.1 0-.1 0 0 0 0 .1 0 0 0 0zm-.1.3v-.2l-.1-.1-.1.1v.1h.1v.1zm-.2.3zm-.4.3V22l.1.1zm0 .1zm.2 0v.1zm-.2 0v.1zm0 .2zm0 0zm0 .1zm-.4.1zm.1.4V23h.1v.1zm-.4 0l-.1-.1v.1s0 .1 0 0zm.2.3v-.1h.1v.1zm-.5.2c.2 0 .2 0 .1-.2l-.1.2zm-.2 0v.1h.1v-.1-.2a.8.8 0 0 1 .2-.2v-.1-.2c0-.1 0-.2.2-.3l.1.1a.5.5 0 0 1 0 .1l-.2.1h.2l.1-.2v-.2h-.1c-.1 0 0 0 0-.2l.2-.2v-.2a.6.6 0 0 0-.3.4.4.4 0 0 1-.3.3l-.2.2a.8.8 0 0 0 0 .3h-.2a.2.2 0 0 1-.2.1v.2l.1.2v-.2c.2 0 .3 0 .2.1 0 .1 0 0 0 0s.1 0 0 .1zm-.3.4zm.7-.2v.1zm-.5.2zm-.3 0v.1zm0 0zm0 .3v-.1zm-1.1.4h-.1.2c0-.1-.1 0-.1 0zm1.4-.2zm-1.3.3c-.1 0-.1 0 0 0zm.3 0zm.7 0v-.1h.1v.1zm-1 .2h-.2zm1-.1zm-4.1.6zM9 25zm-.2 0l.1.1zm.6.1zm-1.6.3v.1zm1.4 0v-.1h.1zm-2 .2zm1.7 0v-.2H9v.1zm-.2.2c0-.1 0-.1.1 0zm1-8.5l.2-.2V17v-.1a.4.4 0 0 0 .2-.5c0-.1 0-.3.2-.3 0-.2 0-.4.2-.4v-.5l.3-.4v-.2l.1-.3.1-.4c.2-.1.2-.3.2-.5a.9.9 0 0 0 .2-.6c0-.2.1-.4.3-.5 0-.3 0-.5.2-.7l.3-.6a83.4 83.4 0 0 1 2-6.3h.2c0-.4 0-.7.3-1v-.4c.2-.1.2-.3.2-.5l.2-.1-.1-.1.4-1.2c0-.3.2-.7.5-1l-.2-.1c0-.2 0-.3.3-.2l.4-.1c.1.2.3.2.5 0l1 .2 1.3.2v.1l-.1.2.4.2h.2c.2 0 .3.2.3.2-.1 0-.2 0-.2.2a.3.3 0 0 1-.1.1v.3h.1l.1-.1-.1.3a.8.8 0 0 1-.2.3v.2h-.1L19 3.5l-.5 1.3-2.3 6.2-.2.6v.4h-.1v.1h-.2l-.2.7-.3.6a28 28 0 0 1-.8 2.3 37 37 0 0 0-.8 2.2h-.1v.2l-.2.3v-.1V18.6a.4.4 0 0 0 0 .3H13v.4l-.2.4h-.2v.3a.9.9 0 0 1-.2.4v-.1c0 .1 0 .2-.2.3v.3l-.2.5-.1.3h-.1v.1c-.1 0-.1 0 0-.1l-.2-.1v.2c-.1 0-.1.1 0 .2h-.2v.1-.5a.7.7 0 0 0-.4.3l-.4.5.1.1.2.1v-.2l.2-.2a.3.3 0 0 0 0 .2v.2h.1a.8.8 0 0 0 0 .2l-.1.2h-.3c-.2.2-.2.4 0 .5h-.2-.1l-.3.3V24H10a.4.4 0 0 0-.1.3c-.1 0-.1 0 0 0l-.1-.2a.4.4 0 0 0 0 .2v.1h-.3v.3a1 1 0 0 1-.6.4l-.6.3a.4.4 0 0 1-.1 0l-.2.2h.3a.4.4 0 0 1 .2-.2c0 .1 0 .1 0 0H9a3 3 0 0 1-.5.3l-.5.1-.2-.1a.3.3 0 0 1-.2 0H7l-.2.1h-.1l-.3-.1h-.1l-.2.2H6h-.2v-.1h-.1c0-.1 0-.1-.1 0h-.2a.4.4 0 0 1-.2-.2H5h-.2a.3.3 0 0 1-.1-.2v-.3c-.1 0-.2-.1-.2-.3-.1 0-.2-.1-.2-.3a.9.9 0 0 0-.1-.5.7.7 0 0 1-.1-.4c0-.2 0-.3-.2-.4v-.1a16 16 0 0 1-.4-2.3c0-.5 1.2 3.9 1 3.4a5.8 5.8 0 0 1-.1-1.4 2 2 0 0 1-.1-.8h-.1l-.4-.6a1.8 1.8 0 0 1-.2-.6 1 1 0 0 1-.4-1v-.1l-.2-.3H3v-.1a1 1 0 0 1-.3-.2v-.1-.3a.1.1 0 0 0-.1 0h-.1v-.2a.4.4 0 0 1 0-.3c-.2 0-.3-.2-.3-.4 0-.1 0-.3-.3-.4V17.8c-.1 0-.1 0 0-.1a.6.6 0 0 1 0-.3 1.7 1.7 0 0 0-.2-.2l-.1-.3h-.1l-.7-.8c-.2-.3-.3-.6-.3-1l-.1-.3-.1-.1h.1c.1 0 0 .2.2.2l-.1-.2-.1-.2v-.2l-.2-.6A.9.9 0 0 0 0 13h.8c.3 0 .5 0 .8.2h-.4L1 13s-.1 0 0 .1l.3.2h.3c0 .1.1.2 0 .2.3 0 .4.2.5.3.1.2.3.3.5.3 0 .2.2.3.5.4 0 .2 0 .3.2.3.1 0 .2 0 .2.2s.1 0 .2 0v.2a2.2 2.2 0 0 1 .7 1l.4.5c0 .2.2.4.3.5v.2l.2.1v.2h.1l.2.5.3.3.3.5c.2.1.3.3.3.5l.3.4.3.3v.3l.5 1 .2-.5-.1-.7.2.6 1-2 .2-.4c0-.2 0-.3.2-.4l.2-.5c.1-.2.1-.3 0-.4zm-1.8 4.6l.5 1.4.2.8-.7-3-.2.5.2.3zm-.1-1.2a17 17 0 0 1-.2-.9l.2.9zm.3.3l.4-1-.5 1zm.8 3.5zM7.6 26h.2c0 .1 0 .1 0 0s0 0-.1 0zm.5 0h.2zm.3 0c.1 0 .1 0 0 0 0 0-.1 0 0 0zm.2 0z"
                />
              </svg>
            </div>
            <div className="message-wrapper">
              <div className="heading">C’est ajouté !</div>
            </div>
          </div>
          <div className="product" data-canaddmore="null"></div>
          <div className="actions">
            <a
              className="mini-cart-button"
              href="https://www.sephora.fr/panier/"
            >
              <button className="button button-revamp">
                Voir mon panier
              </button>
            </a>
            <button
              className="button mini-cart-button secondary-button-revamp"
              data-close=""
            >
              Continuer mon shopping
            </button>
          </div>
        </div>
        <div className="mini-cart-overlay" />
      </div> */}


      {/* OPEN NAVI */}
      {/* <Hamburger /> */}
      <OpenButton handleSetNavigationIsOpen={handleSetNavigationIsOpen}/>
      {/* OPEN NAV END  */}
    </div>
  </div>
  <input id="mobile-search-checkbox" type="checkbox" className="hide" />
</div>
}

const Header = ({ items }) => {
    const [countryPickerIsOpen, setCountryPickerIsOpen] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [user, setUser] = useState(true);
    const [advertissment, setAadvertissment] = useState(false);
  
    // useEffect(() =>{ 
        const handleCountryPickerIsOpen = () => {
            setCountryPickerIsOpen(!countryPickerIsOpen);
        };
      
    // }, [countryPickerIsOpen])

    const handleSetNavigationIsOpen = () => {
      console.log("FIREDDD---> ", "handleSetNavigationIsOpen")
      setNavigationOpen(!navigationOpen);
  };

useEffect(() =>{  
  setUser(true)
    }, [user])
    return (
      <nav className="nav z-40">
        <div id="wrapper" className="pt_account_login newsubscription-wrapper">
          {/* <SectionLoader countryPickerIsOpen={countryPickerIsOpen} handleCountryPickerIsOpen={handleCountryPickerIsOpen}/> */}
          <header>
            <meta
              property="og:image"
              content="https://www.sephora.fr/on/demandware.static/-/Sites/default/dw25e2e9ad/1200x600-generique-03.jpg"
            />
            { !navigationOpen &&  advertissment  &&   <div
              className="persistent-banner row"
              style={{
                color: "rgb(0, 0, 0)",
                background:
                  "none 0% 0% / auto repeat scroll padding-box border-box rgb(248, 229, 219)"
              }}
            >
              <div
                className="htmlcontent"
                id="persistent-banner-global-content-wrapper-0"
              >
                <div
                  className="htmlcontent-body !text-black"
                  style={{ backgroundColor: "#F8E5DB", color: "black" }}
                >
                  {" "}
                  <a
                    href="https://www.sephora.fr/promotion-exclu-web-all/"
                    style={{ color: "black", width: "100%" }}
                  >
                    <strong>Offre fidélité</strong> : <strong>-25%</strong> sur une
                    sélection de produits !
                  </a>
                </div>
              </div>
            </div>}
            <div className="sticky-top sticky-top-static nav">
              <div
                className="cookie-policy text-center"
                style={{ display: "block" }}
              ></div>
    
           <MobileHeader navigationOpe={navigationOpen} handleSetNavigationIsOpen={handleSetNavigationIsOpen} user={user} advertissment={advertissment}  />
            </div>
            <div className="row desktop-header show-for-mlarge align-justify w-full">
              <div className="language-search-wrapper">
                <div className="header-item header-layer header-item-change-site show-for-mlarge">
                 <LanguagePickerIcon handleCountryPickerIsOpen={handleCountryPickerIsOpen}/> 
                </div>
                <div className="logo-wrapper align-center">
                  <a
                    className="logo-link"
                    href="https://www.sephora.fr/"
                    title="Sephora Accueil"
                  >
                    <LogoMobile />

                    {/* <svg
                      id="Calque_2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 642 130.5"
                    >
                      <path d="M66.6 30.2s-.2.7-3.4 9.6c-9.1-7.5-24.5-7-24.5 4.6 0 13.6 32 11.9 31 36.1-.8 19.4-24 23.9-41.8 14.5 1.6-3.4 3.2-6.7 4.3-9.4 13.5 8.2 25.1 4.5 27.1-2.2C64.5 65.2 28 70.8 28 45.1c0-10.9 12.2-27.7 38.6-14.9M103.6 27h44.7s-.1 3.9 0 9.4h-33.5v19.3h23.7c-.1 3.9 0 6.9 0 8.9h-23.7v24.1h33.5v9.2h-44.6l-.1-70.9zM206 27.1c-3.9-.1-12.2-.1-19.2-.1v71H198V71.1c2.8 0 8.5-.2 13.2-.3 6.4-.2 23.4-3.3 23.2-22.8-.1-21.9-24.4-20.8-28.4-20.9m-.6 34.7H198V36.2h6.3c2.9 0 20-1.3 20.5 11.9.6 13-12.8 13.7-19.4 13.7M503.8 98h13.5l-22.4-31.8c6-2.2 13-7.4 12.1-19.1-1.6-21.1-22.1-19.5-26.5-19.7-3.7-.2-11.7-.3-18.6-.2V98h11.2V68.1c3.7 0 5-.1 10.6-.2L503.8 98zM480 59.9c-2.5 0-4.4 0-6.9-.1V35.9h5.8c2.7 0 17.4-.8 18.6 10.7C499 60.3 483 59.9 480 59.9M313 55.3V27.4h10.9v70.8H313V64.6h-36.3v33.6h-10.9V27.4h10.9v27.9z" />
                      <path
                        className="st0"
                        d="M567.5 27.2h12.9l25.5 71.1h-11.4s-2.5-7.2-5.9-16.7l-28.7.2s-1.2 3.7-4.6 16.5h-11l23.2-71.1m-5 46.4l23.1-.1-11.7-35h-.2l-11.2 35.1zM392.8 35.4c-16.6 0-26 12.2-26 27.3s9.3 27.3 26 27.3 26-12.2 26-27.3-9.5-27.3-26-27.3m0-10.2c-22.6 0-37.3 16.8-37.3 37.4 0 20.7 14.7 37.4 37.3 37.4 22.6 0 37.3-16.8 37.3-37.4 0-20.7-14.7-37.4-37.3-37.4"
                      />
                    </svg> */}
                    <div className="content-asset sephora-logo-seo-desktop"></div>
                  </a>
                </div>
                <DesktopSearchInput />
              </div>
              <div className="header-links">
                {/* <div
                  className="header-item header-layer"
                  id="header-item-storelocator"
                >
                  <div className="header-link-wrapper">
                    <a
                      href="https://www.sephora.fr/tous-les-magasins/"
                      className="header-link"
                    >
                      <span className="header-link-text">
                       Services
                      </span>
                      <span className="header-link-icon">
                        <svg
                          width={17}
                          height={21}
                          viewBox="0 0 20 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.33193 23.7603C3.11064 18.729 0 14.3342 0 10.5735C0 4.73431 4.47667 0 10.0006 0C15.5233 0 20 4.73431 20 10.5735C20 14.3342 16.8894 18.729 10.6681 23.7603C10.2729 24.0799 9.7271 24.0799 9.33193 23.7603ZM10 21.7224C7.27443 19.4616 5.28361 17.3976 3.96551 15.5351C2.55001 13.535 2 11.8962 2 10.5735C2 5.73229 5.6849 2 10.0006 2C14.315 2 18 5.73214 18 10.5735C18 11.8962 17.45 13.535 16.0345 15.5351C14.7164 17.3976 12.7256 19.4616 10 21.7224Z"
                            fill="black"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.0016 14C12.1962 14.0074 13.9837 12.2199 14 10.0017C14 7.79444 12.2083 6.00004 10.0016 6.00004C7.80452 5.99081 6.01451 7.78082 6 10.0017C6.01631 12.2212 7.8058 14.0092 10.0016 14ZM8.00009 10.0008C8.01482 8.86919 8.92338 7.99553 9.99325 8.00002L10.0016 6.00004V8.00004C11.0994 8.00004 11.996 8.89312 12 9.99438C11.9877 11.1278 11.0791 12.0036 10.0084 12L10.0008 12L9.99324 12C8.92399 12.0045 8.01573 11.1318 8.00009 10.0008Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </a>
                    <div className="arrow" />
                  </div>
                  <div className="header-layer-content store-content" />
                </div> */}
               <NavbarHeaderUserFlyoutComponent />
                <span className="background-overlay" />
                <div className="mini-wishlist" id="header-item-miniWishlist">
                  <div className="header-item" id="header-item-wishlist">
                    <div className="header-link-wrapper">
                      <a
                        href="https://www.sephora.fr/wishlist/"
                        className="header-link empty"
                      >
                        <span className="header-link-icon">
                          <svg
                            width={24}
                            height={24}
                            className="wishlist-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.4309 23.8979C12.516 23.8553 12.5964 23.7995 12.669 23.7306C14.1983 22.3215 16.4822 20.1473 17.7884 18.709C19.472 16.8559 20.8499 15.0965 21.8756 13.4769C23.2076 11.3723 24 9.43101 24 7.76341C24 3.57509 21.0082 0 17.1396 0C15.8874 0 14.6759 0.718893 13.7044 1.54989C13.0854 2.07937 12.5051 2.70447 12 3.35208C11.4949 2.70447 10.9146 2.07937 10.2956 1.54989C9.32409 0.718893 8.11256 0 6.86037 0C2.99178 0 0 3.57509 0 7.76341C0 9.43101 0.792204 11.3721 2.12424 13.4767C3.14991 15.0963 4.52796 16.8559 6.21161 18.709C7.51779 20.1473 9.80168 22.3215 11.331 23.7306C11.4036 23.7995 11.484 23.8553 11.5691 23.8979C11.7054 23.9663 11.8529 24.0001 12 24C12.1471 24.0001 12.2946 23.9663 12.4309 23.8979ZM1.99336 7.76341C1.99336 4.53982 4.26238 2.0831 6.86037 2.0831C7.42222 2.0831 8.18565 2.43704 9.03303 3.16186C9.8467 3.85785 10.606 4.78426 11.1509 5.66493C11.191 5.73318 11.239 5.79714 11.2946 5.85519C11.4841 6.054 11.7399 6.16053 12 6.16079C12.1407 6.16093 12.2827 6.12996 12.4161 6.06567C12.5222 6.0149 12.6205 5.94432 12.7054 5.85519C12.761 5.79714 12.809 5.73318 12.8491 5.66493C13.394 4.78426 14.1533 3.85785 14.967 3.16186C15.8143 2.43704 16.5778 2.0831 17.1396 2.0831C19.7376 2.0831 22.0066 4.53982 22.0066 7.76341C22.0066 8.80702 21.4815 10.3235 20.2133 12.3273C19.2694 13.8178 17.9719 15.4817 16.3428 17.2746C15.2699 18.4561 13.4583 20.2043 12 21.5658C10.5417 20.2043 8.73024 18.4563 7.65734 17.2748C6.02832 15.4819 4.7306 13.8178 3.78668 12.3273C2.51846 10.3235 1.99336 8.80702 1.99336 7.76341Z"
                              fill="black"
                            />
                          </svg>
                          <span className="header-link-quantity-wrap">
                            <span className="header-link-quantity">0</span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="header-item header-layer header-item-minicart"
                  id="header-item-minicart"
                >
                  {/* Report any requested source code */}
                  {/* Report the active source code */}
                  <div className="header-link-wrapper">
                    <input id="cart-quantity" type="hidden" defaultValue={0.0} />
                    <a
                      className="header-link empty"
                      href="https://www.sephora.fr/panier/"
                      title="Commander"
                    >
                      <span className="header-link-icon">
                        <img
                          className="basket-icon"
                          src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwf63e629f/images/svg-icons/basket-icon-bold.svg"
                        />
                        <span className="header-link-quantity-wrap">
                          <span className="header-link-quantity"></span>
                        </span>
                      </span>
                    </a>
                    <div className="arrow" />
                  </div>
                  <div className="mini-cart-notification" data-show-time={3.0}>
                    <div className="header">
                      <div className="icon-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={26}
                          className="svg-inline check-icon"
                        >
                          <path
                            fill="#6dcf63"
                            d="M3.9 15.5c-.1-.1-.1 0-.1 0zm-.5.1c-.1 0-.1 0 0 0zm.4 0l.3.2-.3-.3zm.4 1l.1.2.2.2v-.3l-.3-.2zm.1.4v.1zm.5.3l-.1-.2v-.2l-.1.3.2.1zm-.1.1a.4.4 0 0 0-.1-.1V17.4zm.2.3l-.1-.2a.2.2 0 0 0 0 .1v.1zm0 0v.1zm.4.1v.1c-.1 0-.2-.1-.1-.2 0-.1 0-.2-.2-.3l.1.5.3.4c0-.1.1-.3 0-.4h-.1zm0 .7zm-2.2.7zm2.7-.1h-.1zm.2-.4h-.2a.7.7 0 0 1 0-.2h-.2v-.2-.2c-.1.3 0 .5.1.7.2.1.3.3.3.5h.2a.9.9 0 0 1-.2-.6zm.5.9c-.1 0-.1 0 0 0zm.7 1c.1 0 .1 0 0 0zm-3 1.5h.1zm.5 1.7s0 .1.1 0zm8.5-5.1c0-.1 0-.1 0 0-.1 0 0 0 0 0zm0 .1H13zm-4.3 5.7l-1-3.4a74.6 74.6 0 0 0 1 3.4zm3.9-5v0zm-.8.7l-.1.1v-.1zm.4.5v-.1zm-.2.3l-.1-.1v.1s.1 0 0 0zm-.2.3c-.1 0-.1 0 0 0 0 .1 0 0 0 0zm-.1.3v-.2l-.1-.1-.1.1v.1h.1v.1zm-.2.3zm-.4.3V22l.1.1zm0 .1zm.2 0v.1zm-.2 0v.1zm0 .2zm0 0zm0 .1zm-.4.1zm.1.4V23h.1v.1zm-.4 0l-.1-.1v.1s0 .1 0 0zm.2.3v-.1h.1v.1zm-.5.2c.2 0 .2 0 .1-.2l-.1.2zm-.2 0v.1h.1v-.1-.2a.8.8 0 0 1 .2-.2v-.1-.2c0-.1 0-.2.2-.3l.1.1a.5.5 0 0 1 0 .1l-.2.1h.2l.1-.2v-.2h-.1c-.1 0 0 0 0-.2l.2-.2v-.2a.6.6 0 0 0-.3.4.4.4 0 0 1-.3.3l-.2.2a.8.8 0 0 0 0 .3h-.2a.2.2 0 0 1-.2.1v.2l.1.2v-.2c.2 0 .3 0 .2.1 0 .1 0 0 0 0s.1 0 0 .1zm-.3.4zm.7-.2v.1zm-.5.2zm-.3 0v.1zm0 0zm0 .3v-.1zm-1.1.4h-.1.2c0-.1-.1 0-.1 0zm1.4-.2zm-1.3.3c-.1 0-.1 0 0 0zm.3 0zm.7 0v-.1h.1v.1zm-1 .2h-.2zm1-.1zm-4.1.6zM9 25zm-.2 0l.1.1zm.6.1zm-1.6.3v.1zm1.4 0v-.1h.1zm-2 .2zm1.7 0v-.2H9v.1zm-.2.2c0-.1 0-.1.1 0zm1-8.5l.2-.2V17v-.1a.4.4 0 0 0 .2-.5c0-.1 0-.3.2-.3 0-.2 0-.4.2-.4v-.5l.3-.4v-.2l.1-.3.1-.4c.2-.1.2-.3.2-.5a.9.9 0 0 0 .2-.6c0-.2.1-.4.3-.5 0-.3 0-.5.2-.7l.3-.6a83.4 83.4 0 0 1 2-6.3h.2c0-.4 0-.7.3-1v-.4c.2-.1.2-.3.2-.5l.2-.1-.1-.1.4-1.2c0-.3.2-.7.5-1l-.2-.1c0-.2 0-.3.3-.2l.4-.1c.1.2.3.2.5 0l1 .2 1.3.2v.1l-.1.2.4.2h.2c.2 0 .3.2.3.2-.1 0-.2 0-.2.2a.3.3 0 0 1-.1.1v.3h.1l.1-.1-.1.3a.8.8 0 0 1-.2.3v.2h-.1L19 3.5l-.5 1.3-2.3 6.2-.2.6v.4h-.1v.1h-.2l-.2.7-.3.6a28 28 0 0 1-.8 2.3 37 37 0 0 0-.8 2.2h-.1v.2l-.2.3v-.1V18.6a.4.4 0 0 0 0 .3H13v.4l-.2.4h-.2v.3a.9.9 0 0 1-.2.4v-.1c0 .1 0 .2-.2.3v.3l-.2.5-.1.3h-.1v.1c-.1 0-.1 0 0-.1l-.2-.1v.2c-.1 0-.1.1 0 .2h-.2v.1-.5a.7.7 0 0 0-.4.3l-.4.5.1.1.2.1v-.2l.2-.2a.3.3 0 0 0 0 .2v.2h.1a.8.8 0 0 0 0 .2l-.1.2h-.3c-.2.2-.2.4 0 .5h-.2-.1l-.3.3V24H10a.4.4 0 0 0-.1.3c-.1 0-.1 0 0 0l-.1-.2a.4.4 0 0 0 0 .2v.1h-.3v.3a1 1 0 0 1-.6.4l-.6.3a.4.4 0 0 1-.1 0l-.2.2h.3a.4.4 0 0 1 .2-.2c0 .1 0 .1 0 0H9a3 3 0 0 1-.5.3l-.5.1-.2-.1a.3.3 0 0 1-.2 0H7l-.2.1h-.1l-.3-.1h-.1l-.2.2H6h-.2v-.1h-.1c0-.1 0-.1-.1 0h-.2a.4.4 0 0 1-.2-.2H5h-.2a.3.3 0 0 1-.1-.2v-.3c-.1 0-.2-.1-.2-.3-.1 0-.2-.1-.2-.3a.9.9 0 0 0-.1-.5.7.7 0 0 1-.1-.4c0-.2 0-.3-.2-.4v-.1a16 16 0 0 1-.4-2.3c0-.5 1.2 3.9 1 3.4a5.8 5.8 0 0 1-.1-1.4 2 2 0 0 1-.1-.8h-.1l-.4-.6a1.8 1.8 0 0 1-.2-.6 1 1 0 0 1-.4-1v-.1l-.2-.3H3v-.1a1 1 0 0 1-.3-.2v-.1-.3a.1.1 0 0 0-.1 0h-.1v-.2a.4.4 0 0 1 0-.3c-.2 0-.3-.2-.3-.4 0-.1 0-.3-.3-.4V17.8c-.1 0-.1 0 0-.1a.6.6 0 0 1 0-.3 1.7 1.7 0 0 0-.2-.2l-.1-.3h-.1l-.7-.8c-.2-.3-.3-.6-.3-1l-.1-.3-.1-.1h.1c.1 0 0 .2.2.2l-.1-.2-.1-.2v-.2l-.2-.6A.9.9 0 0 0 0 13h.8c.3 0 .5 0 .8.2h-.4L1 13s-.1 0 0 .1l.3.2h.3c0 .1.1.2 0 .2.3 0 .4.2.5.3.1.2.3.3.5.3 0 .2.2.3.5.4 0 .2 0 .3.2.3.1 0 .2 0 .2.2s.1 0 .2 0v.2a2.2 2.2 0 0 1 .7 1l.4.5c0 .2.2.4.3.5v.2l.2.1v.2h.1l.2.5.3.3.3.5c.2.1.3.3.3.5l.3.4.3.3v.3l.5 1 .2-.5-.1-.7.2.6 1-2 .2-.4c0-.2 0-.3.2-.4l.2-.5c.1-.2.1-.3 0-.4zm-1.8 4.6l.5 1.4.2.8-.7-3-.2.5.2.3zm-.1-1.2a17 17 0 0 1-.2-.9l.2.9zm.3.3l.4-1-.5 1zm.8 3.5zM7.6 26h.2c0 .1 0 .1 0 0s0 0-.1 0zm.5 0h.2zm.3 0c.1 0 .1 0 0 0 0 0-.1 0 0 0zm.2 0z"
                          />
                        </svg>
                      </div>
                      <div className="message-wrapper">
                        <div className="heading">C’est ajouté !</div>
                      </div>
                    </div>
                    <div className="product" data-canaddmore="null"></div>
                    <div className="actions">
                      <a
                        className="mini-cart-button"
                        href="https://www.sephora.fr/panier/"
                      >
                        <button className="button button-revamp">
                          Voir mon panier
                        </button>
                      </a>
                      <button
                        className="button mini-cart-button secondary-button-revamp"
                        data-close=""
                      >
                        Continuer mon shopping
                      </button>
                    </div>
                  </div>
                  <div className="mini-cart-overlay" />
                </div>
              </div>
            </div>
            <div id="agent-banner-placeholder" />
            <div className="global-search-popin">
              <div className="search-popin"></div>
              <span className="search-popin-overlay" />
            </div>
            <div
              id="sessionData"
              className="hide"
              data-customer-authenticated="false"
            />
          </header>
          <input
            id="mobile-navigation"
            type="checkbox"
            className="hide"
            autoComplete="off"
          />
        <MobileSideNavigation  navigationOpen={navigationOpen} handleSetNavigationIsOpen={handleSetNavigationIsOpen}/>
          <label className="mobile-background" htmlFor="mobile-navigation" onClick={handleSetNavigationIsOpen} />
        {/* <SomeNavigationIcons/> */}
        
          <div className="back-to-top-btn">
            <div className="arrow" />
          </div>
        </div>
        <iframe
          src="about:blank"
          height={0}
          width={0}
          tabIndex={-1}
          title="empty"
          className="hidden"
          style={{ display: "none" }}
        />
        <form id="smt-q-form" style={{ display: "none" }} noValidate="novalidate">
          <input type="hidden" name="Quantity" defaultValue={1} />
          <input type="hidden" name="cartAction" defaultValue="add" />
          <input type="hidden" name="pid" defaultValue="" />
          <input type="submit" />
        </form>
       <CountrySelector countryPickerIsOpen={countryPickerIsOpen} handleCountryPickerIsOpen={handleCountryPickerIsOpen}/>
        <div
          role="log"
          aria-live="assertive"
          aria-relevant="additions"
          className="ui-helper-hidden-accessible"
        />
        <div
          role="status"
          aria-live="assertive"
          aria-relevant="additions"
          className="ui-helper-hidden-accessible"
        />
        <BottomTabs user={user}/>
   </nav>
     
      
      )

}
export const SomeNavigationIcons = ()=> {
    return  <div className="" id="hidden-icons">
    <svg id="CLOSE-ICON"
      className="svg-inline close-icon"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.92781 10.3431C8.53729 9.95257 8.53729 9.3194 8.92781 8.92888C9.31833 8.53836 9.9515 8.53836 10.342 8.92888L23.0699 21.6568C23.4605 22.0473 23.4605 22.6805 23.0699 23.071C22.6794 23.4615 22.0463 23.4615 21.6557 23.071L8.92781 10.3431Z"
        fill="black"
      />
      <path
        d="M10.3419 23.0712C9.95135 23.4617 9.31818 23.4617 8.92766 23.0712C8.53713 22.6807 8.53713 22.0475 8.92766 21.657L21.6556 8.92908C22.0461 8.53855 22.6793 8.53855 23.0698 8.92908C23.4603 9.3196 23.4603 9.95277 23.0698 10.3433L10.3419 23.0712Z"
        fill="black"
      />
    </svg>
    <svg
      className="svg-inline pin-icon"
      width={65}
      height={71}
      viewBox="0 0 65 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_925_26149)">
        <g filter="url(#filter1_d_925_26149)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 30.1322C8 16.8133 18.8479 6 32.2458 6C45.6464 6 56.4917 16.8134 56.4917 30.1322C56.4917 34.6557 54.5089 39.3372 50.9065 44.1309C47.2977 48.9329 41.9557 53.9933 34.9609 59.3203C34.1831 59.9128 33.2303 60.2361 32.2471 60.2361C31.2638 60.2361 30.3109 59.9127 29.5331 59.3202C22.5372 53.9933 17.1946 48.9329 13.5856 44.1309C9.98273 39.3372 8 34.6557 8 30.1322Z"
            fill="white"
          />
          <path
            d="M34.3551 58.5248L34.355 58.5248C33.7509 58.9849 33.0109 59.2361 32.2471 59.2361C31.4833 59.2361 30.7431 58.9849 30.139 58.5247L30.1389 58.5246C23.1829 53.2281 17.9183 48.2313 14.385 43.5301C10.8545 38.8326 9 34.3592 9 30.1322C9 17.3695 19.3962 7 32.2458 7C45.098 7 55.4917 17.3696 55.4917 30.1322C55.4917 34.3592 53.6372 38.8326 50.107 43.5301C46.574 48.2313 41.3099 53.2281 34.3551 58.5248Z"
            stroke="black"
            strokeWidth={2}
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.4984 32.7958C34.5918 38.2288 30.5234 42 30.5234 42C32.9424 36.7389 30.6782 34.007 29.7185 29.5156C28.4577 23.6091 33.0644 18 33.0644 18C30.42 23.0518 34.4446 29.6345 34.4984 32.7958Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_925_26149"
          x={0}
          y={0}
          width="64.4917"
          height="70.2361"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_26149"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_26149"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_925_26149"
          x={0}
          y={0}
          width="64.4917"
          height="70.2361"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_26149"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_26149"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <svg
      className="svg-inline pin-icon-active"
      width={65}
      height={71}
      viewBox="0 0 65 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_925_26379)">
        <g filter="url(#filter1_d_925_26379)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 30.1322C8 16.8133 18.8479 6 32.2458 6C45.6464 6 56.4917 16.8134 56.4917 30.1322C56.4917 34.6557 54.5089 39.3372 50.9065 44.1309C47.2977 48.9329 41.9557 53.9933 34.9609 59.3203C34.1831 59.9128 33.2303 60.2361 32.2471 60.2361C31.2638 60.2361 30.3109 59.9127 29.5331 59.3202C22.5372 53.9933 17.1946 48.9329 13.5856 44.1309C9.98273 39.3372 8 34.6557 8 30.1322Z"
            fill="black"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.4984 32.7958C34.5918 38.2288 30.5234 42 30.5234 42C32.9424 36.7389 30.6782 34.007 29.7185 29.5156C28.4577 23.6091 33.0644 18 33.0644 18C30.42 23.0518 34.4446 29.6345 34.4984 32.7958Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_925_26379"
          x={0}
          y={0}
          width="64.4912"
          height="70.2361"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_26379"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_26379"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_925_26379"
          x={0}
          y={0}
          width="64.4912"
          height="70.2361"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_26379"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_26379"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>

}
const UserIcon = ({user, navigationOpen })=> {

//  const  user = true 
  return <>
  { user == !true ?  <><div id="UN_AUTHENTICATED_IN_USER" class="mt-1 mx-2 mb-1 block flex items-center gap-2  lg:mt-6 lg:px-4 lg:px-4  rounded-full py-1.5 px-2">
  <span className="header-link-icon ">
    <svg width="17" height="21" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
    clip-rule="evenodd" d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="black"></path></svg><div class="tooltip-container-login hide">
     </div>

     </span>
    
     </div> 
     {navigationOpen &&  <span className="hide-for-medium px-4 text-gray-400 underline "> Login to see offers </span>}
  </> : <> <div id ="AUTHENTICATED_IN_USER" class="mt-1 mb-1 block flex items-center gap-2  lg:mt-6 lg:px-4 lg:px-4">
      <div id="icon"  class="inline-flex">
       
      <Image
          className="h-8 w-8 rounded-full object-cover"
          src={LoggedInUserImage}
          alt="user icon"
          // src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
        />
        {/* <img alt="user icon" src="../assets/images/profile.png" width="4883" height="3255" decoding="async" data-nimg="1" class="h-12 w-12 rounded-full object-covern country-selector-image" loading="lazy"/> */}
      
       </div>
      </div>
       { navigationOpen && <span className="hide-for-medium px-4"> Nasser Sanou</span>}</>}
  </>
} 
function Example() {
    return <Button href="/get-started" color="dark" shape="roundedFull" iconName={"addIcon"}/>
  }
// const OpenButton = ({handleSetNavigationIsOpen}) => {
//   return <label onClick={handleSetNavigationIsOpen}
//   htmlFor="mobile-navigation"
//   className="menu-togglee p-4 sm:bg-white"
//   id="menu-togglee"
// ><span aria-label="Close menu"  id="menu-togglee"  htmlFor="mobile-navigation" class="menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob rounded-full ring-1 ring-black" data-expanded="false" data-testid="mobile-menu/trigger" type="button">
//   <div class="menu-toggle_bar__GUd1o" data-position="top"></div>
// <div class="menu-toggle_bar__GUd1o" data-position="bottom"></div> </span>
//     </label>
// }
const OpenButton = ({handleSetNavigationIsOpen}) => {
  return (
    <>
    <NavTriggerComponent />
    <label onClick={handleSetNavigationIsOpen}
  htmlFor="mobile-navigation"
  className="menu-togglee p-4 sm:bg-white"
  id="menu-togglee"
><span aria-label="Close menu"  id="menu-togglee"  htmlFor="mobile-navigation" className="navTrigger menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob rounded-full ring-1 ring-black" data-expanded="false" data-testid="mobile-menu/trigger" type="button">
        <div class="menu-toggle_bar__GUd1o" data-position="top"></div>
        <div class="menu-toggle_bar__GUd1o" data-position="bottom"></div>
        <div class="menu-toggle_bar__tree" data-position="middle"></div>
        </span>
    </label></>)
}



export const MobileSideNavigation = ({user,navigationOpen,handleSetNavigationIsOpen,  handleCountryPickerIsOpen}) => {
    return    <nav className="nav-menu-mobile mt-12 sm:mt-16" role="navigation">
    <div className="nav-content">
      <div className="language-select-wrapper country-language-wrapper">
     
        <div className="arrow show-for-mlarge" />
      </div>
       {/* <FancyLoader /> */}
      <div className='menu-wrapper'>
        {/* <FAQ /> */}
      <HeaderNavigationLinks  dataToMap={navigation}/>
      {/* {  menuItems.map((menuItem, index) => (
       <> 

            <div className="menu-item !flex" key={index}>
                <a className="menu-item-link" href={menuItem.href}>
                <span className="menu-item-icon">{menuItem.svg}</span>
                <span className="menu-item-text !flex">{menuItem.itemName}</span>
                </a>
            </div></>
            ))}
             */}
            </div>
    </div>

    {/* ADD ITEM or CREATE BUTTON */}
    {/* <ul className="absolute bottom-0 vertical menu accordion-menu access-menu">
          <li className="access-menu-item mobile-header show-for-small hide-for-mlarge mr-0">
            <div className="selected-site dropdown-with-arrow language-selector-arrow custom-language-selector-arrow burger-menu-entry js-show-languages-modal top-left">
              <UserIcon navigationOpen={navigationOpen} user={user}/>
              <input type="hidden" id="selectedCountryID" defaultValue="FR" />
              <input
                type="hidden"
                id="selectedCountryName"
                defaultValue="Customer - Name"
              />     
               <div className='ml-4' style={{"justify-content": "flex-end"}}> 
               <OpenButton/>
            

               <Example/>
               </div><span className='top-right '>
                
        
            </span>   
          </div>
          
          </li>
        </ul> */}
  </nav>
}



export const DesktopSearchInput =() => {
    return   <div className="header-search search-auto-complete">
    <div
      className="load-algolia algolia-search-input-box"
      data-fake-searchbar-needed="true"
    >
      <span className="algolia-fake-search-placeholder">
        <svg
          className="svg-inline search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width={21}
          height={21}
          viewBox="0 0 21 21"
        >
          {" "}
          <path
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.35 19.35l-5.68-5.68 5.68 5.68zM8.31 15.618A7.31 7.31 0 1 1 8.31 1a7.31 7.31 0 0 1 0 14.619z"
          />{" "}
        </svg>
        Search for a product or a brand…...
      </span>
    </div>
  </div>
}

const NavbarHeaderUserFlyoutComponentLinks = [

]
export const NavbarHeaderUserFlyoutComponent =({})=> {
    return      <div className="header-item header-layer" id="header-item-account">
    <div className="header-link-wrapper">
      <a
        className="header-link header-link-account js-tc-connect-account"
        href="https://www.sephora.fr/connexion/"
      >
        <span className="header-link-text" data-cs-mask="">
          Se connecter
        </span>
        <span className="header-link-icon">
          <svg
            width={17}
            height={21}
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
              fill="black"
            />
          </svg>
          <div className="tooltip-container-login hide">
            <span className="tooltip-text">
              Profitez de vos offres et{" "}
              <span style={{ color: "#D50032" }}>vos bons plans</span>
            </span>
            <span className="tooltip-close" />
          </div>
        </span>
      </a>
      <div className="arrow" />
    </div>
    <div className="account-layer header-layer-content">
      <div className="header-layer-inner">
        <div className="account-layer-image-bottom">
          <div className="content-asset account-layer-guest">
            {/* dwMarker="content" dwContentID="b09e092a9ebaa5014fe34e4e07" */}
            <p>
              <img
                alt="account layer"
                className="lazy-image"
                data-src="https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Library-Sites-SephoraV2/default/dwa5ea962a/Eventail_511x96px_BLEU.jpg?q=75"
                title=""
              />
            </p>
          </div>{" "}
          {/* End content-asset */}
        </div>
        <div className="left-side  account-layer-image-bottom">
          <div className="wrapper-limited">
            <div className="header">Bonjour !</div>
            <div className="description">
              Connectez-vous ou créez un compte pour bénéficier de tous
              les avantages du Beauty Compte Sephora
            </div>
            <a href="https://www.sephora.fr/connexion/">
              <button className="button account-connect button-revamp">
                Me connecter / M'inscrire
              </button>
            </a>
          </div>
        </div>
        <div className="right-side">
          <div className="menu-wrapper ">
            <div className="menu-column grid  grid-cols-2 !w-[16em]!w-full">

          {  menuItems.map((menuItem, index) => (
            <div className="menu-item !flex" key={index}>
                <a className="menu-item-link" href={menuItem.href}>
                <span className="menu-item-icon">{menuItem.svg}</span>
                <span className="menu-item-text !flex">{menuItem.itemName}</span>
                </a>
            </div>
            ))}
              {/* <div className="menu-item">
                <a
                  className="menu-item-link"
                  href="https://www.sephora.fr/mon-compte/"
                >
                  <span className="menu-item-icon">
                    <svg
                      className="svg-inline account-icon color-red"
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={22}
                      viewBox="0 0 21 22"
                    >
                      <path d="M9.9 10.5C6.2 10.5 2.8 12.7 1.4 16.2L0.7 18.1C0.6 18.4 0.5 18.7 0.5 19 0.5 20.4 1.6 21.5 3 21.5L18 21.5C18.3 21.5 18.6 21.4 18.9 21.3 20.2 20.8 20.8 19.3 20.3 18.1L19.6 16.2C18.2 12.7 14.8 10.5 11.1 10.5L9.9 10.5ZM10.2 0.5C8.3 0.5 6.7 2.1 6.7 4L6.7 4.4C6.7 6.3 8.3 7.9 10.2 7.9L10.7 7.9C12.6 7.9 14.2 6.3 14.2 4.4L14.2 4C14.2 2.1 12.6 0.5 10.7 0.5L10.2 0.5Z" />
                    </svg>
                  </span>
                  <span className="menu-item-text">
                    Mon beauty compte
                  </span>
                </a>
              </div> */}
              {/* <div className="menu-item">
                <a
                  className="menu-item-link"
                  href="https://www.sephora.fr/mes-achats/"
                >
                  <span className="menu-item-icon">
                    <svg
                      className="svg-inline basket-icon color-red"
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={18}
                      viewBox="0 0 22 18"
                    >
                      <path d="M0.7 5.5L4.4 17.2 18.2 17.2 21.3 5.5 0.7 5.5Z" />
                      <path d="M6.5 5.9C7 2.5 8.5 0.9 11.1 0.9 13.8 0.9 15.2 2.5 15.5 5.9" />
                    </svg>
                  </span>
                  <span className="menu-item-text">Mes achats</span>
                </a>
              </div> */}
              {/* <div className="menu-item">
                <a
                  className="menu-item-link"
                  href="https://www.sephora.fr/on/demandware.store/Sites-Sephora_FR-Site/fr_FR/Order-TrackMyOrder"
                >
                  <span className="menu-item-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={27}
                      height={21}
                      viewBox="0 0 27 21"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g stroke="#000">
                          <g>
                            <g>
                              <g>
                                <g>
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.852 6.285V4.833c0-.552.448-1 1-1H24.52c.552 0 1 .448 1 1V19.5c0 .552-.448 1-1 1H9.852c-.552 0-1-.448-1-1v-1.773"
                                    transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    d="M5.5 8.667L17.039 8.667M3 12L14.539 12M.5 15.333L12.039 15.333"
                                    transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
                                  />
                                  <path
                                    strokeLinejoin="round"
                                    d="M14.852.5h4.465c.552 0 1 .448 1 1v2.333l-6.465-.029V1.5c0-.552.448-1 1-1z"
                                    transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="menu-item-text">
                    Suivre ma commande
                  </span>
                </a>
              </div> */}
              {/* <div className="menu-item">
                <a
                  className="menu-item-link"
                  href="https://www.sephora.fr/Programme-carte-fidelite.html"
                >
                  <span className="menu-item-icon">
                    <svg
                      className="card-general-icon color-red"
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={14}
                      viewBox="0 0 19 14"
                    >
                      &gt;
                      <path d="M16.4 14L3.1 14C1.5 14 0 12.7 0 11.2L0 2.6C0 1.2 1.5 0 3.1 0L16.4 0C17.9 0 19 1.2 19 2.6L19 11.2C19 12.7 17.9 14 16.4 14ZM16.4 13C17.3 13 18 12.3 18 11.4L18 2.6C18 1.7 17.3 1 16.4 1L2.8 1C1.9 1 1 1.7 1 2.6L1 11.4C1 12.3 1.9 13 2.8 13L16.4 13ZM9.2 7C8.9 6.1 8.8 4.7 11 3 10.4 3.7 10 4.7 10.9 7 11.5 8.7 10 10.3 9 11 9.4 10.5 10.1 9.6 9.2 7Z" />
                    </svg>
                  </span>
                  <span className="menu-item-text">
                    Mon programme de fidélité
                  </span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-item-link offers-link"
                  href="https://www.sephora.fr/mes-offres/"
                >
                  <span className="menu-item-icon">
                    <svg
                      className="card-general-icon color-red"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ isolation: "isolate", stroke: "none" }}
                      viewBox="0 0 22 21"
                      width={18}
                      height={21}
                    >
                      <path d="M2.053 6C1.47 6 1 6.298 1 6.667v.666C1 7.702 1.471 8 2.053 8h17.894C20.53 8 21 7.702 21 7.333v-.666C21 6.298 20.529 6 19.947 6H2.053zM11.5 9v13h-1V9H2.095C.938 9 0 8.342 0 7.455v-.802c0-.887.938-1.606 2.095-1.606h3.587C3.995 3.89 3.5 2.444 4.548.887 5.54-.59 7.454-.1 9.166 1.456a9.654 9.654 0 0 1 1.853 2.32 9.654 9.654 0 0 1 1.854-2.32C14.585-.1 16.5-.59 17.491.887c1.047 1.557.553 3.004-1.134 4.16h3.548c1.157 0 2.095.719 2.095 1.606v.802C22 8.342 21.062 9 19.905 9H11.5zm2.955-3.953c1.775-.98 3.048-2.169 2.135-3.59-.517-.806-2.077-.243-3.073.711-.882.845-1.584 2.134-1.967 2.833l.012.046h2.893zm-3.979 0L10.49 5c-.383-.7-1.085-1.988-1.967-2.833C7.527 1.213 5.967.65 5.45 1.456c-.913 1.421.36 2.61 2.135 3.59h2.892zM2 9v10.995C2 20.602 2.548 21 3.21 21h15.6c.663 0 1.19-.398 1.19-1.005V9H2zM1 8h20v11.846C21 21.036 19.947 22 18.647 22H3.353C2.053 22 1 21.036 1 19.846V8z" />
                    </svg>
                    <div className="offer-gift-icon">
                      <div className="offers-count-wrap hide">
                        <div className="offers-count" />
                      </div>
                    </div>
                  </span>
                  <span className="menu-item-text">Mes offres</span>
                </a>
              </div>
            </div>
            <div className="menu-column">
              <div className="menu-item">
                <a href="" className="menu-item-link  booxi-popin-open">
                  <span className="menu-item-icon">
                    <img
                      className="calendar-icon"
                      src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwec515ce3/images/svg-icons/calendar-icon.svg"
                    />
                    <img
                      className="calendar-icon hovered"
                      src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwa055f7c0/images/svg-icons/calendar-icon-red.svg"
                    />
                  </span>
                  <span className="menu-item-text">
                    Prendre un rendez-vous
                  </span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-item-link"
                  href="https://www.sephora.fr/profil/"
                >
                  <span className="menu-item-icon">
                    <svg
                      className="filter-icon color-red"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                    >
                      <path
                        fill="#000"
                        d="M18.4 11.9l-.7-.5-.1-.2V8.8l.1-.2.7-.5c.7-.5.9-1.3.4-2l-1.3-2.2c-.4-.7-1.2-.9-1.9-.6a3 3 0 0 0-.8.4h-.2c-.6-.5-1.3-.9-2-1.2a.2.2 0 0 1-.2-.2l-.1-.9C12.2.6 11.6 0 10.8 0H8.1c-.7 0-1.2.5-1.4 1.2l-.1 1-.1.2c-.7.3-1.4.7-2 1.2-.1.1-.2.1-.2 0l-.9-.3-.5-.2c-.7 0-1.1.3-1.4.7L.2 6.1c-.4.7-.2 1.5.4 2l.7.5.1.2v2.4l-.1.2-.6.4c-.7.5-.9 1.3-.5 2L1.5 16c.4.7 1.2 1 1.9.6l.7-.3h.3c.6.5 1.3.9 2 1.2l.2.2.1.9c.1.7.7 1.3 1.4 1.3h2.7c.7 0 1.3-.5 1.4-1.2l.1-1 .1-.2c.7-.3 1.4-.7 2-1.2.1-.1.1-.1.2 0l.9.4c.7.3 1.4 0 1.8-.6l1.3-2.3c.6-.7.4-1.5-.2-1.9zm-.5 1.5l-1.2 2.2c-.2.4-.4.4-.8.3l-1.3-.6h-.2a7 7 0 0 1-2.8 1.6l-.1.2-.1 1.2v.3c0 .3-.2.4-.5.4H8.1c-.3 0-.5-.2-.5-.5L7.5 17c0-.1 0-.2-.2-.2-1-.3-1.9-.9-2.7-1.6h-.3l-1.3.6c-.3.1-.6.1-.7-.2L1 13.4c-.2-.3-.1-.5.2-.7l1.2-.8.1-.2a8.6 8.6 0 0 1 0-3.2l-.1-.2-1.2-1c-.3-.2-.3-.4-.1-.7l1.3-2.2c.1-.3.4-.4.7-.3l1.4.6.7-.5c.7-.5 1.4-.9 2.2-1.1l.2-.2.1-1.4c0-.3.2-.5.5-.5h2.6c.3 0 .5.2.5.5l.1 1.5.2.2c1 .3 1.9.9 2.7 1.6h.3l1.3-.6c.3-.1.6-.1.7.2l1.3 2.3c.2.3.1.5-.2.7l-1.2.8-.1.2c.2 1.1.2 2.1 0 3.2l.1.2 1.2.8c.3.2.4.5.2.8zM9.5 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4c.1-2.2-1.8-4-4-4zm0 7.1A3.1 3.1 0 0 1 6.4 10c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"
                      />
                    </svg>
                  </span>
                  <span className="menu-item-text">
                    Mes informations personnelles
                  </span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-item-link"
                  href="https://www.sephora.fr/profil/?is_communication_link=true"
                >
                  <span className="menu-item-icon">
                    <svg
                      className="svg-inline message-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={16}
                    >
                      <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0-1h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm8.783 7.374l-.57.822-9.476-6.57.57-.822 9.476 6.57zm7.53-6.575l.61.792-8.581 6.61-.61-.792 8.581-6.61z" />
                    </svg>
                  </span>
                  <span className="menu-item-text">
                    Mes communications
                  </span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-item-link"
                  href="https://www.sephora.fr/aide-sephora/"
                  target=""
                >
                  <span className="menu-item-icon">
                    <svg
                      className="help-icon color-red "
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={19}
                      viewBox="0 0 19 19"
                    >
                      <path d="M9.5 19C4.3 19 0 14.7 0 9.5 0 4.3 4.3 0 9.5 0 14.7 0 19 4.3 19 9.5 19 14.7 14.7 19 9.5 19ZM9.5 18C14.2 18 18 14.2 18 9.5 18 4.8 14.2 1 9.5 1 4.8 1 1 4.8 1 9.5 1 14.2 4.8 18 9.5 18ZM9 12L10.1 12C10.1 11.2 10.3 10.5 10.8 10 11.7 9.2 12.2 8.7 12.2 7.8 12.2 6.2 11 5.1 9.5 5.1 8.6 5.1 7.7 5.5 7.2 6.2 6.8 6.7 6.6 7.2 6.6 8L7.7 8C7.7 7.5 7.8 7.3 7.9 7.1 8.2 6.7 8.9 6.2 9.5 6.2 10.3 6.2 11 6.9 11 7.8 11 8.2 10.8 8.5 10.2 9.1 9.2 10 9.1 10.9 9 12ZM9 14.1L10 14.1 10 13.1 9 13.1 9 14.1Z" />
                    </svg>
                  </span>
                  <span className="menu-item-text">
                    Besoin d’aide ?
                  </span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const LogoMobile = ({navigationOpen, user}) => {
    return <>{navigationOpen && !user &&  <div className="logo-mobile">

    <text x="50%" y="50%" text-anchor="middle" font-size="48" fill="#000000" font-family="Arial" className='LogoText'>MASSI</text>
</div>}</>


}
export default Header;

// menuItems.map((menuItem, index) => (
//     <div className="menu-item" key={index}>
//       <a className="menu-item-link" href={menuItem.href}>
//         <span className="menu-item-icon">{menuItem.svg}</span>
//         <span className="menu-item-text">{menuItem.itemName}</span>
//       </a>
//     </div>
//   ))


const menuItems = [
    {
      itemName: "Se connecter",
      href: "https://www.sephora.fr/connexion/",
      svg: (
        <svg
          width={17}
          height={21}
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      itemName: "Mon beauty compte",
      href: "https://www.sephora.fr/mon-compte/",
      svg: (
        <svg
          className="svg-inline account-icon color-red"
          xmlns="http://www.w3.org/2000/svg"
          width={21}
          height={22}
          viewBox="0 0 21 22"
        >
          <path d="M9.9 10.5C6.2 10.5 2.8 12.7 1.4 16.2L0.7 18.1C0.6 18.4 0.5 18.7 0.5 19 0.5 20.4 1.6 21.5 3 21.5L18 21.5C18.3 21.5 18.6 21.4 18.9 21.3 20.2 20.8 20.8 19.3 20.3 18.1L19.6 16.2C18.2 12.7 14.8 10.5 11.1 10.5L9.9 10.5ZM10.2 0.5C8.3 0.5 6.7 2.1 6.7 4L6.7 4.4C6.7 6.3 8.3 7.9 10.2 7.9L10.7 7.9C12.6 7.9 14.2 6.3 14.2 4.4L14.2 4C14.2 2.1 12.6 0.5 10.7 0.5L10.2 0.5Z" />
        </svg>
      ),
    },
    {
      itemName: "Mes achats",
      href: "https://www.sephora.fr/mes-achats/",
      svg: (
        <svg
          className="svg-inline basket-icon color-red"
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={18}
          viewBox="0 0 22 18"
        >
          <path d="M0.7 5.5L4.4 17.2 18.2 17.2 21.3 5.5 0.7 5.5Z" />
          <path d="M6.5 5.9C7 2.5 8.5 0.9 11.1 0.9 13.8 0.9 15.2 2.5 15.5 5.9" />
        </svg>
      ),
    },
    {
      itemName: "Retours & échanges",
      href: "https://www.sephora.fr/retours-exchanges/",
      svg: (
        <svg
          width={21}
          height={20}
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3333 7.66663H7.66667C7.02467 7.66663 6.5 8.1913 6.5 8.8333V12.1666C6.5 12.8086 7.02467 13.3333 7.66667 13.3333H20.3333C20.9753 13.3333 21.5 12.8086 21.5 12.1666V8.8333C21.5 8.1913 20.9753 7.66663 20.3333 7.66663ZM2.16667 16.5C1.18133 16.5 0.375 17.3063 0.375 18.2916C0.375 19.2769 1.18133 20.0833 2.16667 20.0833H18.8333C19.8187 20.0833 20.625 19.2769 20.625 18.2916C20.625 17.3063 19.8187 16.5 18.8333 16.5H2.16667ZM13.8333 0.75H7.16667C6.52317 0.75 6 1.27317 6 1.91663V4.66663H14V1.91663C14 1.27317 13.4768 0.75 13.8333 0.75Z"
            fill="#222B45"
          />
        </svg>
      ),
    },
    {
      itemName: "Echantillons offerts",
      href: "https://www.sephora.fr/e-shop/landing",
      svg: (
        <svg
          width={22}
          height={21}
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.375 0.75C0.375 0.336579 0.711579 0 1.125 0H20.875C21.2884 0 21.625 0.336579 21.625 0.75V8.25H20.125V1.5H1.875V8.25H0.375V0.75ZM0.375 9.75C0.375 9.33658 0.711579 9 1.125 9H3V18.75H0.375C0.336579 18.75 0.3125 18.7322 0.296572 18.7121C0.280644 18.6921 0.272949 18.6714 0.27511 18.6504L0.703583 10.9004C0.711595 10.8551 0.732838 10.8128 0.764618 10.7786C0.796398 10.7445 0.836203 10.7206 0.879024 10.7092C0.921845 10.6978 0.966204 10.6995 1.00773 10.7142C1.04926 10.7289 1.08673 10.7566 1.11658 10.7945C1.14642 10.8324 1.16769 10.8792 1.17757 10.9304L1.60411 18.6804C1.61213 18.7257 1.63281 18.768 1.66467 18.8021C1.69653 18.8362 1.73639 18.8601 1.77921 18.8715C1.82203 18.8829 1.8668 18.8819 1.90937 18.8685C1.95195 18.8551 1.99117 18.8297 2.02442 18.7944C2.05767 18.759 2.08378 18.7147 2.10011 18.6652C2.11644 18.6157 2.12249 18.5634 2.11856 18.5111L1.69158 10.7611H20.125V9.75H13.625V11.25H10.375V9.75H3.375V11.25H0.375V9.75ZM21.625 19.5H0.375C0.336579 19.5 0.3125 19.5178 0.296572 19.5379C0.280644 19.558 0.272949 19.5786 0.27511 19.5996L0.703583 27.3496C0.711595 27.3949 0.732838 27.4372 0.764618 27.4714C0.796398 27.5055 0.836203 27.5294 0.879024 27.5408C0.921845 27.5522 0.966204 27.5505 1.00773 27.5358C1.04926 27.5211 1.08673 27.4934 1.11658 27.4555C1.14642 27.4176 1.16769 27.3708 1.17757 27.3196L1.60411 19.5696C1.61213 19.5243 1.63281 19.482 1.66467 19.4479C1.69653 19.4138 1.73639 19.3899 1.77921 19.3785C1.82203 19.3671 1.8668 19.3681 1.90937 19.3815C1.95195 19.3949 1.99117 19.4203 2.02442 19.4556C2.05767 19.491 2.08378 19.5353 2.10011 19.5848C2.11644 19.6343 2.12249 19.6866 2.11856 19.7389L1.69158 27.4889C1.69158 27.6925 1.78864 27.8919 1.96212 28.0632C2.13561 28.2345 2.37599 28.3676 2.63225 28.4436C2.88852 28.5195 3.15021 28.5354 3.40945 28.4899C3.66868 28.4444 3.91653 28.3398 4.13508 28.1866C4.35363 28.0335 4.53717 27.8363 4.67206 27.6087C4.80695 27.3812 4.88867 27.1285 4.91158 26.8666L5.33856 19.1166H20.625L21.054 26.8666C21.077 27.1285 21.1587 27.3812 21.2936 27.6087C21.4285 27.8363 21.612 28.0335 21.8305 28.1866C22.049 28.3398 22.2968 28.4444 22.556 28.4899C22.8153 28.5354 23.077 28.5195 23.3333 28.4436C23.5896 28.3676 23.8301 28.2345 24.0036 28.0632C24.1771 27.8919 24.2742 27.6925 24.2742 27.4889L23.8472 19.7389C23.8432 19.6866 23.8493 19.6343 23.8657 19.5848C23.882 19.5353 23.9081 19.491 23.9413 19.4556C23.9745 19.4203 24.0137 19.3949 24.0563 19.3815C24.0988 19.3681 24.1436 19.3671 24.1864 19.3785C24.2292 19.3899 24.269 19.4138 24.3009 19.4479C24.3328 19.482 24.3535 19.5243 24.3615 19.5696L24.788 27.3196C24.7979 27.3708 24.8192 27.4176 24.849 27.4555C24.8789 27.4934 24.9164 27.5211 24.9579 27.5358C24.9994 27.5505 25.0438 27.5522 25.0866 27.5408C25.1294 27.5294 25.1692 27.5055 25.201 27.4714C25.2328 27.4372 25.254 27.3949 25.262 27.3496L25.6895 19.5996C25.6927 19.5786 25.6849 19.558 25.6691 19.5379C25.6532 19.5178 25.6291 19.5 25.5917 19.5H21.625Z" fill="#222B45" />
        </svg>
      ),
    },
    {
        itemName: "Suivre Ma commande",
        href: "https://www.sephora.fr/track-order",
        svg: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={27}
            height={21}
            viewBox="0 0 27 21"
          >
            <g fill="none" fillRule="evenodd">
              <g stroke="#000">
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.852 6.285V4.833c0-.552.448-1 1-1H24.52c.552 0 1 .448 1 1V19.5c0 .552-.448 1-1 1H9.852c-.552 0-1-.448-1-1v-1.773"
                          transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
                        />
                        <path
                          strokeLinecap="round"
                          d="M5.5 8.667L17.039 8.667M3 12L14.539 12M.5 15.333L12.039 15.333"
                          transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
                        />
                        <path
                          strokeLinejoin="round"
                          d="M14.852.5h4.465c.552 0 1 .448 1 1v2.333l-6.465-.029V1.5c0-.552.448-1 1-1z"
                          transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        ),
      },
      {
        itemName: "Mon programme de fidélité",
        href: "https://www.sephora.fr/programme-fidelite",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="14"
            viewBox="0 0 19 14"
          >
            <path d="M16.4 14L3.1 14C1.5 14 0 12.7 0 11.2L0 2.6C0 1.2 1.5 0 3.1 0L16.4 0C17.9 0 19 1.2 19 2.6L19 11.2C19 12.7 17.9 14 16.4 14ZM16.4 13C17.3 13 18 12.3 18 11.4L18 2.6C18 1.7 17.3 1 16.4 1L2.8 1C1.9 1 1 1.7 1 2.6L1 11.4C1 12.3 1.9 13 2.8 13L16.4 13ZM9.2 7C8.9 6.1 8.8 4.7 11 3C10.4 3.7 10 4.7 10.9 7C11.5 8.7 10 10.3 9 11C9.4 10.5 10.1 9.6 9.2 7Z" />
          </svg>
        ),
      },
      {
        itemName: "Prendre un rendez-vous",
        href: "https://www.sephora.fr/rdv",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M14 3L16 5H4L6 3H4L3 2V18H17V2L16 3H14ZM14 14V16H12V14H10V16H8V14H6V12H14V14ZM14 10V12H6V10H14ZM8 7V9H6V7H8Z" />
          </svg>
        ),
      },
      {
        itemName: "Mes communications",
        href: "https://www.sephora.fr/communications",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
            viewBox="0 0 24 16"
          >
            <path d="M2 1A1 1 0 0 0 1 2v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0-1h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm8.783 7.374l-.57.822-9.476-6.57.57-.822 9.476 6.57zm7.53-6.575l.61.792-8.581 6.61-.61-.792 8.581-6.61z" />
          </svg>
        ),
      },
      {
        itemName: "Besoin d'aide",
        href: "https://www.sephora.fr/aide",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
          >
            <path d="M9.5 19C4.3 19 0 14.7 0 9.5 0 4.3 4.3 0 9.5 0 14.7 0 19 4.3 19 9.5 19 14.7 14.7 19 9.5 19ZM9.5 18C14.2 18 18 14.2 18 9.5 18 4.8 14.2 1 9.5 1 4.8 1 1 4.8 1 9.5 1 14.2 4.8 18 9.5 18ZM9 12L10.1 12C10.1 11.2 10.3 10.5 10.8 10 11.7 9.2 12.2 8.7 12.2 7.8 12.2 6.2 11 5.1 9.5 5.1 8.6 5.1 7.7 5.5 7.2 6.2 6.8 6.7 6.6 7.2 6.6 8L7.7 8C7.7 7.5 7.8 7.3 7.9 7.1 8.2 6.7 8.9 6.2 9.5 6.2 10.3 6.2 11 6.9 11 7.8 11 8.2 10.8 8.5 10.2 9.1 9.6 9.7 9.4 10 9.4 10.3L9.3 10C9 10.1 9 10.2 9 10.3 9 10.6 9 11 9.5 11 9.8 11 10 11 10 11L11 11C11 11 11 11 11 11.1 11 11.3 11 11.4 10.9 11.5 10.7 11.7 10.5 11.9 10.2 12 10 12 9.7 12 9.5 12 9ZM8.5 15.4C8.5 15.7 8.3 15.9 8 15.9 7.7 15.9 7.5 15.7 7.5 15.4 7.5 15.1 7.7 14.9 8 14.9 8.3 14.9 8.5 15.1 8.5 15.4Z" />
          </svg>
        ),
      },
      { itemName: "Mes Information",
      href: "https://www.sephora.fr/aide",
        svg:( <svg
            className="filter-icon color-red"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
          >
            <path
              fill="#000"
              d="M18.4 11.9l-.7-.5-.1-.2V8.8l.1-.2.7-.5c.7-.5.9-1.3.4-2l-1.3-2.2c-.4-.7-1.2-.9-1.9-.6a3 3 0 0 0-.8.4h-.2c-.6-.5-1.3-.9-2-1.2a.2.2 0 0 1-.2-.2l-.1-.9C12.2.6 11.6 0 10.8 0H8.1c-.7 0-1.2.5-1.4 1.2l-.1 1-.1.2c-.7.3-1.4.7-2 1.2-.1.1-.2.1-.2 0l-.9-.3-.5-.2c-.7 0-1.1.3-1.4.7L.2 6.1c-.4.7-.2 1.5.4 2l.7.5.1.2v2.4l-.1.2-.6.4c-.7.5-.9 1.3-.5 2L1.5 16c.4.7 1.2 1 1.9.6l.7-.3h.3c.6.5 1.3.9 2 1.2l.2.2.1.9c.1.7.7 1.3 1.4 1.3h2.7c.7 0 1.3-.5 1.4-1.2l.1-1 .1-.2c.7-.3 1.4-.7 2-1.2.1-.1.1-.1.2 0l.9.4c.7.3 1.4 0 1.8-.6l1.3-2.3c.6-.7.4-1.5-.2-1.9zm-.5 1.5l-1.2 2.2c-.2.4-.4.4-.8.3l-1.3-.6h-.2a7 7 0 0 1-2.8 1.6l-.1.2-.1 1.2v.3c0 .3-.2.4-.5.4H8.1c-.3 0-.5-.2-.5-.5L7.5 17c0-.1 0-.2-.2-.2-1-.3-1.9-.9-2.7-1.6h-.3l-1.3.6c-.3.1-.6.1-.7-.2L1 13.4c-.2-.3-.1-.5.2-.7l1.2-.8.1-.2a8.6 8.6 0 0 1 0-3.2l-.1-.2-1.2-1c-.3-.2-.3-.4-.1-.7l1.3-2.2c.1-.3.4-.4.7-.3l1.4.6.7-.5c.7-.5 1.4-.9 2.2-1.1l.2-.2.1-1.4c0-.3.2-.5.5-.5h2.6c.3 0 .5.2.5.5l.1 1.5.2.2c1 .3 1.9.9 2.7 1.6h.3l1.3-.6c.3-.1.6-.1.7.2l1.3 2.3c.2.3.1.5-.2.7l-1.2.8-.1.2c.2 1.1.2 2.1 0 3.2l.1.2 1.2.8c.3.2.4.5.2.8zM9.5 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4c.1-2.2-1.8-4-4-4zm0 7.1A3.1 3.1 0 0 1 6.4 10c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"
            />
          </svg>)
      }
    ];
    

  

    const BottomTabs =()=> {
    return  ( 
    <div class="w-full h-screen">
<section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"/> 
	<section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
		<div id="tabs" class="flex justify-between">
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" class="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <path d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z" fill="currentColor" fill-opacity="0.1"></path>
			        <path d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z" fill="currentColor"></path>
			        <path d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"></path>
			        <rect fill="currentColor" transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) " x="17" y="10.3137085" width="30" height="2" rx="1"></rect>
			        <rect fill="currentColor" transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) " x="-3" y="10.3137085" width="30" height="2" rx="1"></rect>
			    </g>
				</svg>
				<span class="tab tab-home block text-xs">Home</span>
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" class="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		        <path d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z" fill="currentColor" opacity="0.1"></path>
		        <g transform="translate(2.000000, 3.000000)">
		            <path d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z" fill="currentColor" transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "></path>
		            <circle stroke="currentColor" stroke-width="2" cx="27.5" cy="27.5" r="7.5"></circle>
		        </g>
		    	</g>
				</svg>
				<span class="tab tab-kategori block text-xs">Category</span>
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" class="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		        	<path d="M20.5890101,0.254646884 C12.8696785,5.50211755 8.0025785,14.258415 14.1941217,18.8708225 C23.16683,25.5550669 13.3362326,40.2698884 33.1021758,38.4149164 C29.6814884,40.8311956 25.5065164,42.2507054 21,42.2507054 C9.40202025,42.2507054 0,32.8486852 0,21.2507054 C0,9.79003409 9.18071714,0.473634138 20.5890101,0.254646884 Z" fill="currentColor" opacity="0.1"></path>
		        	<path d="M25.9500282,20.3643496 L22.4308312,38.2677802 C22.3775703,38.5387376 22.1147395,38.7152155 21.8437821,38.6619546 C21.6570955,38.6252584 21.507413,38.4857901 21.4576354,38.3021581 L16.5951895,20.3643496 L20.099732,4.44663907 C20.1385204,4.27046145 20.2692032,4.12883813 20.4417012,4.07604096 C20.7057521,3.99522179 20.9853245,4.14376046 21.0661436,4.40781135 L25.9500282,20.3643496 Z M21.3022963,22.2852638 C22.4068658,22.2852638 23.3022963,21.3898333 23.3022963,20.2852638 C23.3022963,19.1806943 22.4068658,18.2852638 21.3022963,18.2852638 C20.1977268,18.2852638 19.3022963,19.1806943 19.3022963,20.2852638 C19.3022963,21.3898333 20.1977268,22.2852638 21.3022963,22.2852638 Z" fill="currentColor" transform="translate(21.272609, 20.629524) rotate(-315.000000) translate(-21.272609, -20.629524) "></path>
		        	<circle stroke="currentColor" stroke-width="2" cx="21" cy="21" r="20"></circle>
		    		</g>
					</svg>
				<span class="tab tab-explore block text-xs">Explore</span>
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" class="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		        <path d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z" fill="currentColor" opacity="0.1"></path>
		        <g transform="translate(2.000000, 3.000000)">
		            <path d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z" fill="currentColor" transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "></path>
		            <circle stroke="currentColor" stroke-width="2" cx="27.5" cy="27.5" r="7.5"></circle>
		        </g>
		    	</g>
				</svg>
				<span class="tab tab-whishlist block text-xs">Whishlist</span>
			</a>
			<a href='#' class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
			<span class="">
        <svg  width="25" height="25" class="inline-block mb-1" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="black"></path>
          </svg><div class="tooltip-container-login hide"><span class="tooltip-text">Profitez de vos offres<span style={{"color":"#D50032"}}>vos bons plans</span></span><span class="tooltip-close"></span></div><div class="offer-gift-icon"><div class="offers-count-wrap hide"><div class="offers-count"></div></div></div></span>
				<span class="tab tab-account block text-xs">Account</span>
			</a>
		</div>
	</section>
</div>)

    }


  const BellAndUser = function({handleSetNavigationIsOpen}){
      
        return (
          <label className="stack_stack__iZkUS stack inline-flex p-4 sm:p-1" data-version="v1" style={{
            '-stackFlex': 'initial',
            '-stackDirection': 'row',
            '-stackAlign': 'center',
            '-stackJustify': 'flex-start',
            '-stackPadding': '0px',
            '-stackGap': '8px'
          }}>
            <div className=''>
              <button   className="mx-2 bell_btn__yil2q ring-1 ring-black rounded-full mt-[0.2em]"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:rkl:"
                data-state="closed"
                aria-label="notifications"
  
                data-testid="notifications/bell"
              >
                <span className="bell_buttonContent__IPiYG">
                  <div className="bell_icon__U0zUM">
                    <svg
                      data-testid="geist-icon"
                      height={16}
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width={16}
                      style={{ width: '16px', height: '16px', color: 'var(--ds-gray-900)' }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.9925 0C4.95079 0 2.485 2.46579 2.485 5.5075V8.22669C2.485 8.77318 2.21321 9.28388 1.75992 9.58912L1.33108 9.8779L1 10.1009V10.5V11.25V12H1.75H14.25H15V11.25V10.5V10.0986L14.666 9.87596L14.2306 9.58565C13.7741 9.28137 13.5 8.76913 13.5 8.22059V5.5075C13.5 2.46579 11.0342 0 7.9925 0ZM3.985 5.5075C3.985 3.29422 5.77922 1.5 7.9925 1.5C10.2058 1.5 12 3.29422 12 5.5075V8.22059C12 9.09029 12.36 9.91233 12.9801 10.5H3.01224C3.62799 9.91235 3.985 9.09303 3.985 8.22669V5.5075ZM10.7486 13.5H9.16778L9.16337 13.5133C9.09591 13.716 8.94546 13.9098 8.72067 14.0501C8.52343 14.1732 8.27577 14.25 8.00002 14.25C7.72426 14.25 7.47661 14.1732 7.27936 14.0501C7.05458 13.9098 6.90412 13.716 6.83666 13.5133L6.83225 13.5H5.25143L5.41335 13.9867C5.60126 14.5516 5.99263 15.0152 6.48523 15.3226C6.92164 15.5949 7.44461 15.75 8.00002 15.75C8.55542 15.75 9.07839 15.5949 9.5148 15.3226C10.0074 15.0152 10.3988 14.5516 10.5867 13.9867L10.7486 13.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </div>
            <div className="geist-hide-on-tablet pl-4 sm:pl-0">
              <div className="popover_details__kmChm" data-version="v1">
                <div className="popover_summary__Snv4V">
                  <div className="popover_trigger__0kdp5">
                    <button
                      className="geist-reset geist-kb-outline avatar-popover-link_trigger__lBp7C"
                      data-testid="avatar-popover/trigger"
                      style={{ cursor: 'pointer' }}
                    >
                      <span
                        aria-label="naser2"
                        className="avatar_avatar__3ccqO"
                        data-geist-avatar
                        data-version="v1"
                        role="img"
                        style={{ '-size': '32px' }}
                      >
                        <img
                          data-version="v1"
                          alt="naser2"
                          title="naser2"
                          loading="eager"
                          width={32}
                          height={32}
                          decoding="async"
                          data-nimg={1}
                          className="image_intrinsic__ulrJk"
                          style={{ color: 'transparent' }}
                          src="https://vercel.com/api/www/avatar/a5a84908c92a79d972c75a3900c3fa516b59a300?s=64"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div aria-hidden="true" className="popover_menu__X_Gc9" role="menu" />
              </div>
            </div>
            {/* <label className="geist-show-on-tablet -pr-12 flex" htmlFor="mobile-navigation" onClick={()=>handleSetNavigationIsOpen}>
              <div 
                aria-label="Close menu"
                className="menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob"
                data-expanded="true"
                data-testid="mobile-menu/trigger"
                type="button"
              >
                <div className="menu-toggle_bar__GUd1o" data-position="top" />
                <div className="menu-toggle_bar__GUd1o" data-position="bottom" />
              </div>
        
            </label> */}
          </label>
        );  
    }
    