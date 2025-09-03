"use client";

import { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GooeyNav from "./GooeyNav";

const items = [
  { label: "Home", href: "#" },
  { label: "Education", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Competitions", href: "#" },
  { label: "Certifications", href: "#" },
  { label: "About", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      component="nav"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: { xs: "flex-start", md: "center" },
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open navigation"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}>
          <GooeyNav
            items={items}
            isHorizontal={true}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </Box>
      </Toolbar>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "black" },
        }}
      >
        <Box
          role="presentation"
          sx={{
            width: { xs: "70vw", sm: 360 },
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              sx={{ color: "white" }}
              aria-label="close navigation"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <GooeyNav
              items={items}
              isHorizontal={false}
              particleCount={12}
              particleDistances={[10, 8]}
              particleR={80}
              initialActiveIndex={0}
              animationTime={500}
              timeVariance={250}
              colors={[1, 2, 3, 1, 2, 3, 4]}
            />
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
