import { MenuItem } from "../types/NavType";

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    submenu: [
      {
        label: "Product 1",
        link: "/products/1",
        submenu: [
          {
            label: "Submenu 1-1",
            link: "/products/1/submenu-1-1",
          },
          {
            label: "Submenu 1-2",
            link: "/products/1/submenu-1-2",
          },
        ],
      },
      {
        label: "Product 2",
        link: "/products/2",
        submenu: [
          {
            label: "Submenu 2-1",
            link: "/products/2/submenu-2-1",
          },
          {
            label: "Submenu 2-2",
            link: "/products/2/submenu-2-2",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];
