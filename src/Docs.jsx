import React from "react";
import DataDocs from "./docsData";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Docs() {
  return (
    <div>
      <Navbar />
      <DataDocs />
      <Footer />
    </div>
  );
}
