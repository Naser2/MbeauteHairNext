

"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { navigation } from "@/components/data";
import { classNames } from "@/utils/classNames";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MenuButton } from "@/components/nav/MenuButton";
import { CartCount } from "@/components/nav/CartCount";
import { useMenuOpen } from "../../../state.ts";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import logo from '@/assets/images/logo-white.png';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle } from 'react-icons/fa';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import UnreadMessageCount from '../UnreadMessageCount.jsx';



export function Header() {
    const open = useMenuOpen((s) => s.open);
    const setOpen = useMenuOpen((s) => s.setOpen);
    console.log("MENU-OPEN-HEADER", open);
    const { data: session } = useSession();
    const profileImage = session?.user?.image;
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [providers, setProviders] = useState(null);
  
    const pathname = usePathname();
  
    useEffect(() => {
      const setAuthProviders = async () => {
        const res = await getProviders();
        setProviders(res);
      };
  
      setAuthProviders();
    }, []);
    console.log('NAV-SESSION', session)
  return ( <header id="MASSI-HEADER" className="relative bg-cremalight ">
  <nav aria-label="Top" className="bg-cremalight max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="border-b border-gray-200 px-auto ">
      <div className="flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center lg:hidden">
          <MenuButton />

          <a
            href="#"
            className="ml-2 p-2 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>

        {/* Flyout menus */}
        <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
          <div className="flex h-full space-x-8">
            {navigation.categories.map((category) => (
              <Popover key={category.name} className="flex">
                {({ open }) => (
                  <>
                    <div className="relative flex">
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-indigo-600"
                            : "text-gray-700 hover:text-gray-800",
                          "relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out"
                        )}
                      >
                        {category.name}
                        <span
                          className={classNames(
                            open ? "bg-indigo-600" : "",
                            "absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10">
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                                {category.featured.map((item, itemIdx) => (
                                  <div
                                    key={item.name}
                                    className={classNames(
                                      itemIdx === 0
                                        ? "aspect-w-2 col-span-2"
                                        : "",
                                      "group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md bg-gray-100"
                                    )}
                                  >
                                    <img
                                      src={item.imageSrc}
                                      alt={item.imageAlt}
                                      className="object-cover object-center group-hover:opacity-75"
                                    />
                                    <div className="flex flex-col justify-end">
                                      <div className="bg-white bg-opacity-60 p-4 text-sm">
                                        <a
                                          href={item.href}
                                          className="font-medium text-gray-900"
                                        >
                                          <span
                                            className="absolute inset-0"
                                            aria-hidden="true"
                                          />
                                          {item.name}
                                        </a>
                                        <p
                                          aria-hidden="true"
                                          className="mt-0.5 text-gray-700 sm:mt-1"
                                        >
                                          Shop now
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                                {category.sections.map(
                                  (column, columnIdx) => (
                                    <div
                                      key={columnIdx}
                                      className="space-y-10"
                                    >
                                      {column.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${category.id}-${section.id}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${category.id}-${section.id}-heading`}
                                            className="mt-4 space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ))}

            {navigation.pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                {page.name}
              </a>
            ))}
          </div>
        </Popover.Group>

        {/* Logo */}
        {/* <a href="#" className="flex">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a> */}

        <div className="flex flex-1 items-center justify-end">
          <a
            href="#"
            className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
          >
            <img
              src="https://tailwindui.com/img/flags/flag-canada.svg"
              alt=""
              className="block h-auto w-5 flex-shrink-0"
            />
            <span className="ml-3 block text-sm font-medium">CAD</span>
            <span className="sr-only">, change currency</span>
          </a>

          {/* Search */}
          <a
            href="#"
            className="ml-6 hidden !p-2 text-gray-400 hover:text-gray-500 lg:block"
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </a>

          {/* Account */}
        { !session ?   <a
            href="#"
            className="!p-2 text-gray-400 hover:text-gray-500 lg:!ml-4"
          >
            <span className="sr-only">Account</span>
            <UserIcon className="h-6 w-6" aria-hidden="true" />
          </a> : <>  {!session && (
            <div className='hidden md:block md:ml-6'>
              <div className='flex items-center'>
                {providers &&
                  Object.values(providers).map((provider, index) => (
                    <button
                      onClick={() => signIn(provider.id)}
                      key={index}
                      className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    >
                      <FaGoogle className='text-white mr-2' />
                      <span>Login or Register</span>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {session && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
              <Link href='/messages' className='relative group '>
                <button
                  type='button'
                  className='bell_btn__yil2q  mr-4 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none ring-ds-gray-alpha focus:ring-2 focus:!ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='small-svg'
                     style={{ "color": "var(--ds-gray-900)"}}
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                    />
                  </svg>
                </button>
                <UnreadMessageCount session={session} />
              </Link>
    
              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded={isProfileMenuOpen}
                    aria-haspopup='true'
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      className='h-8 w-8 rounded-full'
                      src={profileImage || profileDefault}
                      alt=''
                      width={40}
                      height={40}
                    />
                  </button>
                </div>

           
                {isProfileMenuOpen && (
                  <div
                    id='user-menu'
                    className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabIndex='-1'
                  >
                    <Link
                      href='/profile'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-0'
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                      }}
                    >
                      Your Profile
                    </Link>
                    <Link
                      href='/properties/saved'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                      }}
                    >
                      Saved Properties
                    </Link>
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        signOut();
                      }}
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        
           </> }
          {/* Cart */}
          {/* <div className="ml-4 flow-root lg:ml-6">
            <a href="#" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                <CartCount />
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  </nav>
</header>
    // <header className="relative bg-white">
    //   <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //     <div className="border-b border-gray-200">
    //       <div className="flex h-16 items-center justify-between">
    //       <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    //     <div className='relative flex h-20 items-center justify-between'>
    //       <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
     
    //         <button
    //           type='button'
    //           id='mobile-dropdown-button'
    //           className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-suttle-black:hover hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
    //           aria-controls='mobile-menu'
    //           aria-expanded={isMobileMenuOpen}
    //           onClick={() => setIsMobileMenuOpen((prev) => !prev)}
    //         >
    //           <span className='absolute -inset-0.5'></span>
    //           <span className='sr-only'>Open main menu</span>
    //           <svg
    //             className='block h-6 w-6'
    //             fill='none'
    //             viewBox='0 0 24 24'
    //             strokeWidth='1.5'
    //             stroke='currentColor'
    //             aria-hidden='true'
    //           >
    //             <path
    //               strokeLinecap='round'
    //               strokeLinejoin='round'
    //               d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
    //             />
    //           </svg>
    //         </button>
    //       </div>

    //       <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
           
    //       </div>

         
    //       {!session && (
    //         <div className='hidden md:block md:ml-6'>
    //           <div className='flex items-center'>
    //             {providers &&
    //               Object.values(providers).map((provider, index) => (
    //                 <button
    //                   onClick={() => signIn(provider.id)}
    //                   key={index}
    //                   className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    //                 >
    //                   <FaGoogle className='text-white mr-2' />
    //                   <span>Login or Register</span>
    //                 </button>
    //               ))}
    //           </div>
    //         </div>
    //       )}

    //       {session && (
    //         <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
    //           <Link href='/messages' className='relative group '>
    //             <button
    //               type='button'
    //               className='bell_btn__yil2q  mr-4 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none ring-ds-gray-alpha focus:ring-2 focus:!ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
    //             >
    //               <span className='absolute -inset-1.5'></span>
    //               <span className='sr-only'>View notifications</span>
    //               <svg
    //                 className='small-svg'
    //                  style={{ "color": "var(--ds-gray-900)"}}
    //                 fill='none'
    //                 viewBox='0 0 24 24'
    //                 strokeWidth='1.5'
    //                 stroke='currentColor'
    //                 aria-hidden='true'
    //               >
    //                 <path
    //                   strokeLinecap='round'
    //                   strokeLinejoin='round'
    //                   d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
    //                 />
    //               </svg>
    //             </button>
    //             <UnreadMessageCount session={session} />
    //           </Link>
    
    //           <div className='relative ml-3'>
    //             <div>
    //               <button
    //                 type='button'
    //                 className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
    //                 id='user-menu-button'
    //                 aria-expanded={isProfileMenuOpen}
    //                 aria-haspopup='true'
    //                 onClick={() => setIsProfileMenuOpen((prev) => !prev)}
    //               >
    //                 <span className='absolute -inset-1.5'></span>
    //                 <span className='sr-only'>Open user menu</span>
    //                 <Image
    //                   className='h-8 w-8 rounded-full'
    //                   src={profileImage || profileDefault}
    //                   alt=''
    //                   width={40}
    //                   height={40}
    //                 />
    //               </button>
    //             </div>

           
    //             {isProfileMenuOpen && (
    //               <div
    //                 id='user-menu'
    //                 className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
    //                 role='menu'
    //                 aria-orientation='vertical'
    //                 aria-labelledby='user-menu-button'
    //                 tabIndex='-1'
    //               >
    //                 <Link
    //                   href='/profile'
    //                   className='block px-4 py-2 text-sm text-gray-700'
    //                   role='menuitem'
    //                   tabIndex='-1'
    //                   id='user-menu-item-0'
    //                   onClick={() => {
    //                     setIsProfileMenuOpen(false);
    //                   }}
    //                 >
    //                   Your Profile
    //                 </Link>
    //                 <Link
    //                   href='/properties/saved'
    //                   className='block px-4 py-2 text-sm text-gray-700'
    //                   role='menuitem'
    //                   tabIndex='-1'
    //                   id='user-menu-item-2'
    //                   onClick={() => {
    //                     setIsProfileMenuOpen(false);
    //                   }}
    //                 >
    //                   Saved Properties
    //                 </Link>
    //                 <button
    //                   onClick={() => {
    //                     setIsProfileMenuOpen(false);
    //                     signOut();
    //                   }}
    //                   className='block px-4 py-2 text-sm text-gray-700'
    //                   role='menuitem'
    //                   tabIndex='-1'
    //                   id='user-menu-item-2'
    //                 >
    //                   Sign Out
    //                 </button>
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //           <div className="flex flex-1 items-center lg:hidden">
    //             <button
    //             type="button"
    //             className="-ml-2 rounded-md p-2 text-gray-400"
    //             onClick={() => setOpen(true)}
    //           >
    //             <span className="sr-only">Open menu</span>
    //             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    //           </button>
    //           <a
    //             href="#"
    //             className="ml-2 p-2 text-gray-400 hover:text-gray-500"
    //           >
    //             <span className="sr-only">Search</span>
    //             <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
    //           </a>
    //         </div>
    //         {/* } */}


    //         {/* Flyout menus */}
    //         <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
    //           <div className="flex h-full space-x-8">
    //             {navigation.categories.map((category) => (
    //               <Popover key={category.name} className="flex">
    //                 {({ open }) => (
    //                   <>
    //                     <div className="relative flex">
    //                       <Popover.Button
    //                         className={classNames(
    //                           open
    //                             ? "text-indigo-600"
    //                             : "text-gray-700 hover:text-gray-800",
    //                           "relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out"
    //                         )}
    //                       >
    //                         {category.name}
    //                         <span
    //                           className={classNames(
    //                             open ? "bg-indigo-600" : "",
    //                             "absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform"
    //                           )}
    //                           aria-hidden="true"
    //                         />
    //                       </Popover.Button>
    //                     </div>

    //                     <Transition
    //                       as={Fragment}
    //                       enter="transition ease-out duration-200"
    //                       enterFrom="opacity-0"
    //                       enterTo="opacity-100"
    //                       leave="transition ease-in duration-150"
    //                       leaveFrom="opacity-100"
    //                       leaveTo="opacity-0"
    //                     >
    //                       <Popover.Panel className="absolute inset-x-0 top-full z-10">
                    
    //                         <div
    //                           className="absolute inset-0 top-1/2 bg-white shadow"
    //                           aria-hidden="true"
    //                         />

    //                         <div className="relative bg-white">
    //                           <div className="mx-auto max-w-7xl px-8">
    //                             <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
    //                               <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
    //                                 {category.featured.map((item, itemIdx) => (
    //                                   <div
    //                                     key={item.name}
    //                                     className={classNames(
    //                                       itemIdx === 0
    //                                         ? "aspect-w-2 col-span-2"
    //                                         : "",
    //                                       "group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md bg-gray-100"
    //                                     )}
    //                                   >
    //                                     <img
    //                                       src={item.imageSrc}
    //                                       alt={item.imageAlt}
    //                                       className="object-cover object-center group-hover:opacity-75"
    //                                     />
    //                                     <div className="flex flex-col justify-end">
    //                                       <div className="bg-white bg-opacity-60 p-4 text-sm">
    //                                         <a
    //                                           href={item.href}
    //                                           className="font-medium text-gray-900"
    //                                         >
    //                                           <span
    //                                             className="absolute inset-0"
    //                                             aria-hidden="true"
    //                                           />
    //                                           {item.name}
    //                                         </a>
    //                                         <p
    //                                           aria-hidden="true"
    //                                           className="mt-0.5 text-gray-700 sm:mt-1"
    //                                         >
    //                                           Shop now
    //                                         </p>
    //                                       </div>
    //                                     </div>
    //                                   </div>
    //                                 ))}
    //                               </div>
    //                               <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
    //                                 {category.sections.map(
    //                                   (column, columnIdx) => (
    //                                     <div
    //                                       key={columnIdx}
    //                                       className="space-y-10"
    //                                     >
    //                                       {column.map((section) => (
    //                                         <div key={section.name}>
    //                                           <p
    //                                             id={`${category.id}-${section.id}-heading`}
    //                                             className="font-medium text-gray-900"
    //                                           >
    //                                             {section.name}
    //                                           </p>
    //                                           <ul
    //                                             role="list"
    //                                             aria-labelledby={`${category.id}-${section.id}-heading`}
    //                                             className="mt-4 space-y-4"
    //                                           >
    //                                             {section.items.map((item) => (
    //                                               <li
    //                                                 key={item.name}
    //                                                 className="flex"
    //                                               >
    //                                                 <a
    //                                                   href={item.href}
    //                                                   className="hover:text-gray-800"
    //                                                 >
    //                                                   {item.name}
    //                                                 </a>
    //                                               </li>
    //                                             ))}
    //                                           </ul>
    //                                         </div>
    //                                       ))}
    //                                     </div>
    //                                   )
    //                                 )}
    //                               </div>
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </Popover.Panel>
    //                     </Transition>
    //                   </>
    //                 )}
    //               </Popover>
    //             ))}

    //             {navigation.pages.map((page) => (
    //               <a
    //                 key={page.name}
    //                 href={page.href}
    //                 className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
    //               >
    //                 {page.name}
    //               </a>
    //             ))}
    //           </div>
    //         </Popover.Group>

       
    //         <div className="flex flex-1 items-center justify-end">
    //           <a
    //             href="#"
    //             className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
    //           >
    //             <img
    //               src="https://tailwindui.com/img/flags/flag-canada.svg"
    //               alt=""
    //               className="block h-auto w-5 flex-shrink-0"
    //             />
    //             <span className="ml-3 block text-sm font-medium">CAD</span>
    //             <span className="sr-only">, change currency</span>
    //           </a>

    //           {/* Search */}
    //           <a
    //             href="#"
    //             className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block"
    //           >
    //             <span className="sr-only">Search</span>
    //             <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
    //           </a>

      
    //           <div className="ml-4 flow-root lg:ml-6">
    //             <a href="#" className="group -m-2 flex items-center p-2">
    //               <ShoppingBagIcon
    //                 className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
    //                 aria-hidden="true"
    //               />
    //               <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
    //                 <CartCount />
    //               </span>
    //               <span className="sr-only">items in cart, view bag</span>
    //             </a>
                
    //           <div id='mobile-menu'>
    //             <div className='space-y-1 px-2 pb-3 pt-2'>
                
    //               {session && (
    //                 <Link
    //                   href='/properties/add'
    //                   className={`${
    //                     pathname === '/properties/add' ? 'bg-black' : ''
    //                   } text-white block rounded-md px-3 py-2 text-base font-medium`}
    //                 >
    //                   Add Property
    //                 </Link>
    //               )}

    //               {!session &&
    //                 providers &&
    //                 Object.values(providers).map((provider, index) => (
    //                   <button
    //                     onClick={() => signIn(provider.id)}
    //                     key={index}
    //                     className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    //                   >
    //                     <span>Login or Register</span>
    //                   </button>
    //                 ))}
    //             </div>
    //           </div>
   
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
}
