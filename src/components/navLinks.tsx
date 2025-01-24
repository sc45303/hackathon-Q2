"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Shirts",
    href: "/shirts",
    description:
      "Find the perfect shirt for your wardrobe. From casual tees to dress shirts, we have a wide range of styles and sizes to fit your needs.",
  },
  {
    title: "Pants",
    href: "/pants",
    description:
      "Get the best deals on our pants collection. From casual jeans to stylish trousers, we have the perfect pair for you.",
  },
  {
    title: "Tshirts",
    href: "t-shirts",
    description:
      "Discover our range of stylish t-shirts perfect for any occasion.",
  },
  {
    title: "Brands",
    href: "/brands",
    description:
      "A collection of popular fashion brands available for shopping.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
              {components.map((component) => (
                <Link key={component.title} href={component.title}>
                  <ListItem title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/NewArrivals" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              New Arrrivals
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/onsale" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              OnSale
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/brands" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Brands
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
