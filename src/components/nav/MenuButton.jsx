"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {useState} from "react"
import { useMenuOpen } from "../../../state";

export function MenuButton() {
  const setOpen = useMenuOpen((s) => s.setOpen);
  // const [open, setOpen] = useState(false);
  console.log("MENU-OPEN-MENUBUTTOn", open);

  return (
    <button
      type="button"
      className="-ml-2 rounded-md bg-red-500 p-2 text-gray-400"
      onClick={() => setOpen(true)}
    >
      <span className="sr-only">Open menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
