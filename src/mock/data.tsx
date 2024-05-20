import { MenuItem } from "../types/NavType";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Products",
    submenu: [
      {
        id: 3,
        label: "Product 1",
        submenu: [
          {
            id: 4,
            label: "Submenu 1-1",
            link: "/products/1/submenu-1-1",
          },
          {
            id: 5,
            label: "Submenu 1-2",
            link: "/products/1/submenu-1-2",
          },
        ],
      },
      {
        id: 6,
        label: "Product 2",
        submenu: [
          {
            id: 7,
            label: "Submenu 2-1",
            submenu: [
              {
                id: 8,
                label: "Submenu 2-1-1",
                link: "/products/2/submenu-2-1-1",
              },
              {
                id: 9,
                label: "Submenu 2-1-2",
                link: "/products/2/submenu-2-1-2",
              },
              {
                id: 10,
                label: "Submenu 2-1-3",
                link: "/products/2/submenu-2-1-3",
              },
              {
                id: 11,
                label: "Submenu 2-1-4",
                link: "/products/2/submenu-2-1-4",
              },
              {
                id: 12,
                label: "Submenu 2-1-5",
                link: "/products/2/submenu-2-1-5",
              },
              {
                id: 13,
                label: "Submenu 2-1-6",
                link: "/products/2/submenu-2-1-6",
              },
            ],
          },
          {
            id: 14,
            label: "Submenu 2-2",
            link: "/products/2/submenu-2-2",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    label: "About",
    link: "/about",
  },
  {
    id: 16,
    label: "Contact",
    link: "/contact",
  },
];
