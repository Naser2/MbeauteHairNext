'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import PropertyCard from '@/components/PropertyCard';
import Spinner from '@/components/Spinner';
import PropertySearchForm from '@/components/PropertySearchForm';

const SearchResultsPage = () => {
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get('location');
  const propertyType = searchParams.get('propertyType');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.log(eror);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [location, propertyType]);

  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <section className='px-4 py-6'>
          <div className='container-xl lg:container m-auto px-4 py-6'>
            <Link
              href='/properties'
              className='flex items-center text-blue-500 hover:underline mb-3'
            >
              <FaArrowAltCircleLeft className='mr-2 mb-1' /> Back To Properties
            </Link>
            <h1 className='text-xl sm:text-2xl mb-4'>Search Results</h1>
            {properties.length === 0 ? (
              <p>No search results found</p>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {properties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
export default SearchResultsPage;


const suggestions = [
  { label: 'Printemps-Été 2024', href: '/fr/mode/collection/printemps-ete-2024/' },
  { label: 'CHANCE', href: '/fr/parfums/chance/' },
  { label: 'COCO CRUSH', href: '/fr/joaillerie/coco-crush-les-rencontres/' },
  { label: 'Points de vente', href: '/fr/storelocator/' }
];

import { useState } from 'react';

export const SearchInput = ({ suggestions, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="search__wrapper">
      <div className="search__close js-search-overlay-close">
        <button type="button" data-test="btnCloseSerach" className="button search-close">
          <span className="is-capitalize search-close__text">Fermer</span>
        </button>
      </div>
      <div data-test="ovlySearchPopUp" className="search__container">
        <div className="search__content js-search-content">
          <div className="search__bar">
            <div role="heading" aria-level="1" tabIndex="-1" className="is-sr-only js-search_bar">
              Rechercher
            </div>
            <div role="search" className="search__form js-search-form" style={{ maxWidth: '100%' }}>
              <p id="search-describedby" className={`is-hidden ${isInputFocused ? '' : 'fade-in'}`}>
                Les liens suggérés s’affichent en fonction de votre recherche
              </p>
              <p aria-live="polite" className="is-sr-only"></p>
              <div className="label-input search__input has-icon">
                <label htmlFor="searchInput" data-test="txtPlaceHolderSearch" className="label-input__label search__input__label">
                  <span>{placeholder}</span>
                </label>
                <input
                  type="search"
                  id="searchInput"
                  data-test="txtSearchTerm"
                  name="text"
                  aria-describedby="search-describedby"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  required
                  aria-required="true"
                  title="Rechercher"
                  className="label-input__input search__input__field text-ltr"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>
              <button type="button" data-test="btnClearSearchTerm" disabled="" aria-disabled="true" className="button search__button search__cancel js-clear-text" style={{ visibility: 'hidden', opacity: 0 }}>
                <span className="search__cancel__text">Effacer</span>
                <svg data-test="" focusable="false" viewBox="0 0 1 1" aria-hidden="true" className="icon is-medium is-clear-text">
                  <use href="/_ui/responsive/theme-onechanel/assets/icons.svg#clear-text"></use>
                </svg>
              </button>
              <button type="submit" data-test="btnSubmitSearch" disabled="" aria-disabled="true" className="button search__button search__submit js-search-submit">
                <svg data-test="" focusable="false" viewBox="0 0 1 1" aria-hidden="true" className="icon is-large is-search">
                  <use href="/_ui/responsive/theme-onechanel/assets/icons.svg#search"></use>
                </svg>
                <span className="is-sr-only">Valider votre recherche</span>
              </button>
            </div>
          </div>
          <div className="search__links leave" hidden=""></div>
          <div className="search__recent-container enter leave">
            <div className="search__recents search__quick-links">
              <div className="search__heading">
                <div role="heading" aria-level="2" data-test="lblQuickLink">
                  Suggestions
                </div>
              </div>
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li key={index} data-dest="lblQuickLink_categoryName">
                    <a href={suggestion.href} rel="nofollow" type="button" data-event-label={suggestion.label} className="button search__recents__link collapse-panel__button">
                      {suggestion.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


