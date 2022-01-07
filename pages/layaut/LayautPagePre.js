import React from "react";
import Head from "next/head";
const LayautPagePre = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default LayautPagePre;
