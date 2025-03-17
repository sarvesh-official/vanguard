"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BookOpen,
  FileText,
  MessageCircle,
  GraduationCap,
  UserCircle,
  Settings,
  LogOut,
  MoreHorizontal,
  ChevronDown
} from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const renderIcon = (icon: React.ReactNode) => {

  if (React.isValidElement(icon)) {
    return icon;
  }
  return icon; 
};

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; }[];
};

const navItems: NavItem[] = [
  {
    icon: <LayoutGrid size={20} />,
    name: "Dashboard",
    path: "/dashboard"
  },
  {
    icon: <MessageCircle size={20} />,
    name: "Chat with Docs",
    path: "/piper/chat"
  },
  {
    icon: <GraduationCap size={20} />,
    name: "Course Generator",
    path: "/piper/course/generate"
  },
  {
    icon: <FileText size={20} />,
    name: "My Documents",
    path: "/piper/my-docs"
  },
  {
    icon: <BookOpen size={20} />,
    name: "My Courses",
    path: "/piper/my-courses"

  }
];

const othersItems: NavItem[] = [
  {
    icon: <UserCircle size={20} />,
    name: "Profile",
    path: "/dashboard/profile"
  },
  {
    icon: <Settings size={20} />,
    name: "Settings",
    path: "/dashboard/settings"
  },
  {
    icon: <LogOut size={20} color="red" />,
    name: "Signout",
    path: "/logout"
  }
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others"
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-sm group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active bg-piper-blue/[0.12] text-piper-blue  dark:text-piper-cyan dark:bg-piper-cyan/[0.12]"
                  : "menu-item-inactive text-gray-700 hover:bg-gray-100 group-hover:text-gray-700 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-gray-300"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active text-brand-500 dark:text-brand-400"
                    : "menu-item-icon-inactive text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
                }`}
              >
                {renderIcon(nav.icon)}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDown
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-piper-blue dark:text-piper-cyan"
                      : ""
                  }`}
                  size={20}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-sm group ${
                  isActive(nav.path)
                    ? "bg-piper-blue/[0.12] text-piper-blue dark:bg-piper-cyan/[0.12] dark:text-piper-cyan"
                    : "text-gray-700 hover:bg-gray-50 hover:text-piper-blue dark:text-gray-300 hover:dark:text-piper-cyan hover:dark:bg-piper-darkblue/[0.12]"
                } ${
                  nav.name == "Signout" &&
                  "hover:bg-red-50/50 dark:hover:bg-red-500/30"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active bg-piper-blue/[0.12] text-piper-blue dark:text-piper-cyan dark:bg-piper-cyan/[0.12]"
                      : "menu-item-icon-inactive text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
                  }`}
                >
                  {renderIcon(nav.icon)}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span
                    className={`menu-item-text ${
                      isActive(nav.path)
                        ? "text-piper-blue dark:text-piper-cyan"
                        : nav.name == "Signout"
                        ? "text-[red] dark:text-[red]"
                        : ""
                    }`}
                  >
                    {nav.name}
                  </span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px"
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item relative flex hover:text-piper-blue hover:bg-gray-50 dark:hover:text-piper-cyan dark:hover:bg-piper-darkblue/[0.12] items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active bg-piper-blue/[0.12] text-piper-blue dark:bg-piper-cyan/[0.12] dark:text-piper-cyan"
                          : "menu-dropdown-item-inactive dark:text-piper-lightblue"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <div className="flex items-center">
                  <h1 className="text-gradient text-2xl">Vanguard</h1>
              </div>
            </>
          ) : (
            <Image
              src="/piper-mascot.svg"
              alt="Logo"
              width={32}
              height={32}
              priority
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar flex-grow">
        <nav>
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <MoreHorizontal size={20} />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
          </div>
        </nav>
      </div>
      
      {/* Others section fixed at bottom */}
      <div className="mt-auto pb-6 pt-4 border-t border-gray-100 dark:border-gray-800">
        <div>
          <h2
            className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
              !isExpanded && !isHovered
                ? "lg:justify-center"
                : "justify-start"
            }`}
          >
            {isExpanded || isHovered || isMobileOpen ? (
              "Others"
            ) : (
              <MoreHorizontal size={20} />
            )}
          </h2>
          {renderMenuItems(othersItems, "others")}
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
