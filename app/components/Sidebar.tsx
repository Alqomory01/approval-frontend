"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HomeIcon,
  BookOpenIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardDocumentIcon,
  BuildingLibraryIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const links = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/audit", label: "Audit", icon: BookOpenIcon },
  { href: "/hod", label: "Hod", icon:ClipboardDocumentIcon },
  { href: "/accounts", label: "Account", icon: UserIcon },
  { href: "/requisition", label: "Requisition", icon: AcademicCapIcon },
  
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); //closed by default on mobile
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden p-2 bg-blue-900 text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close Menu" : "Open Menu"}
      </button>

       {/* Overlay for mobile when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}


  

      {/* Sidebar */}
      <aside
         className={`bg-blue-900 text-white flex flex-col transition-all duration-300 
  w-64 ${collapsed ? "md:w-20" : "md:w-64"}
fixed top-0 left-0 h-screen z-50
   ${open ? "translate-x-0" : "-translate-x-full"}
  md:static md:translate-x-0 md:h-auto md:z-auto
`}
      >
        {/* Logo / Title */}
        <div className="p-4 text-xl font-bold border-b border-blue-700">
          {collapsed ? "UP" : "Computerized Approval system"}
        </div>

         <button
          className="hidden md:block p-2 bg-blue-800 hover:bg-blue-700"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "> Expand" : "< Collapse"}
        </button>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
  {links.map(({ href, label, icon: Icon }) => (
    <li key={href}>
      <Link
        href={href}
        aria-label={label}
        className={`flex items-center gap-3 px-3 py-2 rounded ${
          pathname.startsWith(href)
            ? "bg-blue-700 font-semibold"
            : "hover:bg-blue-700"
        }`}
        onClick={() => setOpen(false)}
      >
        <Icon className="h-6 w-6" />
         {!collapsed && <span className="hidden md:inline">{label}</span>}
         {open && <span className="md:hidden">{label}</span>}
      </Link>
    </li>
  ))}
</ul>
        </nav>

     
        
      </aside>
    </>
  );
}
