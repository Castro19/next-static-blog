import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FilterMenu = () => {
  return (
    <div className="flex justify-end">
      {" "}
      {/* This container aligns its children to the right */}
      <div className="sort-filter-menu">
        {/* Dropdown for sorting options */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="hover:bg-gray-300" variant="outline">
              Sort By
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="hover:bg-gray-300">
              Latest
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-300">
              Oldest
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-300">
              Most Popular
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FilterMenu;
