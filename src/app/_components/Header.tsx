"use client";

import { AppBar, Toolbar, Box } from "@mui/material";
import GooeyNav from "./GooeyNav";
import StaggeredMenu from "./StaggeredMenu";
import PillNav from "./PillNav";

const items = [
  
            { label: "About", href: "#about" },
            { label: "Education", href: "#education" },
            { label: "Projects", href: "#projects" },
            { label: "Competitions", href: "#competitions" },
            { label: "Contact", href: "#contact" },
];

const menuItems = [
  { label: "About", ariaLabel: "Learn about us", link: "#about" },
  { label: "Education", ariaLabel: "View our education", link: "#education" },
  { label: "Projects", ariaLabel: "View our projects", link: "#projects" },
  { label: "Competitions", ariaLabel: "View our competitions", link: "#competitions" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

export default function Header() {
  return (
    <>
      
        <StaggeredMenu
          position="left"
          items={menuItems}
          displayItemNumbering={false}
          accentColor="#3c1a74"
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
        />

      
        <PillNav
          items={items}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
    </>
  );
}
