import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationViewProps {
  className?: string;
}

export function PaginationView({ className = "" }: PaginationViewProps) {
  return (
    <Pagination className={`${className}`}>
      <PaginationContent className="flex flex-wrap justify-center gap-2">
        {/* Previous button - desktop */}
        <PaginationItem className="hidden sm:inline-block">
          <PaginationPrevious href="#" />
        </PaginationItem>
        
        {/* Previous button - mobile */}
        <PaginationItem className="sm:hidden">
          <PaginationPrevious href="#" className="px-2 py-1 h-8 min-w-0 text-xs" aria-label="Previous Page">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <span>Prev</span>
          </PaginationPrevious>
        </PaginationItem>
        
        {/* Page numbers */}
        <div className="flex gap-1 items-center">
          <PaginationItem>
            <PaginationLink isActive href="#" className="h-8 w-8 text-xs sm:text-sm font-medium">
              1
            </PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink href="#" className="h-8 w-8 text-xs sm:text-sm">
              2
            </PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink href="#" className="h-8 w-8 text-xs sm:text-sm">
              3
            </PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationEllipsis className="h-8 w-8 text-xs sm:text-sm" />
          </PaginationItem>
        </div>
        
        {/* Next button - desktop */}
        <PaginationItem className="hidden sm:inline-block">
          <PaginationNext href="#" />
        </PaginationItem>
        
        {/* Next button - mobile */}
        <PaginationItem className="sm:hidden"></PaginationItem>
          <PaginationNext href="#" className="px-2 py-1 h-8 min-w-0 text-xs" aria-label="Next Page">
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </PaginationNext>
      </PaginationContent>
    </Pagination>
  );
}
