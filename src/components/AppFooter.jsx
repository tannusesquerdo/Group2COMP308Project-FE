import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Group 2 Project
        </a>
        <span className="ms-1">&copy; 2023 Centennial College.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">
          Powered by CoreUI React Admin &amp; Dashboard Template
        </span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
