import React from 'react';
import { MobileLinks } from './nav/MobileMenu';
import { allCategories, navigation } from '@/data';

// export const NavCategoryListItems = ({ categoryName, categoryItems }) => {
//   console.log("NavCategoryListItems-categoryItemsssss--", categoryItems)
//  return  (
//   <li className="nav-top-category tc-top-category is-dropdown-submenu-parent opens-right" data-tc-category-name="hair" role="menuitem" aria-haspopup="true" aria-label={categoryName} data-is-click="false">
//     <a className="js-tc-nav-click-event top-category-link text-center has-sub-menu" style={{ '--top-category-link-color': 'black' }} href={`https://www.sephora.fr/shop/cheveux-c307/?listview=true`}>
//       {categoryName}
//     </a>
//     <ul className="top-category-menu menu-vertical menu submenu is-dropdown-submenu first-sub vertical fully-loaded" data-submenu="" role="menubar" style={{}}>
//       <div className="nav-level-3-wrapper">
//         {categoryItems.map((item, index) => {
//            console.log("NavCategoryListItems-Item", item)
//           return (
//             <MobileLinks key={index} categoryItems={categoryItems}/>
       
//         )})}
//       </div>
//     </ul>
//   </li>
// )
// }





const HeaderNavigationLinks = ({ dataToMap }) => {
 
  return (
    <div>
      {/* Body and Bath */}
      <div className="nav-level-3 js-nav-3 active C304" data-cat-id="C304" data-default-active="true" data-tc-category-name="body and bath">
        {/* Body and Bath content */}
      </div>

      {/* Hair */}
      <li className="nav-top-category tc-top-category is-dropdown-submenu-parent opens-right" data-tc-category-name="hair" role="menuitem" aria-haspopup="true" aria-label="cheveux" data-is-click="false">
        <a className="js-tc-nav-click-event top-category-link text-center has-sub-menu " style={{ '-topCategoryLinkColor': 'black' }} href="https://www.sephora.fr/shop/cheveux-c307/?listview=true">
          Cheveuxxxx
        </a>
        <ul className="top-category-menu menu-vertical menu submenu is-dropdown-submenu first-sub vertical fully-loaded" data-submenu role="menubar" style={{}}>
          <div className="nav-level-3-wrapper">
   
          {dataToMap.map((category, index) => { 
              console.log("CATEGORY-CONTENT", category.categoryContent)
             
                   return  <MobileLinks dataToMap={allCategories}  /> 
            
             })} 
          </div>
        </ul>
      </li>

    </div>
  );
};

export default HeaderNavigationLinks;
