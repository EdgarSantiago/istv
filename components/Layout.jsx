import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import NavLinks from "./NavLinks";

export default function Layout({ children }) {
  return (
    <>
      <NavLinks />
      <Navbar />
      {children}
    </>
  );
}
