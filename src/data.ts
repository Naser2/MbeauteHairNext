import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

import massi_hero_part3_mobile from "./assets/images/heros/massi_hero_part3_mobile.png";
import massi_hero_part3_desktop from "./assets/images/heros/massi_hero_part3_desktop.png";
export const navigation = {
  categories: [
    {
      id: "services",
      name: "Services",
      hero: {
        desktop: {
          srcSet: massi_hero_part3_desktop.src,
          sizes: '(min-width: 601px) 640px, 100vw',
        },
        mobile: {
          srcSet:massi_hero_part3_mobile.src,
          sizes: '320px',
        },
         alt: 'Hero Image',
         title: 'CHOCOLATE MADEMOISELLE',
          subtitle: 'SERVICES ',
          href: '/coco-mademoiselle',
          cta:'Discover all'
        },
      featured:[ 
        { id:"_jigazxdelt3",
          name: "Hair & Eyelashes Bundle",
          href: "/featured",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
            featured:"20%"
        }],
      sections: [
        [
          {
            id: "thingy1",
            name: "Wigs & extenssion & more",
            items: [
              { name: "13x4 Lace Frontal", href: "#" },
              { name: "5x5 Lace Closure", href: "#" },
              { name: "Deep Wave bundle", href: "#" },
              { name: "Wigs & Frontal Wig", href: "#" },
              { name: "13X4 Deep Curly Transparent Lace Frontal Wig", href: "#" },
              { name: "Eyelashes", href: "#" },
              { name: "Kits", href: "/kits" },
            ],
          },
          {
            id: "thingy2",
            name: "SECTION 2",
            items: [
              { name: "13x4 Lace Frontal", href: "#" },
              { name: "5x5 Lace Closure", href: "#" },
              { name: "Deep Wave bundle", href: "#" },
              { name: "Wigs & Frontal Wig", href: "#" },
              { name: "13X4 Deep Curly Transparent Lace Frontal Wig", href: "#" },
              { name: "Eyelashes", href: "#" },
              { name: "Kits", href: "/kits" },
            ],
          },
          {
            id: "thingy3",
            name: "SECTION 3",
            items: [
              { name: "13x4 Lace Frontal", href: "#" },
              { name: "5x5 Lace Closure", href: "#" },
              { name: "Deep Wave bundle", href: "#" },
              { name: "Wigs & Frontal Wig", href: "#" },
              { name: "13X4 Deep Curly Transparent Lace Frontal Wig", href: "#" },
              { name: "Eyelashes", href: "#" },
              { name: "Kits", href: "/kits" },
            ],
          },
          
          
          
        ]
      ]
    },
    {
      id: "accessories",
      name: "Accessories",
      hero: {
        desktop: {
          srcSet: 'https://example.com/desktop-image.jpg',
          sizes: '(min-width: 601px) 640px, 100vw',
        },
        mobile: {
          srcSet: 'https://example.com/mobile-image.jpg',
          sizes: '320px',
        },
         alt: 'Hero Image',
         title: 'MASSI ACCESSOIRIES',
          subtitle: 'New glow',
          href: '/services',
          cta:'Discover all'
        },
      featured: [
        { id:"_gdsigmzxdeler",
          name: "Season Discount",
          href: "/discounts",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
          imageAlt:
            "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
            discount:"20%"
        }],
        
      sections: [
        [
          {
            id: "accessories",
            name: " Accessories",
            items: [
              { name: " Lace Closure / Frontal", href: "/laces" },
              { name: "Shampoo", href: "/laces" },
              { name: "Deep Wave bundle", href: "/waves" },
              { name: "Split End Therapy", href: "#" },
              { name: "Healthy hair dryers", href: "#" },
              { name: "Mosturizer", href: "/moisturizer" },
              { name: "Eyelashes", href: "#" },
              { name: "rosemary Mint Scalp", href: "/kits" },
              { name: "Mosturizer", href: "/moisturizer" },
            ],
          },
          {
            id: "kits",
            name: "kits",
            items: [
              { name: "Massi's Picks", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "kits Sale", href: "#" },
            ],
          },
        ],
       
      ],
    },
  ],
  pages: [
    { name: "Porfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/api/auth" },
  ],
};

export const product = {
  name: "Basic Tee",
  price: "$35",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};

export const policies = [
  {
    name: "International delivery",
    icon: GlobeAmericasIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];

export const reviews = {
  average: 3.9,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
      `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
    // More reviews...
  ],
};

export const relatedProducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  // More products...
];

export const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
};


export const allCategories = [
   { id:"products",
    name: "Products",
    categoryContent: [
      { section: "Item 1", sectionItems:  [{nav_link_name: "Shampoing homme", href: "/shampoing_homme"}] },
      { section: "Item 2",  sectionItems:  [ {nav_link_name: "Coiffant & Fixant", href: "/coiffant_&_fixant" }] }
    ]
  },
  
  {  id:"services",
     name: "Seuurvices",
     hero: {
      desktop: {
        srcSet: 'https://example.com/desktop-image.jpg',
        sizes: '(min-width: 601px) 640px, 100vw',
      },
      mobile: {
        srcSet: 'https://example.com/mobile-image.jpg',
        sizes: '320px',
      },
       alt: 'Hero Image',
       title: 'CHOCOLATE MADEMOISELLE',
        subtitle: 'New glow',
        href: '/coco-mademoiselle'
      },
    
  categoryContent: [  
 { section:"Overall", sectionItems: [ { nav_link_name: "Voir tout", href: "/voir_tout" }, { nav_link_name: "-25% sur une sélection soin cheveux", href: "/-25%_sur_une_selection_soin_cheveux" },
      { nav_link_name: "Beauty Days Cheveux", href: "/beauty_days_cheveux" }, { nav_link_name: "Nouveautés", href: "/nouveautes" },
      { nav_link_name: "Meilleures ventes 🔥", href: "/meilleures_ventes" },
       { nav_link_name: "Soin cheveux parapharmacie", href: "/soin_cheveux_parapharmacie" }, 
      { nav_link_name: "Coffret cheveux", href: "/coffret_cheveux" }, { nav_link_name: "Routine cheveux", href: "/routine_cheveux" } ]},
 {section: "Soin Cheveux" , sectionItems: [{ nav_link_name: "Shampoing", href: "/shampoing" },
    { nav_link_name: "Après-shampoing", href: "/apres_shampoing" }, 
    { nav_link_name: "Masque cheveux", href: "/masque_cheveux" }, { nav_link_name: "Soin sans rinçage", href: "/soin_sans_rinçage" }, { nav_link_name: "Huile cheveux", href: "/huile_cheveux" }, { nav_link_name: "Coloration cheveux", href: "/coloration_cheveux" }, { nav_link_name: "Shampoing sec", href: "/shampoing_sec" }, { nav_link_name: "Parfum cheveux", href: "/parfum_cheveux" }, { nav_link_name: "Shampoing solide", href: "/shampoing_solide" }, { nav_link_name: "Gommage cuir chevelu", href: "/gommage_cuir_chevelu" } ]},
 {section:"Accessoires", sectionItems: [
   { nav_link_name: "Brosse & peigne", href: "/brosse_&_peigne" }, { nav_link_name: "Lisseur & boucleur", href: "/lisseur_&_boucleur" }, 
   { nav_link_name: "Sèche cheveux", href: "/seche_cheveux" } ]
  },
 { section: "Coiffant et Fixant", sectionItems: [ { nav_link_name: "Spray", href: "/spray" },
     { nav_link_name: "Crème", href: "/creme" } ]},

{section:"Besoins", sectionItems: [
    { nav_link_name: "Anti-chute", href: "/anti-chute" }, { nav_link_name: "Hydratant & Nourrissant", href: "/hydratant_&_nourrissant" },
    { nav_link_name: "Volume", href: "/volume" },
    { nav_link_name: "Cuir chevelu", href: "/cuir_chevelu" }, 
    { nav_link_name: "Protection solaire", href: "/protection_solaire" }, 
    { nav_link_name: "Boucles et ondulations", href: "/boucles_et_ondulations" }, 
    { nav_link_name: "Brillance & lissage", href: "/brillance_&_lissage" },
    { nav_link_name: "Anti-pelliculaire & apaisant", href: "/anti-pelliculaire_&_apaisant" },
    { nav_link_name: "Cheveux colorés", href: "/cheveux_colores" }
   ]
  },
   
 {section:  "Type de cheveux",sectionItems: [{ nav_link_name: "Cheveux bouclés, frisés", href: "/cheveux_boucles_frises" }, 
 { nav_link_name: "Cheveux secs & abimés", href: "/cheveux_secs_abimes" }, 
 { nav_link_name: "Cheveux colorés & méchés", href: "/cheveux_colores_meches" },
  { nav_link_name: "Cheveux fins & sans volume", href: "/cheveux_fins_sans_volume" },
   { nav_link_name: "Cheveux blonds décolorés", href: "/cheveux_blonds_decolores" }, 
   { nav_link_name: "Cheveux normaux", href: "/cheveux_normaux" }, { nav_link_name: "Mixte à gras", href: "/mixte_a_gras" },
    { nav_link_name: "Cheveux ternes", href: "/cheveux_ternes" }
   ]
  },
  {ssection: "Compléments alimentaires cheveux", sectionItems:  []},
  { section: "Cheveux Homme", sectionItems: [
      { nav_link_name: "Shampoing homme", href: "/shampoing_homme" },
      { nav_link_name: "Coiffant & Fixant", href: "/coiffant_&_fixant" },
      { nav_link_name: "Soin pour cheveux", href: "/soin_pour_cheveux" } ]},
  {section: "Mini soin cheveux",  sectionItems: []},
  {section: "Massi collection Soin cheveux", sectionItems: []},
  {section:  "Guide soin cheveux", sectionItems:[]}
  ]

},
 
  // Add more categories as needed
];
export const dispatchData = [
  {
    title: "MODE & ACCESSOIRES",
    subtitle: "Commander",
    href: "/fr_fr/fashion",
    src: "https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/cdc-dispatch/29493231-133-fre-FR/cdc-dispatch_1440_1200.jpg?imwidth=460",
    alt: ""
  },
  {
    title: "PARFUM & BEAUTÉ",
    subtitle: "Commander",
    href: "/fr_fr/beauty",
    src: "https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/pcd-dispatch/40468986-25-fre-FR/pcd-dispatch_1440_1200.jpg?imwidth=460",
    alt: ""
  }
];


 


export const proucdtsTeaser = [
  {
    title: "Grand flacon, au prix du petit",
    description: "Profitez du grand format au prix d'un plus petit.*",
    href: "https://www.sephora.fr/grand-flacon-petit-prix/",
    src: "https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dwc1e011ba/SN-9383-FR-UNDERBANNER.jpg",
    alt: "Grand flacon, au prix du petit",
    ctaText: "Découvrir",
    legalMention: "*Sur une sélection de parfums.."
  },
  {
    title: "New IN Rare Beauty",
    description: "Couleur intense & fini soyeux pour un effet bonne mine.",
    href: "https://www.sephora.fr/p/718880.html",
    src: "https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dwe435e125/SN-9293-FR-UNDERBANNER.jpg",
    alt: "New IN Rare Beauty",
    ctaText: "Découvrir",
    legalMention: "New in = nouveau."
  },{
    title: "Grand flacon, au prix du petit",
    description: "Profitez du grand format au prix d'un plus petit.*",
    href: "https://www.sephora.fr/grand-flacon-petit-prix/",
    src: "https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dwc1e011ba/SN-9383-FR-UNDERBANNER.jpg",
    alt: "Grand flacon, au prix du petit",
    ctaText: "Découvrir",
    legalMention: "*Sur une sélection de parfums.."
  },
  {
    title: "New IN Rare Beauty",
    description: "Couleur intense & fini soyeux pour un effet bonne mine.",
    href: "https://www.sephora.fr/p/718880.html",
    src: "https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dwe435e125/SN-9293-FR-UNDERBANNER.jpg",
    alt: "New IN Rare Beauty",
    ctaText: "Découvrir",
    legalMention: "New in = nouveau."
  }
];

export const allReviews = {
  servicesReviews: [
    {
      text: "Nas Design built some React Native mobile screen to be used in our mobile application. It was a smooth process and Nasser was willing to iterate as much to get the product we wanted. Really happy to have worked with NasDesign",
      author: "Komal Kehar",
      title: "CEO of Mira Project",
      image: "https://images.ctfassets.net/e5382hct74si/7mlje7mNxEK4jvgqWKu507/bc064f44b3a0fc67695e354003fb3d1c/image.png",
      featured: true, // Default value
    },
    {
      text: "NasDesign built a great website for me. I am honestly pleased to have worked with them, Nasser made it very straightforward and easy as a process. Thank you",
      author: "Amit",
      title: "Director and Cinematographer - Film Maker",
      image: "https://images.unsplash.com/photo-1507003211169-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      featured: true, // Featured review
    },
    {
      text: "Nas Design built some React Native mobile screen to be used in our mobile application. It was a smooth process and Nasser was willing to iterate as much to get the product we wanted. Really happy to have worked with NasDesign",
      author: "Andrew",
      title: "Position",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
      featured: true, // Featured review
    },
    // Add more reviews...
  ],
  // Other information about reviews can be added here, such as average rating, total count, etc.
};