import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
} from "lucide-react";


export function getMenuList(): any {

    return [
        {
            href: "/dashboard",
            label: "Dashboard",
            active: true,
            icon: LayoutGrid,
        },
        {
            href: "",
            label: "Posts",
            active: false,
            icon: SquarePen,
        },
        {
            href: "/categories",
            label: "Categories",
            active: false,
            icon: Bookmark,
        },
        {
            href: "/tags",
            label: "Tags",
            active: false,
            icon: Tag,
        },
        {
            href: "/users",
            label: "Users",
            active: false,
            icon: Users,
        },
        {
            href: "/account",
            label: "Account",
            active: false,
            icon: Settings,

        }
    ]
}
