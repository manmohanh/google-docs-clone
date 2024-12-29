import React from "react";
interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const documentId = (await params).documentId;
  return <div>DocumentId:{documentId}</div>;
};

export default DocumentIdPage;
