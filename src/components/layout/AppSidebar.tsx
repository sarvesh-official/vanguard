"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  UserCircle,
  Settings,
  LogOut,
  MoreHorizontal,
  ChevronDown,
  ClipboardList,
  PencilRulerIcon,
  LogsIcon
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
    icon: <ClipboardList size={20} />,
    name: "Profiles",
    path: "/profiles"
  },
  {
    icon: <PencilRulerIcon size={20} />,
    name: "Maintenance Window",
    path: "/maintenance-window"
  },
  {
    icon: <LogsIcon size={20} />,
    name: "Event Console",
    path: "/events"
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
    path: "/settings/account"
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
              className={`relative flex items-center w-full gap-1 px-2 py-2 font-medium rounded-lg text-sm group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active text-white dark:text-white "
                  : "menu-item-inactive text-white hover:bg-blue-800"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active text-white dark:text-white"
                    : "menu-item-icon-inactive text-white group-hover:text-white"
                }`}
              >
                {renderIcon(nav.icon)}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDown
                  className={`ml-auto w-5 h-5 transition-transform duration-200 text-white ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180"
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
                className={`menu-item relative flex items-center w-full gap-2 px-2 py-2 font-medium rounded-lg text-sm group ${
                  isActive(nav.path)
                    ? "text-white"
                    : "text-white hover:bg-blue-800"
                } ${
                  nav.name == "Signout" &&
                  "hover:bg-red-50/50 dark:hover:bg-red-500/30"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active text-white dark:text-white"
                      : "menu-item-icon-inactive text-white group-hover:text-white dark:text-white dark:group-hover:text-white"
                  }`}
                >
                  {renderIcon(nav.icon)}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span
                    className={`menu-item-text ${
                      isActive(nav.path)
                        ? "text-white dark:text-white"
                        : nav.name == "Signout"
                        ? "text-white dark:text-white"
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
                      className={`menu-dropdown-item relative flex hover:text-white hover:bg-gray-50 dark:hover:text-white dark:hover:bg-piper-darkblue/[0.12] items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active bg-piper-blue/[0.12] text-white dark:bg-piper-cyan/[0.12] dark:text-white"
                          : "menu-dropdown-item-inactive text-white dark:text-white"
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

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {

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
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-pri text-white h-screen transition-all duration-300 ease-in-out z-50 
        ${
          isExpanded || isMobileOpen
            ? "w-[230px]"
            : isHovered
            ? "w-[230px]"
            : "w-[80px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-2 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
             <Image
             src="/logo-full.svg"
             alt="Logo"
             width={140}
             height={120}
             priority
           />
          ) : (
            <Image
              src="/logo.svg"
              alt="Logo"
              width={42}
              height={42}
              priority
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col py-4 overflow-y-auto duration-300 ease-linear no-scrollbar flex-grow">
        <nav>
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-white ${
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
      <div className="mt-auto pb-6 pt-4 dark:border-gray-800">
        <div>
          <h2
            className={`mb-4 text-xs uppercase flex leading-[20px] text-white ${
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
