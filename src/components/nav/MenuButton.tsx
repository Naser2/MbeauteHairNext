"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { useMenuOpen } from "@/state";

export function MenuButton() {
  const setOpen = useMenuOpen((s) => s.setOpen);

  return (
    <button title="Navigation Menu" className="Navigation_button__86r53" type="button" aria-expanded="false"><svg width="22" height="11"><path className="NavButton_svg__top" d="M0 0h22v1H0z"></path><path className="NavButton_svg__middle" d="M0 5h14v1H0z"></path><path className="NavButton_svg__bottom" d="M0 10h22v1H0z"></path></svg></button>
    // <button
    //   type="button"
    //   className="-ml-2 rounded-md bg-white p-2 text-gray-400"
    //   onClick={() => setOpen(true)}
    // >
    //   <span className="sr-only">Open menu</span>
    //   <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    // </button>
  );
}
