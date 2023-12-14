import { CButton } from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">COMP 308</span>
        </h1>
      </header>
      <footer>
        <CButton as={<Link to="/login" />}>Login</CButton>
      </footer>
    </section>
  );
  return content;
};

export default Public;
