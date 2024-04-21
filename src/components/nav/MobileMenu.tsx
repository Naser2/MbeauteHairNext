"use client";
import { Fragment } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { navigation } from "@/data";
import { classNames } from "@/utils";
import { useMenuOpen } from "@/state";
const refinementData = [{
  name:"Cheveux", 
  categoryContent:[
  "Cheveux",
  "-25% sur une sélection soin cheveux (1)",
  "Beauty Days Cheveux (1)",
  "Nouveautés (2)",
  "Meilleures ventes 🔥 (78)",
  "Soin cheveux parapharmacie (149)",
  "Coffret cheveux (84)",
  "Routine cheveux (28)",
  "Soin Cheveux (1.015)",
  "Accessoires (112)",
  "Coiffant et Fixant (244)",
  "Besoins (938)",
  "Type de cheveux (913)",
  "Compléments alimentaires cheveux (17)",
  "Soin cheveux Clean at Sephora (1)",
  "Cheveux Homme (206)",
  "Grands Formats (10)",
  "Mini soin cheveux (90)",
  "Sephora Collection Soin Cheveux (3)",
  "Guide soin cheveux (1)"
]},
{
  name:"Brossses", 
  categoryContent:[
  "Les Brosses en bois",
  "-25% sur une sélection soin cheveux (1)",
  "Beauty Days Cheveux (1)",
  "Nouveautés (2)",
  "Meilleures ventes 🔥 (78)",
  "Soin cheveux parapharmacie (149)",
  "Coffret cheveux (84)",
  "Routine cheveux (28)",
  "Soin Cheveux (1.015)",
  "Accessoires (112)",
  "Coiffant et Fixant (244)",
  "Besoins (938)",
  "Type de cheveux (913)",
  "Compléments alimentaires cheveux (17)",
  "Soin cheveux Clean at Sephora (1)",
  "Cheveux Homme (206)",
  "Grands Formats (10)",
  "Mini soin cheveux (90)",
  "Sephora Collection Soin Cheveux (3)",
  "Guide soin cheveux (1)"
]},
{
  name:"Moisturizers", 
  categoryContent:[
  "Naturaly Moist",
  "-25% sur une sélection soin cheveux (1)",
  "Beauty Days Cheveux (1)",
  "Nouveautés (2)",
  "Meilleures ventes 🔥 (78)",
  "Soin cheveux parapharmacie (149)",
  "Coffret cheveux (84)",
  "Routine cheveux (28)",
  "Soin Cheveux (1.015)",
  "Accessoires (112)",
  "Coiffant et Fixant (244)",
  "Besoins (938)",
  "Type de cheveux (913)",
  "Compléments alimentaires cheveux (17)",
  "Soin cheveux Clean at Sephora (1)",
  "Cheveux Homme (206)",
  "Grands Formats (10)",
  "Mini soin cheveux (90)",
  "Sephora Collection Soin Cheveux (3)",
  "Guide soin cheveux (1)"
]}
]

// export const RefinementComponent = ({}) => (
//   <div className="refinement-content">
//       <div className="refinement category-refinement">
//           <div className="refinement-active-filters"></div>
//           <input id="category-refinement-desktop" type="checkbox" className="hide" autocomplete="off"/>
//           <div className="refinement-title-wrapper">
//               <label className="refinement-title" data-filterid="category" for="category-refinement-desktop" data-unfold="false">Catégorie</label>
//           </div>
//           <ul className="refinement-container category">
//               <li>
//                   <a className="refinement-link active" href="https://www.sephora.fr/shop/cheveux-c307/">Cheveux</a>
//                   <ul className="category-level-1">
//                       {refinementData.map((item, index) => (
//                           <li key={index}>
//                               <a className="refinement-link category-search-link" title={`Aller à la catégorie: ${item}`} href="#" data-href={`https://www.sephora.fr/${item}`} data-cgid={`cgid-${item.replace(/ /g, "-")}`}>
//                                   <span className="name">{item}</span>
//                               </a>
//                           </li>
//                       ))}
//                   </ul>
//               </li>
//           </ul>
//       </div>
//   </div>
// );

// const refinementData = [
//   "Cheveux",
//   "-25% sur une sélection soin cheveux (1)",
//   "Beauty Days Cheveux (1)",
//   "Nouveautés (2)",
//   "Meilleures ventes 🔥 (78)",
//   "Soin cheveux parapharmacie (149)",
//   "Coffret cheveux (84)",
//   "Routine cheveux (28)",
//   "Soin Cheveux (1.015)",
//   "Accessoires (112)",
//   "Coiffant et Fixant (244)",
//   "Besoins (938)",
//   "Type de cheveux (913)",
//   "Compléments alimentaires cheveux (17)",
//   "Soin cheveux Clean at Sephora (1)",
//   "Cheveux Homme (206)",
//   "Grands Formats (10)",
//   "Mini soin cheveux (90)",
//   "Sephora Collection Soin Cheveux (3)",
//   "Guide soin cheveux (1)"
// ];

const RefinementComponent = ({column}) =>{ 
  console.log("column.section[0]", column.section)
  
  return (<div className="refinement-content">
      <div className="refinement category-refinement">
          <div className="refinement-active-filters"></div>
          <input id="category-refinement-desktop" type="checkbox" className="hide" autoComplete="off"/>

          <div className="refinement-title-wrapper">
              <label className="refinement-title" data-filterid="category" htmlFor="category-refinement-desktop" data-unfold="false">{column.section}</label>
              
          </div>
          <ul className="refinement-container category">
              <li>
                  <a className="refinement-link active" href="https://www.sephora.fr/shop/cheveux-c307/">{column.section}</a>
                  <ul className="category-level-1">
                      {column.sectionItems.map((item, index) => (
                          <li key={index}>
                              <a className="refinement-link category-search-link" title={`Aller à la catégorie: ${item.nav_link_name}`} href="#" data-href={`https://www.sephora.fr/${item.nav_link_name}`} data-cgid={`cgid-${item.href.replace(/ /g, "-")}`}>
                                  <span className="name">{item.nav_link_name}</span>
                              </a>
                          </li>
                      ))}
                  </ul>
              </li>
          </ul>
      </div>
  </div>
)}

export default RefinementComponent;

export function MobileLinks({dataToMap}) {
  console.log("dataToMap-ITEMS", dataToMap)
  return ( 
  
    // <RefinementComponent/>
    <Tab.Group as="div" className="mt-2">
      <div className="border-b border-gray-200">
        <Tab.List className="-mb-px flex space-x-8 px-4">
         
          {dataToMap.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  selected
                    ? "bg-black border-creaam-1 main-text-color-1"
                    : "border-transparent main-text-color-2",
                  "flex-1 whitespace-nowrap border-b-2  !-ml-2 py-4  !pb-2 text-lg font-medium"
                )
              }
            >
              {category.name.toUpperCase()}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels as={Fragment}>
        {dataToMap.map((category) => (
          <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
            {/* <div className="space-y-4">
              {category.featured.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100"
                >
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="nav-advertisment object-cover object-center group-hover:opacity-75"
                  />
                  <div className="flex flex-col justify-end px-4">
                    <div className="bg-crema-dark !bg-opacity-60 !px-4 !py-3 !text-base sm:text-sm absolute !inset-x-0 1bottom-0 !px-4 !max-h-[4.4em]">
                      <a href={item.href} className="font-medium  text-cremalight dark:text-gray-900">
                        <span className="" aria-hidden="true" />
                        {item.name}
                      </a>
                      <p
                        aria-hidden="true"
                        className="!mt-0.1 text-white dark:text-gray-700 sm:mt-1 "
                      >
                    { category.id ==="services" ? "Book Now" : "Shop now"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>*/}
            {category.categoryContent.map((column, columnIdx) => { 
               console.log("COLUMN", column)
              // return  (    <RefinementComponent column={column} key={columnIdx}/>
             return ( <div key={columnIdx} className="space-y-10 !mt-4">
              {/* {column.sectionItems.map((section) => {
                 console.log("COLUMN-SECTION:", section)
              return   */}
               <div key={columnIdx}>
                    <p  id={`${columnIdx}-${category.name}-heading-mobile`}  className="font-medium  main-text-color-1">
                      {column}
                    </p>
                      <ul
                      role="list"
                      aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                      className="mt-2 flex flex-col space-y-3"
                    >
                      {column.columnIdx.map((item) => (
                        <li key={item.name} className="flow-root pt-2 ml-4">
                          <a
                            href={item.href}
                            className="-m-2 block p-2  main-text-color-2"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                {/* })}  */}
              </div>
            )}
          )}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export function MobileMenu() {
  const open = useMenuOpen((s) => s.open);
  const setOpen = useMenuOpen((s) => s.setOpen);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" id="MASSI-MOBILE-HEADER"  className="relative z-40 lg:hidden " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="bg-crema !px-6 sm:px-8 bg-black relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5 rounded-full !mt-4 bg-cremalight ring-1 ring-orange-300!w-23 !h-23 !px-1.5 !py-1.5" style={{"width":"36px"}}>
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 main-text-color1"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <MobileLinks />

              <div className="space-y-6 border-t border-gray-200 !px-2 !py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root pt-3">
                    <a
                      href={page.href}
                      className="-m-2 block !p-4 font-medium  main-text-color-1"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 px-6 py-6">
                <a href="#" className="-m-2 flex items-center !p-2">
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">
                    CAD
                  </span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
