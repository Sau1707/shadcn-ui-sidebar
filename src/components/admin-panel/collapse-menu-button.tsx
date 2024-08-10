"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleTrigger
} from "@/components/ui/collapsible";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from "@/components/ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

export function CollapseMenuButton({ icon: Icon, label, active, isOpen }) {
    const [isCollapsed, setIsCollapsed] = useState(isSubmenuActive);

    return isOpen ? (
        <Collapsible
            open={isCollapsed}
            onOpenChange={setIsCollapsed}
            className="w-full"
        >
            <CollapsibleTrigger
                className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
                asChild
            >
                <Button
                    variant={active ? "secondary" : "ghost"}
                    className="w-full justify-start h-10"
                >
                    <div className="w-full items-center flex justify-between">
                        <div className="flex items-center">
                            <span className="mr-4">
                                <Icon size={18} />
                            </span>
                            <p
                                className={cn(
                                    "max-w-[150px] truncate",
                                    isOpen
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-96 opacity-0"
                                )}
                            >
                                {label}
                            </p>
                        </div>
                        <div
                            className={cn(
                                "whitespace-nowrap",
                                isOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-96 opacity-0"
                            )}
                        >
                            <ChevronDown
                                size={18}
                                className="transition-transform duration-200"
                            />
                        </div>
                    </div>
                </Button>
            </CollapsibleTrigger>
        </Collapsible>
    ) : (
        <DropdownMenu>
            <TooltipProvider disableHoverableContent>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant={active ? "secondary" : "ghost"}
                                className="w-full justify-start h-10 mb-1"
                            >
                                <div className="w-full items-center flex justify-between">
                                    <div className="flex items-center">
                                        <span className={cn(isOpen === false ? "" : "mr-4")}>
                                            <Icon size={18} />
                                        </span>
                                        <p
                                            className={cn(
                                                "max-w-[200px] truncate",
                                                isOpen === false ? "opacity-0" : "opacity-100"
                                            )}
                                        >
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="start" alignOffset={2}>
                        {label}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent side="right" sideOffset={25} align="start">
                <DropdownMenuLabel className="max-w-[190px] truncate">
                    {label}
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
