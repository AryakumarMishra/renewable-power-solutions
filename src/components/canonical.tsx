// src/components/Canonical.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const ROOT = "https://www.renewablepowersolutions.co.nz";

const normalizePath = (path: string) => {
  // remove trailing slash except for root
  if (path !== "/" && path.endsWith("/")) return path.slice(0, -1);
  return path;
};

const Canonical: React.FC = () => {
  const { pathname, search } = useLocation();
  const normalized = normalizePath(pathname);
  // include query if you want them indexed with canonical (usually better to avoid for search)
  const canonical = `${ROOT}${normalized}${search || ""}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
};

export default Canonical;
