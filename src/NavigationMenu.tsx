import React, { useState } from "react";
import "./NavigationMenu.css";
import { MenuItem } from "./types/NavType";
import { menuItems } from "./mock/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const NavigationMenu: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const handleMenuItemClick = (itemLabel: string) => {
    setActiveMenuItem(itemLabel);
  };

  const renderSubmenu = (submenuItems: MenuItem[], isSecondLevel = false) => {
    const submenuClass = isSecondLevel ? "submenu submenu-level-2" : "submenu";

    return (
      <ul className={submenuClass}>
        {submenuItems.map((item) => (
          <li key={item.label}>
            <a href={item.link}>{item.label}</a>
            {item.submenu && renderSubmenu(item.submenu, true)}
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
            <a href={item.link}>
              {item.label === "Home" && (
                <FontAwesomeIcon icon={faHome} className="icon" />
              )}
              {item.label}
              {item.submenu && (
                <FontAwesomeIcon icon={faCaretDown} className="submenu-icon" />
              )}
            </a>
            {item.submenu && renderSubmenu(item.submenu)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
