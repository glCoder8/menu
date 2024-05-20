import React, { useState } from "react";
import "./NavigationMenu.css";

interface MenuItem {
  label: string;
  link?: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
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
      },
      {
        label: "Product 2",
        link: "/products/2",
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

const NavigationMenu: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const handleMenuItemClick = (itemLabel: string) => {
    setActiveMenuItem(itemLabel);
  };

  const renderSubmenu = (submenuItems: MenuItem[]) => {
    return (
      <ul className="submenu">
        {submenuItems.map((item) => (
          <li key={item.label}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="navigation-menu">
      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={activeMenuItem === item.label ? "active" : ""}
            onMouseEnter={() => handleMenuItemClick(item.label)}
            onMouseLeave={() => handleMenuItemClick("")}
          >
            <a href={item.link}>{item.label}</a>
            {item.submenu && renderSubmenu(item.submenu)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
