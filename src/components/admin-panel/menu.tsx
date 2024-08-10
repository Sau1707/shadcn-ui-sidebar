"use client";

import Link from "next/link";
import { Ellipsis, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CollapseMenuButton } from "@/components/admin-panel/collapse-menu-button";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from "@/components/ui/tooltip";

interface MenuProps {
    isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
    const menuList = getMenuList();

    return (
        <ScrollArea className="[&>div>div[style]]:!block">
            <nav className="mt-8 h-full w-full">
                <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
                    {menuList.map(({ href, label, icon: Icon, active }, index) =>
                        <li className="w-full" key={index}>
                            <TooltipProvider disableHoverableContent>
                                <Tooltip delayDuration={100}>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant={active ? "secondary" : "ghost"}
                                            className="w-full justify-start h-10 mb-1"
                                            asChild
                                        >
                                            <Link href={href}>
                                                <span className="mr-4">
                                                    <Icon size={18} />
                                                </span>
                                                <p className="max-w-[200px] truncate">{label}</p>
                                            </Link>
                                        </Button>
                                    </TooltipTrigger>
                                    {isOpen === false && (
                                        <TooltipContent side="right">{label}</TooltipContent>
                                    )}
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    )}
                </ul>
            </nav>
        </ScrollArea>
    );
}
