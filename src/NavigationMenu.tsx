import React from "react";
import "./NavigationMenu.css";
import { MenuItem } from "./types/NavType";
import { menuItems } from "./mock/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCaretDown,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

const NavigationMenu: React.FC = () => {
  const renderSubmenu = (submenuItems: MenuItem[], isSecondLevel = false) => {
    const submenuClass = isSecondLevel ? "submenu" : "submenu";

    return (
      <ul className={submenuClass}>
        {submenuItems.map((item) => (
          <li key={`${item.label}-${item.id}`}>
            <a href={item.link}>
              {item.label}
              {item.submenu && (
                <FontAwesomeIcon icon={faCaretRight} className="submenu-icon" />
              )}
            </a>
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
          <li key={`${item.label}-${item.id}`}>
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
