import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import styles from "../styles/Home.module.css";

export const defaultDrawerWidth = "33.3%";

export default function Home() {
  const [drawerWidth, setDrawerWidth] = useState({
    twitter: defaultDrawerWidth,
    products: defaultDrawerWidth,
    blog: defaultDrawerWidth,
  });

  const handleMouseDown = (e, name) => {
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener(
      "mousemove",
      () => {
        handleMouseMove(e, name);
      },
      true
    );
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener(
      "mousemove",
      () => {
        handleMouseMove(e, name);
      },
      true
    );
  };

  const handleMouseMove = useCallback((e, name) => {
    console.log(drawerWidth, name);
    const newWidth = e.clientX - document.body.offsetLeft;
    setDrawerWidth({ ...drawerWidth, [name]: newWidth });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, display: "flex", color: "#ffffff" }}>
      <Box
        sx={{
          height: "100vh",
          minWidth: "2rem",
          bgcolor: "#000000",
          width: drawerWidth.twitter,
        }}
      >
        1
      </Box>
      {/* <Box sx={{  theme.mixins.toolbar }} /> */}
      <Box
        onMouseDown={(e) => {
          handleMouseDown(e, "twitter");
        }}
        sx={{
          width: "10px",
          cursor: "ew-resize",
          padding: "4px 0 0",
          borderTop: "1px solid #ddd",
          // position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
        }}
      />
      <Box
        sx={{
          height: "100vh",
          minWidth: "2rem",
          bgcolor: "red",
          width: drawerWidth.products,
        }}
      >
        2
      </Box>
      <Box
        onMouseDown={(e) => handleMouseDown(e, "products")}
        sx={{
          width: "10px",
          cursor: "ew-resize",
          padding: "4px 0 0",
          borderTop: "1px solid #ddd",
          // position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
        }}
      />
      <Box
        sx={{
          height: "100vh",
          minWidth: "2rem",
          bgcolor: "purple",
          width: drawerWidth.blog,
        }}
      >
        3
      </Box>
      <Box
        onMouseDown={(e) => handleMouseDown(e, "blog")}
        sx={{
          width: "10px",
          cursor: "ew-resize",
          padding: "4px 0 0",
          borderTop: "1px solid #ddd",
          // position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
        }}
      />
    </Box>
  );
}
