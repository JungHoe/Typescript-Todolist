import React from "react";
import NotFoundImage from "@/assets/images/404.png";

const StaticPage: React.FC = () => {
  return (
    <div data-testid="static-page-root">
      <header data-testid="static-page-header">헤더입니다</header>
      <div>
        <section>
          <img src={NotFoundImage} alt="notFound"></img>
        </section>
      </div>
    </div>
  );
};

export default StaticPage;
