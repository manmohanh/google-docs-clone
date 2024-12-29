import React from "react";

interface DocumentsLayoutProps {
  children: React.ReactNode;
}

const DocumentLayout = ({ children }: DocumentsLayoutProps) => {
  return <div>{children}</div>;
};

export default DocumentLayout;
