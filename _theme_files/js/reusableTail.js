
export const containerInner = "bg-white sm:px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"

import { clsx } from "clsx";

// interface TextProps {
//   size?: "sm" | "base" | "lg" | "xl";
//   variant?: "gray" | "white" | "dark" | "red";
//   as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
//   className?: string;
//   children?: React.ReactNode;
//   style?: React.CSSProperties;
// }

const Text = ({
  size = "base",
  variant = "gray",
  as = "p",
  className,
  style,
  children
}) => {
  const Tag = as;

  const sizes = {
    sm: "text-sm leading-normal",
    base: " text-base leading-normal",
    lg: " text-lg md:text-2xl leading-relaxed",
    xl: "text-xl md:text-3xl leading-relaxed"
  };

  const variants = {
    gray: "text-gray-600",
    white: "text-white",
    dark: "text-gray-900",
    red: "text-red-900"
  };

  return (
    <Tag
      className={clsx(sizes[size], variants[variant], className)}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default Text

"use client"

import Link from 'next/link'
import clsx from 'clsx'
import React, { forwardRef, Fragment, useState } from 'react'

// import { useRouter } from 'next/router'
// import { Transition } from '@headlessui/react'

// import { Button } from '@/components/Button'

// import { ArrowRight } from './icons/Arrows'
// function ArrowIcon(props) {
//   return (
//     <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
//       <path
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
//       />
//     </svg>
//   )
// }

// const variantStyles = {
//   add: 'flex dark:shadow-sm shadow-gray-300/90  text-slate-800 shadow-xl  hover:text-black bg-gray-300/90    hover:bg-gray-300 items-center border border-black    dark:bg-gray-500/90  text-sm font-bold text-black  active:text-blue-200  border-sky-800/30  dark:border-sky-800/30  dark:text-slate-100 dark:hover:text-white',
//   default:
//     'flex items-center border border-black bg-slate-900  text-sm font-bold text-black text-white active:text-blue-200  dark:border-sky-800/30 dark:bg-white  dark:text-black dark:hover:text-sky-600',
//   primary:
//     'bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-black dark:text-white dark:ring-1 dark:ring-inset dark:ring-blue-400/20 dark:hover:bg-black dark:hover:text-white dark:hover:ring-blue-300',
//   secondary:
//     ' bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
//   filled:
//     ' bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400',
//   transparent:
//     'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
//   outline:
//     ' py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
//   text: 'text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500',
// }

// export function ButtonVariant({
//   variant = 'default',
//   className,
//   children,
//   arrow,
//   rounded,
//   ...props
// }) {
//   let Component = props.href ? Link : 'button'

//     className = clsx(
//     className && className,
//     rounded ?? 'rounded-full',
//     'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
//     variant && variantStyles[variant]
//   )

//   let arrowIcon = (
//     <ArrowIcon
//       className={clsx(
//         'mt-0.5 h-5 w-5',
//         variant === 'text' && 'relative top-px',
//         arrow === 'left' && '-ml-1 rotate-180',
//         arrow === 'right' && '-mr-1'
//       )}
//     />
//   )

//   return (
//     <Component
//       className={className}
//       {...props}
//       id={variant ? variant : 'default-btn'}
//     >
//       {arrow === 'left' && arrowIcon}
//       {children}
//       {arrow === 'right' && arrowIcon}
//     </Component>
//   )
// }



const variantStyles = {
  medium: '20px',
}


const colorStyles = {
  emerald: {
    small: 'text-emerald-500 dark:text-emerald-400',
    medium:
      'ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400',
  },
  sky: {
    small: 'text-sky-500',
    medium:
      'ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400',
  },
  amber: {
    small: 'text-amber-500',
    medium:
      'ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400',
  },
  rose: {
    small: 'text-red-500 dark:text-rose-500',
    medium:
      'ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400',
  },
  zinc: {
    small: 'text-zinc-400 dark:text-zinc-500',
    medium:
      'ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400',
  },
}

// const tagMag = {
//   get: 'emerald',
//   post: 'sky',
//   put: 'amber',
//   update: 'amber',
//   delete: 'rose',
//   get: 'emerald',
//   update: 'amber',
//   write: 'sky',
//   deploy: 'sky',
//   edit: 'amber',
//   add: 'emerald',
//   post: 'sky',
//   put: 'amber',
//   comment: 'zinc',
//   rate: 'amber',
//   like: 'sky',
//   share: 'sky',
// }

export function CustomTags({
  children,
  variant,
  bg,
  color = tagMag[bg] ?? 'emerald',
}) {
  console.log('CUSTOM-TAG-VARIANT', variant, "COLOR", color, "BG",  tagMag[bg], "COLOR STYLE",     colorStyles[color][variant])
  return (
    <span
      className={clsx(
        'font-mono text-[0.625rem] font-semibold leading-6',
        variantStyles[variant],
        colorStyles[color][variant]
      )}
    >
      <h2>TAG</h2>
      {/* {children} */}
    </span>
  )
}


export function Button({ invert, href, className, children, ...props }) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 !text-white hover:bg-neutral-200 hover:ring-purple-500 hover:ring-2'
      : 'bg-neutral-950 text-white hover:bg-neutral-800 hover:ring-2 hover:ring-purple-500'
  )
  

  let inner = <span className="relative top-px">{children}</span>

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {inner}
    </button>
  )
}

 const buttonsVarriations = {
  roudedMedium : "group rounded-full p-2.5 transition ring-2 ring-indigo-500 hover:bg-[#0d79d8]  lg:bg-[#6420ff] hover:bg-[#0d79d8]",
  roudedFull : "group  rounded-full p-2.5 px-[0.5em] focus:bg-black transition ring-2 ring-indigo-500 hover:bg-[#0d79d8]  lg:bg-[#6420ff] hover:bg-[#0d79d8]",
  defaultStyle: 'ipXM0u3 r7gk19A cNh938Y focus:bg-black icon-button social-signing-button google-signing-button dXncvpI bg-white'
 }
export const Button2 = ({text, handlePress,
  children,
  iconSize,
  btnStyle,
  bg,
  iconName = tagMag[iconName] ?? 'google',

}) => {
  const buttonStyle = btnStyle ? buttonsVarriations[btnStyle] : buttonsVarriations['defaultStyle']
  // const size = iconSize == undefined || iconSize == "" ? "medium" : 'small'
  const size = !iconSize ?    iconSizes["small"] : iconSizes["medium"]
// console.log("You are below 30");

  return <button onClick={()=>handlePress(iconName)}
          role="button"
          className={clsx(buttonStyle, bg && bg)}
        >
        <Icon name={icons[iconName]} size={size} bg={bg}  iconName={iconName}/>
        <p>{text}</p>
    </button>
}

const email = <svg  width="16"  height="12"  viewBox="0 0 16 12"  xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 0H1.5C0.671562 0 0 0.671562 0 1.5V10.5C0 11.3284 0.671562 12 1.5 12H14.5C15.3284 12 16 11.3284 16 10.5V1.5C16 0.671562 15.3284 0 14.5 0ZM14.5 1.5V2.77516C13.7993 3.34575 12.6823 4.233 10.2942 6.10297C9.76787 6.51694 8.72538 7.51147 8 7.49988C7.27475 7.51159 6.23191 6.51678 5.70584 6.10297C3.31813 4.23328 2.20078 3.34584 1.5 2.77516V1.5H14.5ZM1.5 10.5V4.69994C2.21606 5.27028 3.23153 6.07063 4.77931 7.28263C5.46234 7.82028 6.6585 9.00719 8 8.99997C9.33491 9.00719 10.5159 7.8375 11.2204 7.28288C12.7682 6.07091 13.7839 5.27034 14.5 4.69997V10.5H1.5Z"></path>
          </svg>

const gmailIcon = <svg
                  width="16"
                  height="16"
                  viewBox="0 0 18 19"
                  xmlns="http://www.w3.org/2000/svg" >
                  <path
                    d="M9 7.844v3.463h4.844a4.107 4.107 0 0 1-1.795 2.7v2.246h2.907c1.704-1.558 2.685-3.85 2.685-6.575 0-.633-.056-1.246-.162-1.83H9v-.004Z"
                    fill="#3E82F1"
                  ></path>
                  <path
                    d="M9 14.861c-2.346 0-4.328-1.573-5.036-3.69H.956v2.323A9.008 9.008 0 0 0 9 18.42c2.432 0 4.47-.8 5.956-2.167l-2.907-2.247c-.804.538-1.835.855-3.049.855Z"
                    fill="#32A753">
                </path>
                <path
                d="M3.964 5.456H.956a8.928 8.928 0 0 0 0 8.033l3.008-2.318a5.3 5.3 0 0 1-.283-1.699 5.3 5.3 0 0 1 .283-1.699V5.456Z"
                fill="#F9BB00"
                ></path>
                <path
                d="m.956 5.456 3.008 2.317c.708-2.116 2.69-3.69 5.036-3.69 1.32 0 2.508.453 3.438 1.338l2.584-2.569C13.465 1.41 11.427.525 9 .525A9.003 9.003 0 0 0 .956 5.456Z"
                fill="#E74133"></path>
                </svg>


const facebookIcon = <svg
  width="16"
  height="16"
  viewBox="0 0 12 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.492 19.854v-8.622H.25V7.806h3.242V5.107c0-2.933 2.012-4.529 4.95-4.529 1.408 0 2.617.094 2.967.136v3.064H9.372c-1.598 0-1.906.678-1.906 1.668v2.36h3.605l-.494 3.426H7.466v8.622"
    fill="#1877F2"
  ></path>
</svg>

const AppleIcon = <svg
width="16"
height="16"
viewBox="0 0 16 18"
xmlns="http://www.w3.org/2000/svg"
fill="currentFill"
>
<path d="M12.644 9.51c-.008-1.474.66-2.587 2.01-3.407-.756-1.08-1.897-1.675-3.404-1.792-1.426-.112-2.985.832-3.556.832-.602 0-1.985-.792-3.07-.792C2.384 4.388 0 6.14 0 9.703c0 1.053.193 2.14.579 3.263.514 1.474 2.37 5.09 4.307 5.03 1.012-.024 1.727-.72 3.045-.72 1.278 0 1.94.72 3.07.72 1.953-.028 3.632-3.315 4.122-4.793-2.62-1.234-2.479-3.616-2.479-3.693ZM10.37 2.913c1.097-1.302.997-2.487.964-2.913-.968.056-2.089.659-2.728 1.402-.703.796-1.117 1.78-1.028 2.89 1.048.08 2.005-.459 2.792-1.379Z"></path>
</svg>
// const Icon = ({...children}) => {
//   return  <span
//             class="glAQDp5 provider-icon"
//             aria-hidden="true"
//             style={{ width: '20px', height: '20px' }}>
//               {children}
//           </span>
//   }
  



const tagMag = {
  google:'google',
  facebook:'facebook',
  email: 'email',
  post: 'sky',
  put: 'amber',
  update: 'amber',
  delete: 'rose',
  get: 'emerald',
  update: 'amber',
  write: 'sky',
  deploy: 'sky',
  edit: 'amber',
  add: 'emerald',
  post: 'sky',
  put: 'amber',
  comment: 'zinc',
  rate: 'amber',
  like: 'sky',
  share: 'sky',
}

const iconSizes ={
  small: "10px",
  medium: "20px",
  large: "30px",

}
export function Icon({
  children,
  size,
  bg,
  iconName,
}) {
  // console.log('icon-Size-->', size,
  //  "Icon-Name", iconName, "BG", 
  //   tagMag[bg], "icons[iconName]",icons[iconName])
  return (<span className={clsx(
  'leading-6 glAQDp5 provider-icon' )}
      aria-hidden="true"
      style={{ width: size, height: size }}>
    {icons[iconName]['icon']}
  </span>

  )
}


const icons = {
  google: {
     small: '10px',
     medium: '20px',
     icon:gmailIcon,

   },
   facebook: {
     small: '10px',
     medium:
       '20px',
      icon:  facebookIcon,
   },
   email: {
     small: '10px',
     medium:
       '20px',
       icon: email
   },
   apple: {
     small: '10px',
     icon: AppleIcon
   },
   zinc: {
     small: '10px',
     medium:
       'ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400',
   },
 }
 