import { useSidebar } from "@/context/SidebarContext";
import Link from "next/link";
import React, { useState} from "react";
import { HomeIcon, Sidebar, XIcon } from "lucide-react";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, setIsExpanded, setIsMobileOpen } = useSidebar();
  const pathname = usePathname();
  
  const handleToggle = () => {
    if (window.innerWidth >= 991) {
      setIsExpanded(prev => !prev);
    } else {
      setIsMobileOpen(prev => !prev);
    }
  };
  
  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };
  

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-10 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-4">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-1 border-b border-gray-200 dark:border-gray-800 sm:gap-3 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-3">
          <button
            className="items-center justify-center w-5 h-5 rounded-lg z-99999 lg:flex lg:h-8 lg:w-8 text-gray-700"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <Sidebar className="h-5 w-5" />
            )}
            {/* Cross Icon */}
          </button>

          <Link href="/" className="lg:hidden">
          <Image src={"/logo-full.svg"} height={65} width={60} alt="logo"/>
          </Link>

          {/* Breadcrumb Navigation - visible only on larger screens */}
          <div className="hidden lg:flex ml-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className={pathname === "/" ? "text-primary font-medium" : ""}>
                  <BreadcrumbLink href="/">
                    <HomeIcon className={`h-5 w-5 ${pathname === "/" ? "text-primary" : ""}`}/>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className={pathname.includes("/profiles") ? "text-primary font-medium" : ""}>
                  <BreadcrumbLink href="/profiles">Profiles</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-5 h-5 text-gray-700 rounded-lg z-99999 lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-4 px-4 py-2 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          {/* Mobile breadcrumb - only visible when menu is open */}
          <div className="lg:hidden w-full">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className={pathname === "/" ? "text-primary font-medium" : ""}>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className={pathname === "/dashboard" ? "text-primary font-medium" : ""}>
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          <div className="flex items-center gap-2 2xsm:gap-3">
            {/* <Button className="bg-transparent hover:bg-transparent text-white h-8 w-8" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button> */}

    
        </div>
      </div>
      </div>
    </header>
  );
};

export default AppHeader;
