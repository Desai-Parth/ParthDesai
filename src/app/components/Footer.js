import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:border-light sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          <span>
            Designed by&nbsp;
            <span className="underline underline-offset-2">
              Code Craft & Solution | Parth
            </span>
          </span>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
